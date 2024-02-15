const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  plugins: [new HtmlWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              // 开启css模块，vue和react框架内部就是使用这个机制实现了css模块。
              modules: true,
            },
          },
          'postcss-loader',
        ],
      },
    ],
  },
};
