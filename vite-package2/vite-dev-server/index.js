const Koa = require('koa');
const fs = require('fs');
const path = require('path');
const viteConfig = require('./vite.config.js');
const aliasResolver = require('./src/aliasResolver.js');
console.log('viteConfig', viteConfig);

const app = new Koa();

// 当请求来临以后会直接进入到use注册的回调函数中
app.use(async (ctx) => {
  if (ctx.request.url === '/') {
    const indexContent = await fs.promises.readFile(
      path.resolve(__dirname, './index.html'),
    );
    ctx.response.body = indexContent;
    ctx.response.set('Content-Type', 'text/html');
  }
  if (ctx.request.url.endsWith('.js')) {
    const jsContent = await fs.promises.readFile(
      path.resolve(__dirname, '.' + ctx.request.url),
    );
    // 直接进行alias的替换
    const lastResult = aliasResolver(
      viteConfig.resolve.alias,
      jsContent.toString(),
    );
    ctx.response.body = lastResult;
    ctx.response.set('Content-Type', 'text/javascript');
  }
  if (ctx.request.url === '/App.vue') {
    /**
     * 如果是vue文件，会做一个字符串替换，appVueContent.toString().find('<template>')，
     * 如果匹配到，就直接全部进行字符串替换；
     * AST语法分析：使用Vue.createElement()构建原生的dom
     */
    const appVueContent = await fs.promises.readFile(
      path.resolve(__dirname, './App.vue'),
    );
    ctx.response.body = appVueContent;
    // 告知浏览器以js格式去解析vue文件
    ctx.response.set('Content-Type', 'text/javascript');
  }
});

app.listen(5174, () => {
  console.log('vite dev serve listen on 5174');
});
