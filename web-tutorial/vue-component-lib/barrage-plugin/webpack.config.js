const HtmlWebpackPlugin = require('html-webpack-plugin'),
  { resolve } = require('path')

module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  devtool: 'source-map',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'src/index.html')
    })
  ],
  devServer: {
    // 项目根目录，webpack5中contentBase属性已经废弃，用static代替
    static: {
      directory: resolve(__dirname, './'),
    },
    // 启动gzip压缩：浏览器请求静态资源时压缩一下，打开浏览器的检查时可以看到bundle.js的content-encoding是gzip，浏览器自动解压
    compress: true,
    open: true
  }
}