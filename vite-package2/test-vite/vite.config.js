import { defineConfig } from 'vite';
import viteBaseConfig from './vite.base.config';
import viteDevConfig from './vite.dev.config';
import viteProdConfig from './vite.prod.config';

// 策略模式
const envResolver = {
  build: () => {
    console.log('生产环境');
    return { ...viteBaseConfig, ...viteProdConfig };
  },
  serve: () => {
    console.log('开发环境');
    return Object.assign({}, viteBaseConfig, viteDevConfig);
  },
};

export default defineConfig(({ command }) => {
  // command是build还是serve，取决于输入的命令
  console.log('command', command);
  return envResolver[command]();
});
