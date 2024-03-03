const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin(),
    new ModuleFederationPlugin({
      name: 'home',
      filename: 'remoteEntry.js',
      remotes: {
        // key的nav表示本地模块的一个url前缀，value的nav表示另一个应用的模块联邦名字
        nav: 'nav@http://localhost:3003/remoteEntry.js',
      },
      exposes: {
        './HomeList': './src/HomeList.js',
      },
      shared: {},
    }),
  ],
};
