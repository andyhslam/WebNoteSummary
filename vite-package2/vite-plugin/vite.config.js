import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        assetFileNames: '[hash].[name].[ext]',
      },
    },
  },
  plugins: [
    {
      config(options) {
        // console.log('config-options', options);
      },
      configureServer(server) {
        server.middlewares.use((req, res, next) => {});
      },
      transformIndexHtml(html) {},
      configResolved(options) {
        // 整个配置文件的解析流程完全完毕以后，才会执行的钩子
        // 此时的options就是vite内部的默认配置文件
        // console.log('configResolved-options', options);
      },
      configurePreviewServer(server) {
        // return a post hook that is called after other middlewares are installed
        return () => {
          server.middlewares.use((req, res, next) => {
            // custom handle request...
          });
        };
      },
      handleHotUpdate({ server, modules, timestamp }) {
        // 自定义热更新行为
        server.hot.send({ type: 'full-reload' });
        // Invalidate modules manually
        const invalidatedModules = new Set();
        for (const mod of modules) {
          server.moduleGraph.invalidateModule(
            mod,
            invalidatedModules,
            timestamp,
            true,
          );
        }
        return [];
      },
      // 以下都是Universal Hooks(通用钩子)，vite和rollup都会执行的钩子
      options(rollupOptions) {
        // console.log('rollupOptions', rollupOptions);
      },
      // buildStart和configResolved的功能一样
      buildStart(fullRollupOptions) {
        console.log('fullRollupOptions', fullRollupOptions);
      },
    },
  ],
});
