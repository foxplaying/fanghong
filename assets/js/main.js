(function() {
    "use strict";
    var $body = document.querySelector('body');

    // Polyfill for classList and addEventListener
    function DOMTokenList(t) {
        this.el = t;
        for (var n = t.className.replace(/^\s+|\s+$/g, "").split(/\s+/), i = 0; i < n.length; i++) this.add(n[i]);
    }
    function defineProperty(t, n, i) {
        Object.defineProperty ? Object.defineProperty(t, n, { get: i }) : t.__defineGetter__(n, i);
    }
    if (!("undefined" == typeof window.Element || "classList" in document.documentElement)) {
        var i = Array.prototype,
            e = i.push,
            s = i.splice,
            o = i.join;
        DOMTokenList.prototype = {
            add: function(t) {
                this.contains(t) || (e.call(this, t), this.el.className = this.toString());
            },
            contains: function(t) {
                return -1 != this.el.className.indexOf(t);
            },
            item: function(t) {
                return this[t] || null;
            },
            remove: function(t) {
                if (this.contains(t)) {
                    for (var n = 0; n < this.length && this[n] != t; n++);
                    s.call(this, n, 1), this.el.className = this.toString();
                }
            },
            toString: function() {
                return o.call(this, " ");
            },
            toggle: function(t) {
                return this.contains(t) ? this.remove(t) : this.add(t), this.contains(t);
            }
        };
        window.DOMTokenList = DOMTokenList;
        defineProperty(Element.prototype, "classList", function() {
            return new DOMTokenList(this);
        });
    }

    // Check for browser support
    window.canUse = function(p) {
        if (!window._canUse) window._canUse = document.createElement("div");
        var e = window._canUse.style,
            up = p.charAt(0).toUpperCase() + p.slice(1);
        return p in e || "Moz" + up in e || "Webkit" + up in e || "O" + up in e || "ms" + up in e;
    };

    // Polyfill for addEventListener
    if (!("addEventListener" in window)) {
        window.addEventListener = function(type, f) {
            window.attachEvent("on" + type, f);
        };
    }

    // Remove 'is-preload' class when page is loaded
    window.addEventListener('load', function() {
        window.setTimeout(function() {
            $body.classList.remove('is-preload');
        }, 100);
    });

    // Function to update background image
    function updateBackgroundImage() {
        var timestamp = new Date().getTime();
        var backgroundImageUrl = 'https://moe.jitsu.top/img/?sort=pc&timestamp=' + timestamp;
        document.body.style.backgroundImage = 'url("' + backgroundImageUrl + '")';
    }

    // Initial call to update background image
    updateBackgroundImage();

    // Interval to periodically update background image
    setInterval(updateBackgroundImage, 6000);

    // Other code...

})();
