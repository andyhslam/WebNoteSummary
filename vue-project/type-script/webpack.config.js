const path = require('path')
const htmlwebpackplugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index-webpack.ts',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index-webpack.js'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader'
      }
    ]
  },
  devServer: {
    port: 1990,
    proxy: {

    }
  },
  // stats: 'none',
  resolve: {
    extensions: ['.js', '.ts'], // 匹配文件名后缀
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  plugins: [
    new htmlwebpackplugin({
      template: './public/index-webpack.html'
    })
  ]
}
