const script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://cdns.zeabur.app/js/getUrl.js';
script.onload = function() {
   document.head.appendChild(script);
};
script.onerror = function() {
  const backupScript = document.createElement('script');
    backupScript.type = 'text/javascript';
    backupScript.src = 'https://cloudflare-cdns.pages.dev/js/getUrl.js';
    backupScript.onload = function() {
        document.head.appendChild(backupScript);
    };
    backupScript.onerror = function() {
        console.error('备用脚本加载失败');
    };
    document.head.appendChild(backupScript);
};
