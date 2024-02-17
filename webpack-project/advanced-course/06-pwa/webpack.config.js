const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  plugins: [new HtmlWebpackPlugin()],
  devServer: {
    // 开发环境的server的中间件
    devMiddleware: {
      writeToDisk: true,
    },
  },
};
