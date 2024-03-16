// 生成静态页面的处理

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
// 产生一个物理的绝对路径
const toAbsolute = (p) => path.resolve(__dirname, p);

const template = fs.readFileSync(
  toAbsolute('./dist/static/index.html'),
  'utf-8',
);
const { render } = await import('./dist/server/entry-server.js');

// 通过prerender来转化路由
const routesToPrerender = fs
  .readdirSync(toAbsolute('src/pages'))
  .map((file) => {
    const name = file.replace(/\.jsx$/, '').toLowerCase();
    return name === 'home' ? '/' : `/${name}`;
  });

(async () => {
  for (const url of routesToPrerender) {
    const context = {};
    const appHtml = await render(url, context);
    // 将渲染好的路由组件放到html里
    const html = template.replace('<!--app-html-->', appHtml);
    const filePath = `dist/static${url === '/' ? '/index' : url}.html`;
    // 生成静态文件
    fs.writeFileSync(toAbsolute(filePath), html);
  }
})();
