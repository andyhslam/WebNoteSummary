const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  // output.library.type为module时，添加的实验性的属性
  // experiments: {
  //   outputModule: true,
  // },
  output: {
    clean: true,
    path: path.resolve(__dirname, 'dist'),
    filename: 'mylib.js',
    // 暴露从入口导出的内容
    library: {
      // 库名取名为mylibs，mylibs对象有add方法
      name: 'mylibs',
      /**
       * 打包后，以何种方式引入
       * type为window，表示以script标签方式引入，它是将mylibs对象挂在window对象上
       * type为commonjs，表示以commonjs方式引入
       * type为module，表示以esModule方式引入，此时不能设置name属性
       * type为umd，支持以CommonJS、AMD以及script标签方式引入，不支持esModule方式
       */
      type: 'umd',
    },
    // 在打包后的文件里，用globalThis代替self
    globalObject: 'globalThis',
  },
};
