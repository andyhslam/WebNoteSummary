const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      /**
       * ejs模板的语法：
       * <%= htmlWebpackPlugin.options.title %> 或者 <%- htmlWebpackPlugin.options.title %>
       */
      title: '多页面应用2',
      template: './index.html',
      // 将生成的script或者link标签注入到body元素中
      inject: 'body',
      // 指定当前页面该打包入口的哪些chunk
      chunks: ['main', 'main2', 'lodashModule'],
      // 多个页面或者模板分别载入不同的chunk
    }),
  ],
  entry: {
    // 入口的每一项就是一个chunk
    main: {
      import: ['./src/app2.js', './src/app.js'],
      dependOn: 'lodashModule',
    },
    main2: {
      import: './src/app3.js',
      dependOn: 'lodashModule',
    },
    lodashModule: 'lodash',
  },
  output: {
    clean: true,
  },
};
