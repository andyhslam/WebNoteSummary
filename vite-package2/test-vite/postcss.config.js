// 该预设环境插件内置很多插件，它会一次性安装所有必要的插件(包括语法降级的插件、语法编译的插件等等)
const postcssPresetEnv = require('postcss-preset-env');
const path = require('path');

module.exports = {
  plugins: [
    postcssPresetEnv({
      // 告知postcss需要记住的一些全局变量，不过该属性已经废弃
      importFrom: path.resolve(__dirname, './src/style/variable.css'),
    }),
  ],
};
