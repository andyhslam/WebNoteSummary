const { resolve } = require('path')
const MdToHtmlPlugin = require('./plugins/md-to-html-plugin')

module.exports = {
  mode: 'development',
  entry: resolve(__dirname, 'src/app.js'),
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'bundle.[hash:8].js'
  },
  devtool: 'source-map',
  plugins: [
    new MdToHtmlPlugin({
      // 要解释的文件
      template: resolve(__dirname, 'test.md'),
      // 解释后的文件
      filename: 'test.html'
    })
  ]
}