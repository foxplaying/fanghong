const script = document.createElement('script');
script.type = 'text/javascript';
script.src = '//cdns.zeabur.app/js/getUrl.js';
document.head.appendChild(script);
script.onerror = function() {
const backupScript = document.createElement('script');
backupScript.type = 'text/javascript';
backupScript.src = '//cloudflare-cdns.pages.dev/js/getUrl.js';
document.head.appendChild(backupScript)};
