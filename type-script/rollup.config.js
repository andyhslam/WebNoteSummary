// console.log(process.env);
import path from 'path'
import ts from 'rollup-plugin-typescript2'
import server from 'rollup-plugin-serve'
import {terser} from 'rollup-plugin-terser'
import livereload from 'rollup-plugin-livereload'
import replace from 'rollup-plugin-replace'
// const dev = process.env.NODE_ENV === 'development';
const isDev = () => {
  return process.env.NODE_ENV === 'development';
}

export default {
  input: './src/index-rollup.ts',
  output: {
    file: path.resolve(__dirname, './dist/index-rollup.js'),
    format: 'umd', // 因为要在index-rollup.html通过<script>的形式引入index-rollup.js
    sourcemap: true
  },
  plugins: [
    ts(), // 此插件会去读取tsconfig.json文件
    terser({
      compress: {
        // drop_console: true
      }
    }),
    isDev() && livereload(),
    replace({
      // 把nodejs里面的process.env.NODE_ENV注册到浏览器
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    isDev() && server({ // 此插件用来启动前端服务
      open: true,
      port: 8000,
      openPage: '/public/index-rollup.html'
    })
  ]
}
