function isValidUrl(text) {
    return /\./.test(text);
}
function handleKeyDown(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        geturl();
    }
}
function getUrl() {
    var targetUrl = document.getElementById('targetUrl').value;
    if (!isValidUrl(targetUrl)) {
        alert("请输入有效的网址");
        return;
    }
    var apiUrl = './buildUrl.html?url=' + encodeURIComponent(targetUrl);
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.msg === "成功") {
                document.getElementById('generatedUrl').textContent = "生成的防红链接：" + data.short_url;
            } else {
                alert("生成失败");
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert("生成失败");
        });
}
