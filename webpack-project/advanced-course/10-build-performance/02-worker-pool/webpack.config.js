const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  plugins: [new HtmlWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        // 这里先执行thread-loader，再执行babel-loader
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
          {
            loader: 'thread-loader',
            // 通常会把一些耗时的loader放在线程池里运行
            options: {
              // 线程数量
              workers: 2,
            },
          },
        ],
      },
    ],
  },
};
