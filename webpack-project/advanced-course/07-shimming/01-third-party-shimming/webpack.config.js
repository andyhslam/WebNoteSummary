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
      // 还可以使用ProvidePlugin暴露出某个模块中单个导出，通过配置一个“数组路径”实现此功能。
      // 无论join方法在何处调用，我们都只会获取到lodash中提供的join方法。
      // 这样就能很好的与tree shaking配合，将lodash library中的其余没有用到的导出去除。
      join: ['lodash', 'join'],
    }),
  ],
  module: {
    rules: [
      {
        test: require.resolve('./src/index.js'),
        // 包里面的this指向window
        use: 'imports-loader?wrapper=window',
      },
      {
        // 先载入第三方模块globals.js，再使用exports-loader导出
        test: require.resolve('./src/globals.js'),
        // 指定模块导出的类型为commonjs，定义导出的变量，multiple表示可以导出map格式(其中helpers.parse表示value，parse表示key)的变量，|表示管道运算符
        use: 'exports-loader?type=commonjs&exports=file,multiple|helpers.parse|parse',
      },
    ],
  },
};
