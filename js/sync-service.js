/* ============================================================
   SyncService — 零输入跨设备同步
   生成随机 AES-256-GCM 密钥加密推送配置，
   密钥+密文一起嵌入 URL，新设备扫码/点链接自动解密。
   不上传服务器，密钥随链接走，注意保管好链接。
   ============================================================ */

const SyncService = {
  // ── Crypto helpers ─────────────────────────────────────

  /** 生成随机 256-bit AES-GCM 密钥 */
  async _generateKey() {
    return crypto.subtle.generateKey(
      { name: 'AES-GCM', length: 256 },
      true,
      ['encrypt', 'decrypt']
    );
  },

  /** 导出密钥为 raw bytes → base64url */
  async _exportKey(key) {
    const raw = await crypto.subtle.exportKey('raw', key);
    return SyncService._bufToBase64url(new Uint8Array(raw));
  },

  /** 从 base64url 导入 raw AES-GCM 256-bit 密钥 */
  async _importKey(keyBase64url) {
    const raw = SyncService._base64urlToBuf(keyBase64url);
    return crypto.subtle.importKey(
      'raw', raw,
      { name: 'AES-GCM', length: 256 },
      false,
      ['decrypt']
    );
  },

  // ── Encoding ───────────────────────────────────────────

  _bufToBase64url(buf) {
    let binary = '';
    for (let i = 0; i < buf.length; i++) {
      binary += String.fromCharCode(buf[i]);
    }
    // btoa only works on latin1; each byte < 256 so safe
    return btoa(binary)
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');
  },

  _base64urlToBuf(str) {
    // Restore base64 standard chars
    str = str.replace(/-/g, '+').replace(/_/g, '/');
    // Pad
    while (str.length % 4) str += '=';
    const binary = atob(str);
    const buf = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      buf[i] = binary.charCodeAt(i);
    }
    return buf;
  },

  // ── Core Encrypt / Decrypt ─────────────────────────────

  /**
   * 加密任意字符串，返回 { key, payload }
   * key  — base64url 编码的 AES 密钥（放 URL 用）
   * payload — base64url 编码的 AES-GCM(IV + ciphertext)
   */
  async encrypt(plaintext) {
    const key = await SyncService._generateKey();
    const iv = crypto.getRandomValues(new Uint8Array(12));
    const enc = new TextEncoder();
    const ciphertext = await crypto.subtle.encrypt(
      { name: 'AES-GCM', iv },
      key,
      enc.encode(plaintext)
    );
    // 密文 = IV || ciphertext
    const ct = new Uint8Array(ciphertext);
    const combined = new Uint8Array(iv.length + ct.length);
    combined.set(iv);
    combined.set(ct, iv.length);

    const keyStr = await SyncService._exportKey(key);
    const payloadStr = SyncService._bufToBase64url(combined);

    return { key: keyStr, payload: payloadStr };
  },

  /**
   * 解密。key 和 payload 均为 base64url 字符串。
   * 成功返回明文字符串，失败 throw Error('密码错误' / '数据损坏')
   */
  async decrypt(keyBase64url, payloadBase64url) {
    let key;
    try {
      key = await SyncService._importKey(keyBase64url);
    } catch (e) {
      throw new Error('密钥格式不正确');
    }

    let combined;
    try {
      combined = SyncService._base64urlToBuf(payloadBase64url);
    } catch (e) {
      throw new Error('数据格式不正确');
    }

    if (combined.length < 13) {
      throw new Error('数据不完整');
    }

    const iv = combined.slice(0, 12);
    const ct = combined.slice(12);

    try {
      const plainBuf = await crypto.subtle.decrypt(
        { name: 'AES-GCM', iv },
        key,
        ct
      );
      return new TextDecoder().decode(plainBuf);
    } catch (e) {
      throw new Error('链接无效或已损坏（解密失败）');
    }
  },

  // ── Sync URL ───────────────────────────────────────────

  /**
   * 加密当前配置并生成同步 URL。
   * URL 格式: ?s=<payload>&k=<key>
   */
  async generateSyncURL(configObj) {
    const plaintext = JSON.stringify(configObj);
    const { key, payload } = await SyncService.encrypt(plaintext);
    const base = window.location.origin + window.location.pathname;
    const s = encodeURIComponent(payload);
    const k = encodeURIComponent(key);
    return `${base}?s=${s}&k=${k}`;
  },

  // ── QR Code ────────────────────────────────────────────

  /** 返回 QR 图片 URL（qrserver API，免费无需 key） */
  getQRCodeURL(syncURL) {
    return 'https://api.qrserver.com/v1/create-qr-code/?size=240x240&data='
      + encodeURIComponent(syncURL);
  }
};
