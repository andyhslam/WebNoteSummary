const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './app.js',
  plugins: [new HtmlWebpackPlugin()],
  externalsType: 'script',
  // 配置外部扩展模块，用于引入第三方库，提升加载速度。
  externals: {
    // 这个链接结合externalsType选项，表示是以script标签的形式在页面展示；
    // 所以$表示这个script标签在浏览器端暴露的对象。
    jquery: ['https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js', '$'],
  },
};
