const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin(),
    new webpack.ProvidePlugin({
      /** 将lodash变成全局的：
       * 使用ProvidePlugin后，能够在webpack编译的每个模块中，通过访问一个变量来获取一个package。
       * 如果webpack看到模块中用到这个变量，它将在最终bundle中引入给定的package。
       */
      _: 'lodash',
    }),
  ],
};
