(function() {
    "use strict";
    var $body = document.querySelector('body');

    window.canUse = function(p) {
        if (!window._canUse) window._canUse = document.createElement("div");
        var e = window._canUse.style,
            up = p.charAt(0).toUpperCase() + p.slice(1);
        return p in e || "Moz" + up in e || "Webkit" + up in e || "O" + up in e || "ms" + up in e;
    };

    window.addEventListener('load', function() {
        window.setTimeout(function() {
            $body.classList.remove('is-preload');
        }, 100);
    });

    (function() {
        var settings = {
            images: {
                'https://moe.jitsu.top/img/?sort=pc': 'center'
            },
            delay: 6000
        };
        var pos = 0,
            lastPos = 0,
            $wrapper,
            $bgs = [],
            $bg, k, v;
        $wrapper = document.createElement('div');
        $wrapper.id = 'bg';
        $body.appendChild($wrapper);

        function updateBackgroundImage() {
            $bgs[lastPos].classList.remove('top');
            pos = (pos + 1) % $bgs.length;
            $bgs[pos].style.backgroundImage = 'url("https://moe.jitsu.top/img/?sort=pc&t=' + new Date().getTime() + '")';
            $bgs[pos].classList.add('visible');
            $bgs[pos].classList.add('top');
            window.setTimeout(function() {
                $bgs[lastPos].classList.remove('visible');
            }, settings.delay / 2);
            lastPos = pos;
        }

        for (k in settings.images) {
            $bg = document.createElement('div');
            $bg.style.backgroundImage = 'url("' + k + '")';
            $bg.style.backgroundPosition = settings.images[k];
            $wrapper.appendChild($bg);
            $bgs.push($bg);
        }

        $bgs[pos].classList.add('visible');
        $bgs[pos].classList.add('top');

        if ($bgs.length == 1 || !canUse('transition')) return;

        window.setInterval(updateBackgroundImage, settings.delay);
    })();
})();
