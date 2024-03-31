import { defineConfig } from 'vite';
import viteCdnPlugin from 'vite-plugin-cdn-import';

export default defineConfig({
  plugins: [
    viteCdnPlugin({
      modules: [
        {
          name: 'lodash',
          var: '_',
          // 这个路径会注入到script标签的src属性，并插入head标签里，只在生产环境有效
          path: `https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js`,
        },
      ],
    }),
  ],
  // vite-plugin-cdn-import的实现原理，会修改如下的rollupOptions配置
  // build: {
  //   rollupOptions: {
  //     external: ['lodash'],
  //     externalGlobal: {
  //       var: '_',
  //       path: `https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js`,
  //     },
  //   },
  // },
});
