/* ============================================================
   Image Trail — Mouse-following photo trail for photo wall.
   Vanilla JS port of the React ImageTrail component.
   Uses CSS transitions for scale/opacity animations.
   ============================================================ */

(function() {

  // ─── ImageTrail Class ───────────────────────────────────────
  function ImageTrail(options) {
    options = options || {};
    this.container = options.container || document.body;
    this.sources = options.sources || [];        // array of image URLs
    this.interval = options.interval || 100;     // ms between spawns
    this.rotationRange = options.rotationRange || 15;
    this.newOnTop = options.newOnTop !== false;
    this.itemSize = options.itemSize || 96;      // px, w×h of trail thumbnail
    this.maxItems = options.maxItems || 40;       // cap to avoid DOM bloat
    this.excludeSelector = options.excludeSelector || null; // CSS selector for zones where trail is suppressed

    this._items = [];           // active trail DOM elements
    this._sourceIdx = 0;       // round-robin through sources
    this._lastSpawn = 0;       // last spawn timestamp
    this._mouseX = 0;
    this._mouseY = 0;
    this._rafId = null;
    this._active = false;
    this._boundMove = this._onMouseMove.bind(this);
    this._boundLoop = this._loop.bind(this);
  }

  // ── Public API ──────────────────────────────────────────
  ImageTrail.prototype.start = function() {
    if (this._active) return;
    this._active = true;
    this.container.addEventListener('mousemove', this._boundMove, { passive: true });
    this._rafId = requestAnimationFrame(this._boundLoop);
  };

  ImageTrail.prototype.stop = function() {
    this._active = false;
    this.container.removeEventListener('mousemove', this._boundMove);
    if (this._rafId) {
      cancelAnimationFrame(this._rafId);
      this._rafId = null;
    }
    // Fade out all existing items
    this._clearAll();
  };

  ImageTrail.prototype.updateSources = function(sources) {
    this.sources = sources || [];
    this._sourceIdx = 0;
  };

  // ── Internals ───────────────────────────────────────────
  ImageTrail.prototype._onMouseMove = function(e) {
    this._mouseX = e.clientX;
    this._mouseY = e.clientY;
  };

  ImageTrail.prototype._loop = function(timestamp) {
    if (!this._active) return;
    this._rafId = requestAnimationFrame(this._boundLoop);

    if (timestamp - this._lastSpawn < this.interval) return;
    this._lastSpawn = timestamp;

    // Don't spawn if mouse hasn't moved (still at 0,0 = overlay just opened)
    if (this._mouseX === 0 && this._mouseY === 0) return;

    // Don't spawn if no sources
    if (!this.sources || this.sources.length === 0) return;

    // Don't spawn if mouse is over an excluded zone
    if (this.excludeSelector) {
      var target = document.elementFromPoint(this._mouseX, this._mouseY);
      if (target && target.closest(this.excludeSelector)) return;
    }

    this._spawn();
  };

  ImageTrail.prototype._spawn = function() {
    // Cap active items
    if (this._items.length >= this.maxItems) {
      var oldest = this._items.shift();
      if (oldest && oldest.parentNode) oldest.parentNode.removeChild(oldest);
    }

    var src = this.sources[this._sourceIdx];
    this._sourceIdx = (this._sourceIdx + 1) % this.sources.length;

    var rotation = (Math.random() - 0.5) * this.rotationRange * 2;
    var size = this.itemSize;

    var el = document.createElement('div');
    el.className = 'trail-item';
    el.style.cssText =
      'left:' + (this._mouseX - size/2) + 'px;' +
      'top:' + (this._mouseY - size/2) + 'px;' +
      'width:' + size + 'px;' +
      'height:' + size + 'px;' +
      'transform:rotate(' + rotation + 'deg) scale(1);';

    var img = document.createElement('img');
    img.src = src;
    img.className = 'trail-item-img';
    img.alt = '';
    img.draggable = false;
    el.appendChild(img);

    // Insert into overlay
    this.container.appendChild(el);

    // Track
    var self = this;
    this._items.push(el);

    // Animate: scale up quickly → scale to 0 and remove
    // Phase 1: scale to 1.2 (0.1s)
    requestAnimationFrame(function() {
      el.style.transition = 'transform 0.1s cubic-bezier(0, 0.55, 0.45, 1)';
      el.style.transform = 'rotate(' + rotation + 'deg) scale(1.2)';
    });

    // Phase 2: scale to 0 (0.5s) — after phase 1 completes
    setTimeout(function() {
      el.style.transition = 'transform 0.5s cubic-bezier(0.55, 0, 1, 0.45), opacity 0.5s ease';
      el.style.transform = 'rotate(' + rotation + 'deg) scale(0)';
      el.style.opacity = '0';
    }, 110);

    // Remove from DOM after full animation
    setTimeout(function() {
      if (el.parentNode) el.parentNode.removeChild(el);
      var idx = self._items.indexOf(el);
      if (idx !== -1) self._items.splice(idx, 1);
    }, 650);
  };

  ImageTrail.prototype._clearAll = function() {
    var items = this._items.slice();
    this._items.length = 0;
    items.forEach(function(el) {
      el.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
      el.style.transform = el.style.transform.replace(/scale\([^)]+\)/, 'scale(0)');
      el.style.opacity = '0';
      setTimeout(function() {
        if (el.parentNode) el.parentNode.removeChild(el);
      }, 350);
    });
  };

  // ── Export ───────────────────────────────────────────────
  window.ImageTrail = ImageTrail;

})();
