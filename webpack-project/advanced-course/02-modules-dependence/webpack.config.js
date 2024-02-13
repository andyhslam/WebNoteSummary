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
    extensions: ['.js', '.json', '.vue'],
  },
};
