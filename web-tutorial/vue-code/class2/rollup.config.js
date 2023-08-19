import babel from 'rollup-plugin-babel'
import serve from 'rollup-plugin-serve'
import commonjs from 'rollup-plugin-commonjs'

export default {
  input: './src/index.js',
  output: {
    format: 'umd',
    name: 'Vue', // 全局注册Vue，相当于Window.Vue，可以直接使用这个全局变量。
    file: 'dist/umd/vue.js',
    sourcemap: true, // 打包以后，源码映射
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    serve({
      open: true,
      port: 8080,
      contentBase: '',
      openPage: '/index.html'
    }),
    commonjs()
  ]
}