const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
// webpack5已经内置这个插件，可以不用单独安装。
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  output: {
    // [name]这种格式称之为substitution(可替换的模板字符串)，可以拿到entry入口的属性名，来作为每个chunk的名字。
    // [contenthash]表示根据文件的内容来生成一个哈希的字符串，从而文件名会随着文件内容的变化而变化。
    // [contenthash]将根据资源内容创建出唯一hash；当资源内容发生变化时，[contenthash]也会发生变化。
    filename: 'scripts/[name].[contenthash].js',
    // 通过它来指定应用程序中所有资源的基础路径
    publicPath: 'http://localhost:8080/',
  },
  // 优化的配置
  optimization: {
    // 压缩代码
    minimizer: [
      // 通过此插件压缩css文件
      new CssMinimizerPlugin(),
      new TerserPlugin(),
    ],
  },
  // 只有生产环境才有的这个性能提示
  performance: {
    // 去掉性能提示
    hints: false,
  },
};
