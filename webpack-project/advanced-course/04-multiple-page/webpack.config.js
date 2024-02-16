const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  plugins: [
    // 通过实例化多个HtmlWebpackPlugin，来实现多个页面或者模板分别载入不同的chunk
    // 实现各个频道有自己独享的一个入口的index.html文件，以及它引用的一些js文件
    new HtmlWebpackPlugin({
      /**
       * ejs模板的语法：
       * <%= htmlWebpackPlugin.options.title %> 或者 <%- htmlWebpackPlugin.options.title %>
       */
      title: '多页面应用',
      template: './index.html',
      // 将生成的script或者link标签注入到body元素中
      inject: 'body',
      filename: 'chanel1/index.html',
      // 指定当前页面该打包入口的哪些chunk
      chunks: ['main', 'lodashModule'],
      publicPath: 'http://www.a.com/',
    }),
    new HtmlWebpackPlugin({
      template: './index2.html',
      inject: 'body',
      filename: 'chanel2/index2.html',
      chunks: ['main2', 'lodashModule'],
      // 两个入口文件的前缀不一样
      publicPath: 'http://www.b.com/',
    }),
  ],
  entry: {
    // 入口的每一项就是一个chunk
    main: {
      import: ['./src/app2.js', './src/app.js'],
      dependOn: 'lodashModule',
      filename: 'chanel1/[name].js',
    },
    main2: {
      import: './src/app3.js',
      dependOn: 'lodashModule',
      filename: 'chanel2/[name].js',
    },
    lodashModule: {
      import: 'lodash',
      // 把一些共享文件单独打包到共享文件夹里
      filename: 'common/[name].js',
    },
  },
  output: {
    clean: true,
  },
};
