// 该预设环境插件内置很多插件，它会一次性安装所有必要的插件(包括语法降级的插件、语法编译的插件等等)
const postcssPresetEnv = require('postcss-preset-env');
const postcssCustomProperties = require('postcss-custom-properties');
const postcssGlobalData = require('@csstools/postcss-global-data');
const path = require('path');

module.exports = {
  plugins: [
    postcssPresetEnv({
      // 告知postcss需要记住的一些全局变量，不过该属性已经废弃
      // importFrom: path.resolve(__dirname, './src/style/variable.css'),
    }),
    // 告知postcss需要记住的一些全局变量，最新替代方案
    postcssGlobalData({
      files: [path.resolve(__dirname, './src/style/variable.css')],
    }),
    postcssCustomProperties(/* pluginOptions */),
  ],
};
