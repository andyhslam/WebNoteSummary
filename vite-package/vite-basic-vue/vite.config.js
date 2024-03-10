import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  optimizeDeps: {
    include: [],
  },
  // 缓存的目标文件夹，把服务器端的文件缓存到.cache文件夹
  cacheDir: './.cache',
});
