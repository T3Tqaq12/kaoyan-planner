/* 打卡照片存储 · IndexedDB 引擎 + Canvas 压缩 */
/* 照片不参与 JSON 导出，只存本地浏览器 */

(function() {

  var DB_NAME = 'kaoyan_photos';
  var DB_VERSION = 1;
  var STORE_NAME = 'photos';
  var MAX_SIZE = 800;       // 压缩后最大边长
  var JPEG_QUALITY = 0.7;   // JPEG 质量
  var MAX_FILE_SIZE = 10 * 1024 * 1024; // 原图上限 10MB

  var _db = null;  // cached DB instance

  // ── IndexedDB 初始化 ────────────────────────────────────
  function init() {
    return new Promise(function(resolve, reject) {
      if (_db) { resolve(_db); return; }

      if (!window.indexedDB) {
        console.warn('PhotoStore: IndexedDB not available');
        resolve(null);
        return;
      }

      var req = indexedDB.open(DB_NAME, DB_VERSION);
      req.onupgradeneeded = function(e) {
        var db = e.target.result;
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          var store = db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
          store.createIndex('date', 'date', { unique: false });
          store.createIndex('subject', 'subject', { unique: false });
        }
      };
      req.onsuccess = function(e) {
        _db = e.target.result;
        resolve(_db);
      };
      req.onerror = function(e) {
        console.warn('PhotoStore: failed to open IndexedDB', e.target.error);
        resolve(null);
      };
    });
  }

  function isAvailable() {
    return !!window.indexedDB;
  }

  // ── Promise wrapper for IDB transactions ─────────────────
  function idbPromise(mode, fn) {
    return init().then(function(db) {
      if (!db) return Promise.reject(new Error('DB unavailable'));
      return new Promise(function(resolve, reject) {
        var tx = db.transaction(STORE_NAME, mode);
        var store = tx.objectStore(STORE_NAME);
        fn(store, resolve, reject, tx);
      });
    });
  }

  // ── Canvas 压缩 ─────────────────────────────────────────
  function compress(file) {
    return new Promise(function(resolve, reject) {
      if (file.size > MAX_FILE_SIZE) {
        reject(new Error('图片过大，请选择 10MB 以内的图片'));
        return;
      }

      var reader = new FileReader();
      reader.onload = function(e) {
        var img = new Image();
        img.onload = function() {
          var w = img.width;
          var h = img.height;
          var scale = Math.min(1, MAX_SIZE / Math.max(w, h));
          var cw = Math.round(w * scale);
          var ch = Math.round(h * scale);

          var canvas = document.createElement('canvas');
          canvas.width = cw;
          canvas.height = ch;
          var ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, cw, ch);

          // Try toBlob first, fallback to toDataURL
          if (canvas.toBlob) {
            canvas.toBlob(function(blob) {
              if (!blob) {
                // Fallback
                resolve({ dataUrl: canvas.toDataURL('image/jpeg', JPEG_QUALITY), width: cw, height: ch });
                return;
              }
              var r2 = new FileReader();
              r2.onload = function(ev) {
                resolve({ dataUrl: ev.target.result, width: cw, height: ch });
              };
              r2.onerror = function() {
                resolve({ dataUrl: canvas.toDataURL('image/jpeg', JPEG_QUALITY), width: cw, height: ch });
              };
              r2.readAsDataURL(blob);
            }, 'image/jpeg', JPEG_QUALITY);
          } else {
            resolve({ dataUrl: canvas.toDataURL('image/jpeg', JPEG_QUALITY), width: cw, height: ch });
          }
        };
        img.onerror = function() {
          reject(new Error('图片加载失败'));
        };
        img.src = e.target.result;
      };
      reader.onerror = function() {
        reject(new Error('文件读取失败'));
      };
      reader.readAsDataURL(file);
    });
  }

  // ── CRUD ─────────────────────────────────────────────────
  function add(photoData) {
    return idbPromise('readwrite', function(store, resolve, reject) {
      var record = {
        date: photoData.date,
        subject: photoData.subject,
        dataUrl: photoData.dataUrl,
        width: photoData.width || 0,
        height: photoData.height || 0,
        caption: photoData.caption || '',
        timestamp: photoData.timestamp || new Date().toISOString()
      };
      var req = store.add(record);
      req.onsuccess = function(e) { resolve(e.target.result); };
      req.onerror = function(e) { reject(e.target.error); };
    });
  }

  function getAll() {
    return idbPromise('readonly', function(store, resolve) {
      var results = [];
      store.openCursor(null, 'prev').onsuccess = function(e) {
        var cursor = e.target.result;
        if (cursor) { results.push(cursor.value); cursor.continue(); }
        else { resolve(results); }
      };
    }).catch(function() { return []; });
  }

  function getBySubject(subId) {
    return idbPromise('readonly', function(store, resolve) {
      var results = [];
      var idx = store.index('subject');
      idx.openCursor(IDBKeyRange.only(subId), 'prev').onsuccess = function(e) {
        var cursor = e.target.result;
        if (cursor) { results.push(cursor.value); cursor.continue(); }
        else { resolve(results); }
      };
    }).catch(function() { return []; });
  }

  function remove(photoId) {
    return idbPromise('readwrite', function(store, resolve, reject) {
      var req = store.delete(photoId);
      req.onsuccess = function() { resolve(true); };
      req.onerror = function(e) { reject(e.target.error); };
    });
  }

  function count() {
    return idbPromise('readonly', function(store, resolve) {
      var req = store.count();
      req.onsuccess = function(e) { resolve(e.target.result); };
      req.onerror = function() { resolve(0); };
    }).catch(function() { return 0; });
  }

  // ── Export ───────────────────────────────────────────────
  window.PhotoStore = {
    init: init,
    isAvailable: isAvailable,
    compress: compress,
    add: add,
    getAll: getAll,
    getBySubject: getBySubject,
    delete: remove,
    count: count
  };

})();
