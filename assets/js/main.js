(function() {
    "use strict";
    var e = document.querySelector("body");
    ! function() {
        function t(t) {
            this.el = t;
            for (var n = t.className.replace(/^\s+|\s+$/g, "").split(/\s+/), o = 0; o < n.length; o++) i.call(this, n[o])
        }

        function n(t, n, i) {
            Object.defineProperty ? Object.defineProperty(t, n, {
                get: i
            }) : t.__defineGetter__(n, i)
        }
        if (!("undefined" == typeof window.Element || "classList" in document.documentElement)) {
            var o = Array.prototype,
                i = o.push,
                s = o.splice,
                a = o.join;
            t.prototype = {
                add: function(t) {
                    this.contains(t) || (i.call(this, t), this.el.className = this.toString())
                },
                contains: function(t) {
                    return -1 != this.el.className.indexOf(t)
                },
                item: function(t) {
                    return this[t] || null
                },
                remove: function(t) {
                    if (this.contains(t)) {
                        for (var n = 0; n < this.length && this[n] != t; n++);
                        s.call(this, n, 1), this.el.className = this.toString()
                    }
                },
                toString: function() {
                    return a.call(this, " ")
                },
                toggle: function(t) {
                    return this.contains(t) ? this.remove(t) : this.add(t), this.contains(t)
                }
            }, window.DOMTokenList = t, n(Element.prototype, "classList", function() {
                return new t(this)
            })
        }
    }();
    window.canUse = function(e) {
        if (!window._canUse) window._canUse = document.createElement("div");
        var t = window._canUse.style,
            n = e.charAt(0).toUpperCase() + e.slice(1);
        return e in t || "Moz" + n in t || "Webkit" + n in t || "O" + n in t || "ms" + n in t
    };
    ! function() {
        if ("addEventListener" in window) return;
        window.addEventListener = function(e, t) {
            window.attachEvent("on" + e, t)
        }
    }();
    window.addEventListener("load", function() {
        window.setTimeout(function() {
            e.classList.remove("is-preload")
        }, 100)
    });
    ! function() {
        var t = {
                images: {
                    "https://moe.jitsu.top/img/?sort=pc": "center"
                },
                delay: 6e3
            },
            n = 0,
            o = 0,
            i = document.createElement("div");
        i.id = "bg", e.appendChild(i);
        for (var s in t.images) {
            var a = document.createElement("div");
            a.style.backgroundImage = 'url("' + s + '")', a.style.backgroundPosition = t.images[s], i.appendChild(a)
        }
        var c = [],
            l = document.querySelectorAll("#bg div"),
            r = document.querySelectorAll("#bg div.visible"),
            u = r[0];
        if (c[u].classList.add("visible"), c[u].classList.add("top"), 1 != c.length && canUse("transition")) {
            window.setInterval(function() {
                o = n, n++, n >= c.length && (n = 0), c[o].classList.remove("top"), c[n].classList.add("visible"), c[n].classList.add("top"), window.setTimeout(function() {
                    c[o].classList.remove("visible")
                }, t.delay / 2)
            }, t.delay)
        }
    }();
    ! function() {
        var t = document.querySelectorAll("#signup-form")[0],
            n = document.querySelectorAll("#signup-form input[type='submit']")[0],
            o;
        if ("addEventListener" in t) {
            o = document.createElement("span"), o.classList.add("message"), t.appendChild(o), o._show = function(t, n) {
                o.innerHTML = n, o.classList.add(t), o.classList.add("visible"), window.setTimeout(function() {
                    o._hide()
                }, 3e3)
            }, o._hide = function() {
                o.classList.remove("visible")
            }, t.addEventListener("submit", function(e) {
                e.stopPropagation(), e.preventDefault(), o._hide(), n.disabled = !0, window.setTimeout(function() {
                    t.reset(), n.disabled = !1, o._show("success", "Thank you!")
                }, 750)
            })
        }
    })();
})();
