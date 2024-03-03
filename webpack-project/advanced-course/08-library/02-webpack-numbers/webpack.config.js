const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    clean: true,
    path: path.resolve(__dirname, 'dist'),
    filename: 'webpack-numbers.js',
    library: {
      name: 'webpackNumbers',
      type: 'umd',
    },
    globalObject: 'globalThis',
  },
  // 放弃控制此外部library，而是将控制权让给使用library的consumer
  externals: {
    // 这意味着你的library需要一个名为lodash的依赖，这个依赖在consumer环境中必须存在且可用。
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_', // 用于script标签
    },
  },
};
