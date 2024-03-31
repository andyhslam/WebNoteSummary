fetch('/api').then((data) => {
  console.log('data', data);
});

/**
 * 1. 浏览器先做拼接  http://localhost:5173/api
 * 2. 浏览器把拼接好的地址交给vite开发服务器
 * 3. vite发现这个path(即是/api)有配置过跨域代理策略，然后它会根据策略的描述对象的target属性，来修改请求地址
 * 4. 因为rewrite属性把/api清空了，所以最后的请求地址就变成 https://www.360.com，再次进行请求(此时变成由vite开发服务器向360服务器发送请求了)
 */
