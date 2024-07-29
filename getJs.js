const script = document.createElement('script');
const Script = document.createElement('script');
const js ='//cdns.zeabur.app/js/getUrl.js'
const Js ='//cloudflare-cdns.pages.dev/js/getUrl.js'
script.type = 'text/javascript';
script.src = js;
script.onerror = function() {
script.src = js};
document.head.appendChild(script);
