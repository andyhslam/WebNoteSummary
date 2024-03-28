import { defineConfig } from 'vite';
// const postcssPresetEnv = require('postcss-preset-env');

export default defineConfig({
  optimizeDeps: {
    exclude: [], // 将指定数组中的依赖不进行依赖预构建
  },
  envPrefix: 'ENV_', // 配置vite注入客户端环境变量校验的env前缀
  // css modules配置最终会交给postcss modules处理
  css: {
    // 对css模块化的默认行为进行覆盖
    modules: {
      // 修改生成的配置对象的key的展示形式(驼峰还是中划线形式)
      localsConvention: 'camelCaseOnly',
      // 配置当前的模块化行为是模块化还是全局化 (有hash就是开启了模块化的一个标志, 因为它可以保证产生不同的hash值来控制样式类名不被覆盖)；local(默认值)表示开启模块化，global表示关闭模块化。
      scopeBehaviour: 'local',
      // 生成的类名的规则，可以配置为函数, 也可以配置成字符串（规则: https://github.com/webpack/loader-utils#interpolatename)
      // 配置成字符串
      // generateScopedName: '[name]_[local]_[hash:5]',
      // 配置为函数
      generateScopedName: (name, filename, css) => {
        /**
         * name表示当前css文件中的类名；
         * filename表示当前css文件的绝对路径；
         * css表示当前css文件中的样式内容；
         */
        return `${name}_${Math.random().toString(36).substring(3, 8)}`;
      },
      // 生成hash会根据类名 + 一些其他的字符串(文件名 + 它内部随机生成一个字符串)去进行生成, 如果你想要生成的hash更加独特一点, 就可以配置hashPrefix, 你配置的这个字符串会参与到最终的hash生成, （hash: 只要字符串有一个字不一样, 那么生成的hash就完全不一样, 但是只要字符串完全一样, 生成的hash就会一样）
      hashPrefix: 'rio',
      // 表示不参与到css模块化的路径
      globalModulePaths: [],
    },
    preprocessorOptions: {
      less: {
        // 整个配置对象最终会给到less的执行参数(全局参数)中去
        math: 'always',
        // 全局变量
        globalVars: {
          mainColor: '#f00',
        },
      },
      sass: {},
    },
    // 开启css的sourceMap(文件索引)
    devSourcemap: true,
    // postcss: {
    //   plugins: [postcssPresetEnv()],
    // },
  },
});
