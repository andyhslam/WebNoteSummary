import { defineConfig } from 'vite';

// https://vitejs.cn/vite3-cn/config/server-options.html#server-proxy
export default defineConfig({
  // 开发服务器的配置
  server: {
    // 配置跨域解决方案
    proxy: {
      // key + 描述对象，遇到以/api'开头的请求时，都会将其代理到target属性对应的地址
      '/api': {
        target: 'https://www.360.com',
        changeOrigin: true,
        // 路径重写，将/api换成空串
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
