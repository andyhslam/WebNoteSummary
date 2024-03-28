// 该预设环境插件内置很多插件，它会一次性安装所有必要的插件(包括语法降级的插件、语法编译的插件等等)
const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
  plugins: [postcssPresetEnv()],
};
