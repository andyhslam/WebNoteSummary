const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/app.js',
    app2: './src/app2.js',
  },
  plugins: [
    // 安装此插件，是为了在浏览器端看到页面的效果。
    new HtmlWebpackPlugin(),
    new BundleAnalyzerPlugin(),
  ],
};
