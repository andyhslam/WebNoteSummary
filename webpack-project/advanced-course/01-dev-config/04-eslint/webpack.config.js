const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintWebpackPlugin = require('eslint-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  devServer: {
    client: {
      // 关闭eslint在浏览器的警告覆盖层
      overlay: false,
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new ESLintWebpackPlugin(),
  ],
};
