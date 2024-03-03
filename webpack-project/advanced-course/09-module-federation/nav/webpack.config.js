const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin(),
    new ModuleFederationPlugin({
      // 模块联邦名字
      name: 'nav',
      // 外部访问的资源名字
      filename: 'remoteEntry.js',
      // 引用外部的资源列表
      remotes: {},
      // 暴露给外部的资源列表
      exposes: {
        // ./Header并不代表当前应用下的某个路径，而是将来别人使用时，基于这个路径来拼接url；
        // './src/Header.js'才是当前应用下的路径
        './Header': './src/Header.js',
      },
      // 共享模块，如lodash，webpack打包时会把这个第三方共享的模块，打到单独的一个包里
      shared: {},
    }),
  ],
};
