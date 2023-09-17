/**
 * mode: development、production
 * entry 入口文件
 * output: path、filename 打包输出路径
 * devtool: source-map
 * module: rules、loader
 * plugins 插件
 * devServer 开发服务器
 */

const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: resolve(__dirname, 'src/app.js'),
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'bundle.[hash:16].js'
  },
  devtool: 'source-map',
  resolveLoader: {
    modules: ['node_modules', resolve(__dirname, 'loaders')]
  },
  module: {
    rules: [
      {
        test: /\.tpl$/,
        // tpl先处理得到的字符串，再交给babel转成js程序，打包到bundle.js；
        // webpack的loader的执行顺序是从后到前的。
        use: [
          'babel-loader',
          {
            loader: 'tpl-loader',
            options: {
              log: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'index.html')
    })
  ],
  devServer: {
    port: 3333
  }
}