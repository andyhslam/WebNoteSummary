import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import legacy from '@vitejs/plugin-legacy';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    legacy({
      // defaults支持使用率在5%以上的浏览器，并且会获取最新的两个版本；不要在IE11的浏览器上运行。
      targets: ['defaults', 'not IE 11'],
    }),
  ],
  // 最低支持es6版本
  build: {
    // target: 'es2015',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nested: resolve(__dirname, 'nested/index.html'),
      },
    },
  },
});
