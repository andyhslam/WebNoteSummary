const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  resolve: {
    alias: {
      // @可以指向某个绝对的物理路径
      '@': path.resolve(__dirname, './src'),
    },
    // 识别扩展名的顺序从左到右
    // webpack会按照数组顺序去解析这些后缀名，对于同名的文件，webpack总是会先解析列在数组首位的后缀名的文件。
    extensions: ['.js', '.json', '.vue'],
  },
};
