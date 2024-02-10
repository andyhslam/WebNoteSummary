const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './app.js',
  output: {
    publicPath: '/',
  },
  devServer: {
    // 设置静态目录，静态目录用于存放静态资源，一般默认启动就要加载静态资源。
    static: path.resolve(__dirname, './dist'),
    // 设置是否在服务器端进行代码压缩，使其在传输过程中，可以减少传输数据的大小；
    // 这个选项设置为true(默认也是true)，可以保证从服务器到浏览器的传输过程中，文件是压缩的，从而提高传输效率。
    compress: false,
    port: 3000,
    // 开发服务器主机，同一局域网下，其它小伙伴可以通过局域网ip(https://192.168.43.64:3000)来访问该服务。
    host: '0.0.0.0',
    // 将一些头部信息通过http传输给浏览器
    headers: {
      'X-Access-Token': 'abc123',
    },
    proxy: {
      '/api': 'http://localhost:9000'
    },
    // https: true,
    http2: true,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
}