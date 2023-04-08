// 泛型的应用场景：调用接口
var axios = {
    get: function (url) {
        return new Promise(function (resolve) {
            // 在node环境没有XMLHttpRequest，需要用tsc编译成js文件后，在window环境运行
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url);
            // 监听状态变化的方法
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    // readyState:一共有5个状态码(0-4)
                    resolve(JSON.parse(xhr.responseText));
                }
            };
            xhr.send(null);
        });
    }
};
axios.get('./generic-data.json').then(function (res) {
    console.log(res);
});
