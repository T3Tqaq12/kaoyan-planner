/* 番茄钟 · 计时引擎 + 存储 + 音频 + UI + GitHub 上传
   设计：Quiet Luxury × Scandinavian Minimalism
   番茄钟与打卡系统独立，不互相触发 */

(function() {

  // ── Constants ────────────────────────────────────────────────
  var STORAGE_SESSIONS = 'kaoyan_pomodoro_sessions';
  var STORAGE_STATE    = 'kaoyan_pomodoro_state';
  var STORAGE_CONFIG   = 'kaoyan_pomodoro_config';
  var STORAGE_UPLOADS  = 'kaoyan_pomodoro_uploads';

  var TICK_MS = 1000;
  var RING_CIRCUMFERENCE = 440; // 2π·r where r=70

  var SUBJECT_MAP = {
    math2:    { name: '数学二', icon: '📐', color: '#E8876B' },
    cs819:    { name: '819 数据结构', icon: '💻', color: '#7BAA8B' },
    english2: { name: '英语二', icon: '📖', color: '#7B8FC7' },
    politics: { name: '政治', icon: '📰', color: '#C77B84' }
  };

  // ── Helpers ──────────────────────────────────────────────────
  function todayStr() {
    var d = new Date();
    return d.getFullYear() + '-' +
      String(d.getMonth() + 1).padStart(2, '0') + '-' +
      String(d.getDate()).padStart(2, '0');
  }

  function timeStr(date) {
    return String(date.getHours()).padStart(2, '0') + ':' +
           String(date.getMinutes()).padStart(2, '0');
  }

  function dayOfWeek(dateStr) {
    return ['日','一','二','三','四','五','六'][new Date(dateStr + 'T00:00:00').getDay()];
  }

  function fmtMinSec(totalSeconds) {
    var m = Math.floor(totalSeconds / 60);
    var s = totalSeconds % 60;
    return String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');
  }

  function defaultConfig() {
    return { focusMin: 25, breakMin: 5, longBreakMin: 15, longBreakInterval: 4 };
  }

  function defaultState() {
    return {
      phase: 'idle',
      subject: 'math2',
      startedAt: null,
      remaining: null,
      pomodoroCount: 0,
      date: todayStr()
    };
  }

  // ════════════════════════════════════════════════════════════
  //  PomodoroTimer
  // ════════════════════════════════════════════════════════════
  var PomodoroTimer = {
    _config: null,
    _state: null,
    _tickTimer: null,
    _onTick: null,
    _onPhaseChange: null,

    init: function() {
      this._config = this.loadConfig();
      this._state = this.loadState();
      if (this._state.phase === 'focus' || this._state.phase === 'break') {
        this.recalcRemaining();
        if (this._state.remaining <= 0) {
          this.complete();
        } else {
          this._startTick();
        }
      }
      return this;
    },

    loadConfig: function() {
      try {
        var raw = localStorage.getItem(STORAGE_CONFIG);
        if (!raw) return defaultConfig();
        var cfg = JSON.parse(raw);
        var def = defaultConfig();
        for (var k in def) { if (!(k in cfg)) cfg[k] = def[k]; }
        return cfg;
      } catch(e) { return defaultConfig(); }
    },

    saveConfig: function(cfg) {
      this._config = cfg;
      try { localStorage.setItem(STORAGE_CONFIG, JSON.stringify(cfg)); } catch(e) {}
    },

    getConfig: function() { return this._config; },

    loadState: function() {
      try {
        var raw = localStorage.getItem(STORAGE_STATE);
        if (!raw) return defaultState();
        var st = JSON.parse(raw);
        if (st.date !== todayStr() && (st.phase === 'focus' || st.phase === 'break')) {
          return defaultState();
        }
        return st;
      } catch(e) { return defaultState(); }
    },

    saveState: function() {
      try { localStorage.setItem(STORAGE_STATE, JSON.stringify(this._state)); } catch(e) {}
    },

    clearState: function() {
      try { localStorage.removeItem(STORAGE_STATE); } catch(e) {}
      this._state = defaultState();
    },

    getState: function() { return this._state; },
    isRunning: function() { return this._state.phase === 'focus' || this._state.phase === 'break'; },
    isFocus: function() { return this._state.phase === 'focus'; },
    isBreak: function() { return this._state.phase === 'break'; },
    isPaused: function() { return this._state.phase === 'paused'; },
    isIdle: function() { return this._state.phase === 'idle'; },

    _getPhaseDuration: function(phase) {
      if (phase === 'focus') return this._config.focusMin * 60;
      if (phase === 'break') {
        var cnt = this._state.pomodoroCount + 1;
        if (this._config.longBreakInterval > 0 && cnt % this._config.longBreakInterval === 0) {
          return this._config.longBreakMin * 60;
        }
        return this._config.breakMin * 60;
      }
      return 0;
    },

    recalcRemaining: function() {
      if (!this._state.startedAt || this._state.remaining == null) return;
      if (this._state.phase !== 'focus' && this._state.phase !== 'break') return;
      var now = Date.now();
      var elapsed = Math.floor((now - this._state.startedAt) / 1000);
      var newRemaining = Math.max(0, this._state.remaining - elapsed);
      this._state.remaining = newRemaining;
      if (newRemaining > 0) this._state.startedAt = now;
    },

    start: function(subject) {
      this._stopTick();
      if (this._state.phase === 'paused') {
        this._state.phase = this._state._pausedPhase || 'focus';
        this._state.startedAt = Date.now();
        delete this._state._pausedPhase;
      } else {
        this._state.phase = 'focus';
        this._state.subject = subject || 'math2';
        this._state.date = todayStr();
        this._state.remaining = this._config.focusMin * 60;
        this._state.startedAt = Date.now();
      }
      this.saveState();
      this._startTick();
      if (this._onPhaseChange) this._onPhaseChange(this._state.phase, this._state.subject);
    },

    pause: function() {
      if (!this.isRunning()) return;
      this.recalcRemaining();
      this._state._pausedPhase = this._state.phase;
      this._state.phase = 'paused';
      this._state.startedAt = null;
      this.saveState();
      this._stopTick();
      if (this._onPhaseChange) this._onPhaseChange('paused', this._state.subject);
    },

    resume: function() {
      if (this._state.phase !== 'paused') return;
      this.start(this._state.subject);
    },

    skip: function() {
      if (!this.isRunning()) return;
      this._stopTick();
      this.complete();
    },

    reset: function() {
      this._stopTick();
      this.clearState();
      this.saveState();
      if (this._onPhaseChange) this._onPhaseChange('idle', this._state.subject);
    },

    complete: function() {
      var phase = this._state.phase;
      var subject = this._state.subject;
      var date = this._state.date;
      this._stopTick();

      if (phase === 'focus') {
        var durationMin = this._config.focusMin;
        var startTime = new Date(this._state.startedAt || (Date.now() - durationMin * 60000));

        PomodoroStorage.addSession(date, {
          subject: subject,
          startTime: timeStr(startTime),
          endTime: timeStr(new Date()),
          duration: durationMin,
          type: 'focus',
          pomodoroCount: this._state.pomodoroCount + 1
        });

        this._state.pomodoroCount++;
        this._state.remaining = null;
        this._state.startedAt = null;

        // Transition to break
        this._state.phase = 'break';
        this._state.remaining = this._getPhaseDuration('break');
        this._state.startedAt = Date.now();
        this._state.subject = subject;
        this.saveState();

        PomodoroAudio.playChime();
        PomodoroNotify.send('🍅 专注完成！', '休息一下吧~');

        this._startTick();
        if (this._onPhaseChange) this._onPhaseChange('break', subject);

      } else if (phase === 'break') {
        this._state.phase = 'idle';
        this._state.remaining = null;
        this._state.startedAt = null;
        this.saveState();

        PomodoroAudio.playChime();
        PomodoroNotify.send('☕ 休息结束', '准备开始下一个番茄吧~');

        if (this._onPhaseChange) this._onPhaseChange('idle', subject);
      }
    },

    _startTick: function() {
      var self = this;
      this._stopTick();
      this._tickTimer = setInterval(function() { self._tick(); }, TICK_MS);
    },

    _stopTick: function() {
      if (this._tickTimer) { clearInterval(this._tickTimer); this._tickTimer = null; }
    },

    _tick: function() {
      if (!this.isRunning()) { this._stopTick(); return; }
      this.recalcRemaining();
      if (this._state.remaining <= 0) {
        this.complete();
      } else {
        this.saveState();
        if (this._onTick) {
          var total = this._getPhaseDuration(this._state.phase);
          var progress = total > 0 ? 1 - (this._state.remaining / total) : 0;
          this._onTick(this._state.remaining, progress, this._state.phase, this._state.subject);
        }
      }
    },

    getProgress: function() {
      if (!this.isRunning()) return 0;
      var total = this._getPhaseDuration(this._state.phase);
      if (total <= 0) return 0;
      return 1 - (this._state.remaining / total);
    },

    getRemaining: function() {
      if (!this.isRunning()) return null;
      return this._state.remaining;
    },

    onTick: function(fn) { this._onTick = fn; },
    onPhaseChange: function(fn) { this._onPhaseChange = fn; }
  };

  // ════════════════════════════════════════════════════════════
  //  PomodoroStorage
  // ════════════════════════════════════════════════════════════
  var PomodoroStorage = {
    _getAll: function() {
      try { return JSON.parse(localStorage.getItem(STORAGE_SESSIONS)) || {}; }
      catch(e) { return {}; }
    },

    _saveAll: function(data) {
      try { localStorage.setItem(STORAGE_SESSIONS, JSON.stringify(data)); } catch(e) {}
    },

    addSession: function(date, session) {
      var data = this._getAll();
      if (!data[date]) data[date] = [];
      session.id = Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
      data[date].push(session);
      this._saveAll(data);
    },

    getDaySessions: function(date) {
      var data = this._getAll();
      return (data[date] || []).slice();
    },

    getDayStats: function(date) {
      var sessions = this.getDaySessions(date);
      var stats = { totalMinutes: 0, totalPomodoros: 0, bySubject: {} };
      sessions.forEach(function(s) {
        if (s.type !== 'focus') return;
        stats.totalMinutes += s.duration;
        stats.totalPomodoros++;
        if (!stats.bySubject[s.subject]) {
          stats.bySubject[s.subject] = { minutes: 0, pomodoros: 0 };
        }
        stats.bySubject[s.subject].minutes += s.duration;
        stats.bySubject[s.subject].pomodoros++;
      });
      return stats;
    },

    getMonthDays: function(year, month) {
      var data = this._getAll();
      var prefix = year + '-' + String(month).padStart(2, '0');
      var days = [];
      Object.keys(data).forEach(function(date) {
        if (date.startsWith(prefix)) {
          var stats = PomodoroStorage.getDayStats(date);
          days.push({
            date: date,
            day: parseInt(date.split('-')[2]),
            totalMinutes: stats.totalMinutes,
            totalPomodoros: stats.totalPomodoros,
            bySubject: stats.bySubject
          });
        }
      });
      days.sort(function(a, b) { return a.date.localeCompare(b.date); });
      return days;
    },

    getWeekStats: function() {
      var today = new Date();
      var day = today.getDay();
      var monday = new Date(today);
      monday.setDate(today.getDate() - (day === 0 ? 6 : day - 1));
      var totalMinutes = 0, totalPomodoros = 0;
      for (var i = 0; i < 7; i++) {
        var d = new Date(monday);
        d.setDate(monday.getDate() + i);
        var ds = d.getFullYear() + '-' +
          String(d.getMonth() + 1).padStart(2, '0') + '-' +
          String(d.getDate()).padStart(2, '0');
        var stats = this.getDayStats(ds);
        totalMinutes += stats.totalMinutes;
        totalPomodoros += stats.totalPomodoros;
      }
      return { totalMinutes: totalMinutes, totalPomodoros: totalPomodoros };
    }
  };

  // ════════════════════════════════════════════════════════════
  //  PomodoroAudio
  // ════════════════════════════════════════════════════════════
  var PomodoroAudio = {
    _ctx: null,
    _getCtx: function() {
      if (!this._ctx) {
        try { this._ctx = new (window.AudioContext || window.webkitAudioContext)(); } catch(e) {}
      }
      return this._ctx;
    },
    playChime: function() {
      var ctx = this._getCtx();
      if (!ctx) return;
      if (ctx.state === 'suspended') ctx.resume();
      var now = ctx.currentTime;
      [880, 660].forEach(function(freq, i) {
        var osc = ctx.createOscillator();
        var gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + i * 0.15);
        gain.gain.setValueAtTime(0.18, now + i * 0.15);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.15 + 1.2);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + i * 0.15);
        osc.stop(now + i * 0.15 + 1.2);
      });
    }
  };

  // ════════════════════════════════════════════════════════════
  //  PomodoroNotify
  // ════════════════════════════════════════════════════════════
  var PomodoroNotify = {
    request: function() {
      if (!('Notification' in window)) return;
      if (Notification.permission === 'granted' || Notification.permission === 'denied') return;
      Notification.requestPermission();
    },
    send: function(title, body) {
      if (!document.hidden) return;
      if (!('Notification' in window)) return;
      if (Notification.permission !== 'granted') return;
      try {
        new Notification(title, {
          body: body,
          icon: 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🍅</text></svg>'),
          silent: false
        });
      } catch(e) {}
    }
  };
  PomodoroNotify.request();

  // ════════════════════════════════════════════════════════════
  //  PomodoroUI
  // ════════════════════════════════════════════════════════════
  var PomodoroUI = {
    _currentSubject: 'math2',
    _historyDate: null,
    _historyMode: 'day',
    _historyYear: null,
    _historyMonth: null,

    init: function() {
      this._currentSubject = PomodoroTimer.getState().subject || 'math2';
      this._historyDate = todayStr();
      var d = new Date();
      this._historyYear = d.getFullYear();
      this._historyMonth = d.getMonth() + 1;

      var self = this;
      PomodoroTimer.onTick(function(remaining, progress, phase, subject) {
        self.updateRing(remaining, progress, phase);
        self.updateTitle(remaining, phase);
      });
      PomodoroTimer.onPhaseChange(function(phase, subject) {
        self._currentSubject = subject;
        self.renderPanel();
        self.updateIconGlow();
        if (phase === 'idle') {
          document.title = '考研学习规划 · 西安工业大学';
        }
      });
      this.bindEvents();
    },

    bindEvents: function() {
      var self = this;

      document.getElementById('tomatoIconBtn')?.addEventListener('click', function() {
        self.togglePanel();
      });

      document.getElementById('tomatoOverlay')?.addEventListener('click', function(e) {
        if (e.target === this) self.closePanel();
      });

      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
          if (document.getElementById('tomatoOverlay')?.classList.contains('show')) self.closePanel();
          if (document.getElementById('historyOverlay')?.classList.contains('show')) self.closeHistory();
        }
      });

      document.getElementById('historyOverlay')?.addEventListener('click', function(e) {
        if (e.target === this) self.closeHistory();
      });
      document.getElementById('histClose')?.addEventListener('click', function() {
        self.closeHistory();
      });

      document.getElementById('tomatoDropdown')?.addEventListener('click', function(e) {
        var tgt = e.target;
        if (tgt.closest('#btnTomatoStart')) self._handleStart();
        if (tgt.closest('#btnTomatoPause')) self._handlePause();
        if (tgt.closest('#btnTomatoResume')) self._handleResume();
        if (tgt.closest('#btnTomatoSkip')) self._handleSkip();
        if (tgt.closest('#btnTomatoReset')) self._handleReset();
        if (tgt.closest('#btnTomatoConfig')) self._toggleConfig();
        if (tgt.closest('#btnTomatoSaveConfig')) self._saveConfig();
        if (tgt.closest('#btnTomatoHistory')) self.openHistory();
        if (tgt.closest('.tomato-subject-btn')) {
          var sub = tgt.closest('.tomato-subject-btn').dataset.subject;
          if (sub) { self._currentSubject = sub; self.renderSubjectBtns(); }
        }
      });

      document.getElementById('historyOverlay')?.addEventListener('click', function(e) {
        if (e.target.closest('#histPrev')) self._navigateHistory(-1);
        if (e.target.closest('#histNext')) self._navigateHistory(1);
        if (e.target.closest('#histModeDay')) self._switchHistoryMode('day');
        if (e.target.closest('#histModeMonth')) self._switchHistoryMode('month');
      });
    },

    togglePanel: function() {
      var overlay = document.getElementById('tomatoOverlay');
      if (overlay?.classList.contains('show')) {
        this.closePanel();
      } else {
        this._currentSubject = (App.instance && App.instance.currentPage) ? App.instance.currentPage : 'math2';
        this.renderPanel();
        overlay?.classList.add('show');
        // First-tap tooltip — explain what the timer does
        if (!localStorage.getItem('kaoyan_pomodoro_seen_tip')) {
          localStorage.setItem('kaoyan_pomodoro_seen_tip', '1');
          if (App.instance) App.instance.showToast('🍅 25分钟专注 + 5分钟休息');
        }
      }
    },

    closePanel: function() {
      document.getElementById('tomatoOverlay')?.classList.remove('show');
    },

    renderPanel: function() {
      var panel = document.getElementById('tomatoDropdown');
      if (!panel) return;

      var state = PomodoroTimer.getState();
      var config = PomodoroTimer.getConfig();
      var today = todayStr();
      var dayStats = PomodoroStorage.getDayStats(today);
      var weekStats = PomodoroStorage.getWeekStats();
      var remaining = PomodoroTimer.getRemaining();

      var timeDisplay;
      if (state.phase === 'paused') {
        timeDisplay = '时间暂停';
      } else if (remaining != null) {
        timeDisplay = fmtMinSec(remaining);
      } else if (state.phase === 'idle') {
        timeDisplay = fmtMinSec(config.focusMin * 60);
      } else {
        timeDisplay = '--:--';
      }

      var progress = (state.phase === 'focus' || state.phase === 'break') ? PomodoroTimer.getProgress() : 0;
      var pomoCount = state.pomodoroCount;
      var offset = RING_CIRCUMFERENCE * (1 - progress);
      var ringColor = state.phase === 'break' ? '#7BAA8B' : '#C2796B';
      var initTransition = remaining != null ? 'transition: stroke-dashoffset 1s linear;' : '';

      var html = '';

      // Header
      html += '<div class="tomato-dd-header">';
      html += '<span class="tomato-dd-title">🍅 番茄专注</span>';
      // phase label removed
      html += '</div>';

      // Ring
      html += '<div class="tomato-dd-ring">';
      html += '<svg viewBox="0 0 160 160" class="tomato-ring-svg">';
      html += '<circle class="tomato-ring-track" cx="80" cy="80" r="70" fill="none" stroke="var(--border-strong)" stroke-width="5"/>';
      html += '<circle class="tomato-ring-fill" cx="80" cy="80" r="70" fill="none" stroke="' + ringColor + '" stroke-width="5" stroke-linecap="round"';
      html += ' stroke-dasharray="' + RING_CIRCUMFERENCE + '" stroke-dashoffset="' + offset.toFixed(1) + '"';
      html += ' style="transform: rotate(-90deg); transform-origin: 80px 80px; ' + initTransition + '"/>';
      html += '</svg>';
      html += '<div class="tomato-ring-time' + (state.phase === 'paused' ? ' paused' : '') + '">' + timeDisplay + '</div>';
      html += '<div class="tomato-ring-count">🍅 ' + pomoCount + ' 个</div>';
      html += '</div>';

      // Subject selector
      html += '<div class="tomato-dd-subject">';
      ['math2','cs819','english2','politics'].forEach(function(subId) {
        var sub = SUBJECT_MAP[subId];
        var active = subId === PomodoroUI._currentSubject ? ' active' : '';
        html += '<button class="tomato-subject-btn' + active + '" data-subject="' + subId + '">' + sub.icon + ' ' + sub.name + '</button>';
      });
      html += '</div>';

      // Controls
      html += '<div class="tomato-dd-controls">';
      if (state.phase === 'idle') {
        html += '<button class="btn btn-primary btn-sm" id="btnTomatoStart">▶ 开始专注</button>';
      } else if (state.phase === 'paused') {
        html += '<button class="btn btn-primary btn-sm" id="btnTomatoResume">▶ 继续</button>';
        html += '<button class="btn btn-ghost btn-sm" id="btnTomatoReset">⏹ 结束</button>';
      } else if (state.phase === 'focus') {
        html += '<button class="btn btn-ghost btn-sm" id="btnTomatoPause">⏸ 暂停</button>';
        html += '<button class="btn btn-ghost btn-sm" id="btnTomatoSkip">⏭ 跳过</button>';
        html += '<button class="btn btn-ghost btn-sm" id="btnTomatoReset">⏹ 结束</button>';
      } else if (state.phase === 'break') {
        html += '<button class="btn btn-ghost btn-sm" id="btnTomatoSkip">⏭ 跳过休息</button>';
        html += '<button class="btn btn-ghost btn-sm" id="btnTomatoReset">⏹ 结束</button>';
      }
      html += '</div>';

      // Config
      html += '<div class="tomato-dd-config-toggle">';
      html += '<button class="btn btn-ghost btn-xs" id="btnTomatoConfig">⚙️ 自定义时长</button>';
      html += '</div>';

      html += '<div class="tomato-dd-config" id="tomatoConfigPanel" style="display:none">';
      html += '<div class="tomato-config-row"><label>专注</label><input type="number" id="cfg-focusMin" value="' + config.focusMin + '" min="1" max="120"> <span>分钟</span></div>';
      html += '<div class="tomato-config-row"><label>休息</label><input type="number" id="cfg-breakMin" value="' + config.breakMin + '" min="1" max="60"> <span>分钟</span></div>';
      html += '<div class="tomato-config-row"><label>长休息</label><input type="number" id="cfg-longBreakMin" value="' + config.longBreakMin + '" min="1" max="60"> <span>分钟</span></div>';
      html += '<div class="tomato-config-row"><label>长休息间隔</label><input type="number" id="cfg-longBreakInterval" value="' + config.longBreakInterval + '" min="1" max="10"> <span>个番茄</span></div>';
      html += '<button class="btn btn-primary btn-xs" id="btnTomatoSaveConfig">保存设置</button>';
      html += '</div>';

      // Stats
      html += '<div class="tomato-dd-stats">';
      html += '<span>今日 🍅×' + dayStats.totalPomodoros + ' · ' + dayStats.totalMinutes + 'min</span>';
      html += '<span>本周 ' + (weekStats.totalMinutes / 60).toFixed(1) + 'h</span>';
      html += '</div>';

      // History link
      html += '<div class="tomato-dd-history-link">';
      html += '<button class="btn btn-ghost btn-xs" id="btnTomatoHistory">📊 查看历史记录</button>';
      html += '</div>';

      panel.innerHTML = html;
    },

    updateRing: function(remaining, progress, phase) {
      var timeEl = document.querySelector('.tomato-ring-time');
      var fillEl = document.querySelector('.tomato-ring-fill');
      var countEl = document.querySelector('.tomato-ring-count');

      if (timeEl) { timeEl.textContent = fmtMinSec(remaining); timeEl.classList.remove('paused'); }
      if (fillEl) {
        fillEl.style.strokeDashoffset = RING_CIRCUMFERENCE * (1 - progress);
        fillEl.style.stroke = phase === 'break' ? '#7BAA8B' : '#C2796B';
      }
      if (countEl) countEl.textContent = '🍅 ' + PomodoroTimer.getState().pomodoroCount + ' 个';
    },

    updateTitle: function(remaining, phase) {
      var prefix = phase === 'focus' ? '专注中' : '休息中';
      document.title = fmtMinSec(remaining) + ' · ' + prefix + ' — 考研学习规划';
    },

    updateIconGlow: function() {
      var btn = document.getElementById('tomatoIconBtn');
      if (!btn) return;
      if (PomodoroTimer.isRunning()) {
        btn.classList.add('running');
      } else {
        btn.classList.remove('running');
      }
    },

    renderSubjectBtns: function() {
      document.querySelectorAll('.tomato-subject-btn').forEach(function(b) {
        b.classList.toggle('active', b.dataset.subject === PomodoroUI._currentSubject);
      });
    },

    _handleStart: function() {
      PomodoroTimer.start(this._currentSubject);
      this.renderPanel();
      this.updateIconGlow();
      var rem = PomodoroTimer.getState().remaining;
      document.title = fmtMinSec(rem) + ' · 专注中 — 考研学习规划';
    },
    _handlePause: function() { PomodoroTimer.pause(); this.renderPanel(); },
    _handleResume: function() { PomodoroTimer.resume(); this.renderPanel(); this.updateIconGlow(); },
    _handleSkip: function() {
      PomodoroTimer.skip();
      this.renderPanel();
      this.updateIconGlow();
      if (App.instance) App.instance.renderHeaderStrip();
    },
    _handleReset: function() {
      PomodoroTimer.reset();
      this.renderPanel();
      this.updateIconGlow();
      document.title = '考研学习规划 · 西安工业大学';
      if (App.instance) App.instance.renderHeaderStrip();
    },
    _toggleConfig: function() {
      var panel = document.getElementById('tomatoConfigPanel');
      if (panel) panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
    },
    _saveConfig: function() {
      var cfg = {
        focusMin: parseInt(document.getElementById('cfg-focusMin')?.value) || 25,
        breakMin: parseInt(document.getElementById('cfg-breakMin')?.value) || 5,
        longBreakMin: parseInt(document.getElementById('cfg-longBreakMin')?.value) || 15,
        longBreakInterval: parseInt(document.getElementById('cfg-longBreakInterval')?.value) || 4
      };
      PomodoroTimer.saveConfig(cfg);
      this.renderPanel();
      if (window.App && App.instance) App.instance.showToast('番茄钟配置已保存 ✅');
    },

    // ── History ─────────────────────────────────────────────
    openHistory: function() {
      this.closePanel();
      this._historyDate = todayStr();
      this._historyMode = 'day';
      this.renderHistory();
      document.getElementById('historyOverlay')?.classList.add('show');
      document.body.style.overflow = 'hidden';
    },
    closeHistory: function() {
      document.getElementById('historyOverlay')?.classList.remove('show');
      document.body.style.overflow = '';
    },
    _switchHistoryMode: function(mode) {
      this._historyMode = mode;
      if (mode === 'day') {
        this._historyDate = todayStr();
      } else {
        var d = new Date();
        this._historyYear = d.getFullYear();
        this._historyMonth = d.getMonth() + 1;
      }
      this.renderHistory();
    },
    _navigateHistory: function(delta) {
      if (this._historyMode === 'day') {
        var parts = this._historyDate.split('-');
        var d = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]));
        d.setDate(d.getDate() + delta);
        this._historyDate = d.getFullYear() + '-' +
          String(d.getMonth() + 1).padStart(2, '0') + '-' +
          String(d.getDate()).padStart(2, '0');
      } else {
        this._historyMonth += delta;
        if (this._historyMonth > 12) { this._historyMonth = 1; this._historyYear++; }
        if (this._historyMonth < 1) { this._historyMonth = 12; this._historyYear--; }
      }
      this.renderHistory();
    },

    renderHistory: function() {
      var tabDay = document.getElementById('histModeDay');
      var tabMonth = document.getElementById('histModeMonth');
      if (tabDay) tabDay.classList.toggle('active', this._historyMode === 'day');
      if (tabMonth) tabMonth.classList.toggle('active', this._historyMode === 'month');

      var body = document.getElementById('histBody');
      var nav = document.getElementById('histNav');
      var summary = document.getElementById('histSummary');

      if (this._historyMode === 'day') {
        this._renderDayHistory(body, nav, summary);
      } else {
        this._renderMonthHistory(body, nav, summary);
      }
    },

    _renderDayHistory: function(body, nav, summary) {
      var date = this._historyDate;
      var sessions = PomodoroStorage.getDaySessions(date);
      var stats = PomodoroStorage.getDayStats(date);
      var dow = dayOfWeek(date);
      var parts = date.split('-');

      if (nav) {
        nav.innerHTML = '<button id="histPrev" title="前一天">◀</button>' +
          '<span class="hist-date-label">' + parseInt(parts[1]) + '月' + parseInt(parts[2]) + '日 星期' + dow + '</span>' +
          '<button id="histNext" title="后一天"' + (date >= todayStr() ? ' disabled' : '') + '>▶</button>';
      }

      if (!sessions.length) {
        if (body) body.innerHTML = '<div class="hist-empty">📭 当天没有番茄记录</div>';
      } else {
        var grouped = {};
        sessions.forEach(function(s) {
          if (!grouped[s.subject]) grouped[s.subject] = [];
          grouped[s.subject].push(s);
        });

        var html = '';
        Object.keys(grouped).forEach(function(subId) {
          var sub = SUBJECT_MAP[subId] || { name: subId, icon: '📌' };
          var subSessions = grouped[subId];
          var subMin = subSessions.filter(function(s) { return s.type === 'focus'; }).reduce(function(a, s) { return a + s.duration; }, 0);
          var subPomo = subSessions.filter(function(s) { return s.type === 'focus'; }).length;

          html += '<div class="hist-subject-group">';
          html += '<div class="hist-subject-head"><span>' + sub.icon + '</span> ' + sub.name +
            ' <span class="hist-subject-stat">' + subMin + 'min · 🍅×' + subPomo + '</span></div>';

          subSessions.forEach(function(s) {
            var icon = s.type === 'focus' ? '🍅' : '☕';
            var label = s.type === 'focus' ? '专注' : '休息';
            html += '<div class="hist-session-row">' +
              '<span class="hist-session-icon">' + icon + '</span>' +
              '<span class="hist-session-time">' + s.startTime + ' – ' + s.endTime + '</span>' +
              '<span class="hist-session-label">' + label + '</span>' +
              '<span class="hist-session-dur">' + s.duration + 'min</span>' +
              '</div>';
          });
          html += '</div>';
        });
        if (body) body.innerHTML = html;
      }

      if (summary) {
        summary.innerHTML = '当日总计 <strong>' + stats.totalMinutes + '分钟</strong> · 🍅×' + stats.totalPomodoros;
      }
    },

    _renderMonthHistory: function(body, nav, summary) {
      var year = this._historyYear;
      var month = this._historyMonth;
      var days = PomodoroStorage.getMonthDays(year, month);

      if (nav) {
        nav.innerHTML = '<button id="histPrev" title="上个月">◀</button>' +
          '<span class="hist-date-label">' + year + '年' + month + '月</span>' +
          '<button id="histNext" title="下个月">▶</button>';
      }

      var totalMin = 0, totalPomo = 0;
      days.forEach(function(d) { totalMin += d.totalMinutes; totalPomo += d.totalPomodoros; });

      if (days.length === 0) {
        if (body) body.innerHTML = '<div class="hist-empty">📭 本月没有番茄记录</div>';
      } else {
        var firstDay = new Date(year, month - 1, 1).getDay();
        var daysInMonth = new Date(year, month, 0).getDate();
        var maxMin = 0;
        days.forEach(function(d) { if (d.totalMinutes > maxMin) maxMin = d.totalMinutes; });

        var html = '<div class="hist-month-grid">';
        ['日','一','二','三','四','五','六'].forEach(function(d) {
          html += '<div class="hist-month-dayhead">' + d + '</div>';
        });

        for (var i = 0; i < firstDay; i++) {
          html += '<div class="hist-month-cell empty"></div>';
        }

        var dayMap = {};
        days.forEach(function(d) { dayMap[d.day] = d; });

        for (var day = 1; day <= daysInMonth; day++) {
          var d = dayMap[day];
          var intensity = d && maxMin > 0 ? Math.min(1, d.totalMinutes / maxMin) : 0;
          var opacity = intensity > 0 ? 0.15 + intensity * 0.85 : 0;
          var bg = opacity > 0 ? 'rgba(123,91,91,' + opacity.toFixed(2) + ')' : 'transparent';
          var tooltip = d ? (d.totalMinutes + 'min · 🍅×' + d.totalPomodoros) : '无记录';
          var dateStr = year + '-' + String(month).padStart(2, '0') + '-' + String(day).padStart(2, '0');

          html += '<div class="hist-month-cell' + (d ? '' : ' no-data') + '"' +
            ' style="background:' + bg + '"' +
            ' title="' + dateStr + ': ' + tooltip + '">' +
            '<span class="hist-month-daynum">' + day + '</span>' +
            (d ? '<span class="hist-month-pomo">🍅' + d.totalPomodoros + '</span>' : '') +
            '</div>';
        }
        html += '</div>';

        // Subject breakdown
        var monthBySub = {};
        days.forEach(function(d) {
          Object.keys(d.bySubject).forEach(function(subId) {
            if (!monthBySub[subId]) monthBySub[subId] = { minutes: 0, pomodoros: 0 };
            monthBySub[subId].minutes += d.bySubject[subId].minutes;
            monthBySub[subId].pomodoros += d.bySubject[subId].pomodoros;
          });
        });

        html += '<div class="hist-month-breakdown">';
        ['math2','cs819','english2','politics'].forEach(function(subId) {
          var ms = monthBySub[subId];
          if (!ms) return;
          var sub = SUBJECT_MAP[subId];
          var h = (ms.minutes / 60).toFixed(1);
          html += '<div class="hist-month-sub"><span>' + sub.icon + ' ' + sub.name + '</span><span>' + h + 'h · 🍅×' + ms.pomodoros + '</span></div>';
        });
        html += '</div>';

        if (body) body.innerHTML = html;
      }

      if (summary) {
        summary.innerHTML = '本月总计 <strong>' + totalMin + '分钟 (' + (totalMin/60).toFixed(1) + 'h)</strong> · 🍅×' + totalPomo;
      }
    }
  };

  // ════════════════════════════════════════════════════════════
  //  PomodoroUploader
  // ════════════════════════════════════════════════════════════
  var PomodoroUploader = {
    getUploadedDates: function() {
      try { return JSON.parse(localStorage.getItem(STORAGE_UPLOADS)) || {}; } catch(e) { return {}; }
    },
    markUploaded: function(dateStr) {
      var uploaded = this.getUploadedDates();
      uploaded[dateStr] = true;
      try { localStorage.setItem(STORAGE_UPLOADS, JSON.stringify(uploaded)); } catch(e) {}
    },
    isUploaded: function(dateStr) {
      return !!this.getUploadedDates()[dateStr];
    },
    uploadDay: function(dateStr) {
      var self = this;
      var config = {};
      try { config = JSON.parse(localStorage.getItem('kaoyan_push_config') || '{}'); } catch(e) {}
      if (!config.githubToken) return Promise.resolve({ skipped: true, reason: 'no token' });
      if (this.isUploaded(dateStr)) return Promise.resolve({ skipped: true, reason: 'already uploaded' });

      var sessions = PomodoroStorage.getDaySessions(dateStr);
      var focusSessions = sessions.filter(function(s) { return s.type === 'focus'; });

      // Gather check-in records from dailyLogs
      var checkins = [];
      try {
        var studyData = JSON.parse(localStorage.getItem('kaoyan_study_planner') || '{}');
        var dayLogs = studyData.dailyLogs ? (studyData.dailyLogs[dateStr] || []) : [];
        var subjectMap = { math2: '数学二', cs819: '819数据结构', english2: '英语二', politics: '政治' };
        var moodMap = { easy: '轻松', normal: '一般', hard: '吃力' };
        dayLogs.forEach(function(entry) {
          checkins.push({
            subject: subjectMap[entry.subject] || entry.subject,
            duration: entry.duration || 0,
            content: entry.content || '',
            mood: moodMap[entry.mood] || '',
            chapterIdx: entry.chapterIdx,
            photoIds: entry.photoIds || [],
            time: entry.time || ''
          });
        });
      } catch(e) {}

      if (focusSessions.length === 0 && checkins.length === 0) {
        return Promise.resolve({ skipped: true, reason: 'no data' });
      }

      var stats = PomodoroStorage.getDayStats(dateStr);
      var payload = {
        date: dateStr,
        dayOfWeek: dayOfWeek(dateStr),
        totalMinutes: stats.totalMinutes,
        totalPomodoros: stats.totalPomodoros,
        bySubject: stats.bySubject,
        sessions: sessions,
        checkins: checkins,
        uploadedAt: new Date().toISOString()
      };

      var content = JSON.stringify(payload, null, 2);
      var base64 = btoa(unescape(encodeURIComponent(content)));
      var filename = 'data/' + dateStr + '.json';

      return fetch('https://api.github.com/repos/T3Tqaq12/kaoyan-planner/contents/' + filename, {
        method: 'PUT',
        headers: {
          Authorization: 'token ' + config.githubToken,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: '📊 学习数据 ' + dateStr,
          content: base64,
          branch: 'master'
        })
      }).then(function(resp) {
        if (resp.ok || resp.status === 201) {
          self.markUploaded(dateStr);
          return { ok: true };
        }
        return resp.json().then(function(err) {
          return { ok: false, error: err.message || 'HTTP ' + resp.status };
        }).catch(function() {
          return { ok: false, error: 'HTTP ' + resp.status };
        });
      }).catch(function(e) {
        return { ok: false, error: e.message };
      });
    },
    uploadPendingDays: function() {
      var self = this;
      var sessions = {};
      var dailyLogs = {};
      try { sessions = JSON.parse(localStorage.getItem(STORAGE_SESSIONS) || '{}'); } catch(e) {}
      try {
        var studyData = JSON.parse(localStorage.getItem('kaoyan_study_planner') || '{}');
        dailyLogs = studyData.dailyLogs || {};
      } catch(e) {}

      // Merge dates from both pomodoro sessions and check-in dailyLogs
      var allDates = {};
      Object.keys(sessions).forEach(function(d) { allDates[d] = true; });
      Object.keys(dailyLogs).forEach(function(d) { if (dailyLogs[d].length > 0) allDates[d] = true; });

      var dates = Object.keys(allDates).filter(function(d) { return !self.isUploaded(d); });
      dates.sort();
      var chain = Promise.resolve();
      dates.forEach(function(date) {
        chain = chain.then(function() { return self.uploadDay(date); });
      });
      return chain;
    },
    checkAndUpload: function() {
      var yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      var ys = yesterday.getFullYear() + '-' +
        String(yesterday.getMonth() + 1).padStart(2, '0') + '-' +
        String(yesterday.getDate()).padStart(2, '0');
      if (!this.isUploaded(ys)) {
        this.uploadDay(ys).then(function(result) {
          console.log('PomodoroUploader:', result);
        });
      }
    }
  };

  // ════════════════════════════════════════════════════════════
  //  Export
  // ════════════════════════════════════════════════════════════
  window.PomodoroTimer = PomodoroTimer;
  window.PomodoroStorage = PomodoroStorage;
  window.PomodoroAudio = PomodoroAudio;
  window.PomodoroUI = PomodoroUI;
  window.PomodoroUploader = PomodoroUploader;

})();
