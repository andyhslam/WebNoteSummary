import { defineConfig, loadEnv } from 'vite';
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

export default defineConfig(({ command, mode }) => {
  /**
   * command是build还是serve，取决于输入的命令：
   * 输入yarn dev，command是serve，mode是development；
   * 输入yarn build，command是build，mode是production；
   * process.cwd()表示当前node执行命令的所在目录。
   */
  console.log('process', process.cwd());
  // 当前env文件所在的目录
  const env = loadEnv(mode, process.cwd(), '');
  // console.log('env', env);
  return envResolver[command]();
});
