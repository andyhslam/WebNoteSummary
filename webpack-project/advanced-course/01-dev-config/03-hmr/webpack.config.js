const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './app.js',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    })
  ],
  devServer: {
    // 开启模块热替换，默认也是true
    hot: false,
    // 开启模块热加载，默认也是true；当修改完页面以后，自动编译代码并且刷新浏览器。
    liveReload: false,
  }
}