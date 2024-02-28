const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  plugins: [new HtmlWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: ['last 1 version', '> 1%'],
                  useBuiltIns: 'usage',
                  // 由于@babel/polyfill在7.4.0中被弃用，我们建议直接添加corejs并通过corejs选项设置版本。
                  corejs: 3,
                },
              ],
            ],
          },
        },
      },
    ],
  },
};

/**
 * useBuiltIns: 参数有 “entry”、”usage”、false 三个值
 * 默认值是 false ，此参数决定了babel打包时如何处理@babel/polyfilll 语句。
 * “entry”: 会将文件中 import @babel/polyfilll 语句 结合 targets ，转换为一系列引入语句，去掉目标浏览器已支持的 polyfilll 模块，不管代码里有没有用到，只要目标浏览器不支持都会引入对应的 polyfilll 模块。
 * “usage”: 不需要手动在代码里写 import @babel/polyfilll ，打包时会自动根据实际代码的使用情况，结合 targets 引入代码里实际用到部分 polyfilll 模块。
 * false: 对 import‘@babel/polyfilll’不作任何处理，也不会自动引入 polyfilll 模块。
 * 需要注意的是在 webpack 打包文件配置的 entry 中引入的 @babel/polyfill 不会根据useBuiltIns 配置作任何转换处理。
 */
