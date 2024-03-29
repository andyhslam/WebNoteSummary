// 生成静态资源得需要重新渲染

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
// 产生一个物理的绝对路径
const toAbsolute = (p) => path.resolve(__dirname, p);
const manifest = fs.readFileSync(
  toAbsolute('./dist/static/.vite/ssr-manifest.json'),
  'utf-8',
);
const template = fs.readFileSync(
  toAbsolute('./dist/static/index.html'),
  'utf-8',
);
const { render } = await import('./dist/server/entry-server.js');

// 通过prerender来转化路由
const routesToPrerender = fs
  .readdirSync(toAbsolute('src/pages'))
  .map((file) => {
    const name = file.replace(/\.vue$/, '').toLowerCase();
    return name === 'home' ? '/' : `/${name}`;
  });

(async () => {
  for (const url of routesToPrerender) {
    const appHtml = await render(url, manifest);
    // 将渲染好的路由组件放到html里
    const html = template.replace('<!--ssr-outlet-->', appHtml);
    const filePath = `dist/static${url === '/' ? '/index' : url}.html`;
    // 生成静态文件
    fs.writeFileSync(toAbsolute(filePath), html);
  }

  // 删除文件，用完json文件之后，要删除掉
  fs.unlinkSync(toAbsolute('./dist/static/.vite/ssr-manifest.json'));
})();
