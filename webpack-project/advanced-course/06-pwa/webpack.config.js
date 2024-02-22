const HtmlWebpackPlugin = require('html-webpack-plugin');
const workboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin(),
    new workboxPlugin.GenerateSW({
      // 快速启用 ServiceWorkers
      clientsClaim: true,
      // 不允许遗留任何“旧的” ServiceWorkers
      skipWaiting: true,
    }),
  ],
  devServer: {
    // 开发环境的server的中间件
    devMiddleware: {
      writeToDisk: true,
    },
  },
};
