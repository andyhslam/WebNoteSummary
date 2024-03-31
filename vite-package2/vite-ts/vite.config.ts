import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import path from 'path';

export default defineConfig({
  plugins: [
    checker({
      typescript: true,
    }),
  ],
  build: {
    minify: false,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, './index.html'),
        product: path.resolve(__dirname, './src/product.html'),
      },
      output: {
        manualChunks: (id: string) => {
          console.log('id', id);
          // 默认情况下，ts认为当前环境不在es6以后
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
  },
});
