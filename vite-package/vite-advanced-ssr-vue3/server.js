import fs from 'fs';
import path from 'path';
import express from 'express';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function createServer(isProd = process.env.NODE_ENV === 'production') {
  const resolve = (p) => path.resolve(__dirname, p);
  const port = process.env.PORT || 5173;
  const base = process.env.BASE || '/';
  const indexProd = isProd
    ? fs.readFileSync(resolve('./dist/client/index.html'), 'utf-8')
    : '';
  const ssrManifest = isProd
    ? fs.readFileSync(resolve('./dist/client/ssr-manifest.json'), 'utf-8')
    : {};

  const app = express();

  let vite;
  if (!isProd) {
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom',
      base,
    });
    app.use(vite.middlewares);
  } else {
    // 在生产环境只要设置静态目录
    // 第一种方式
    const serveStatic = (await import('serve-static')).default;
    const distClient = serveStatic(resolve('dist/client'), {
      index: false, // 不自动打开索引页面
    });
    app.use(distClient);

    // 第二种方式参照 https://github.com/bluwy/create-vite-extra/blob/master/template-ssr-vue/server.js
    // const compression = (await import('compression')).default;
    // const sirv = (await import('sirv')).default;
    // app.use(compression());
    // app.use(base, sirv('./dist/client', { extensions: [] }));
  }

  app.use('*', async (req, res) => {
    const url = req.originalUrl;
    let template;
    let render;
    try {
      if (!isProd) {
        template = fs.readFileSync(resolve('./index.html'), 'utf-8');
        template = await vite.transformIndexHtml(url, template);
        render = (await vite.ssrLoadModule('/src/entry-server.js')).render;
      } else {
        template = indexProd;
        render = (await import('./dist/server/entry-server.js')).render;
      }

      const appHtml = await render(url, ssrManifest);
      const html = template.replace('<!--ssr-outlet-->', appHtml);
      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      console.error(e);
      res.status(500).end(e.message);
    }
  });

  app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
  });
}

createServer();
