import esbuild from 'esbuild'
import swc from '@swc/core'
import fs from 'node:fs'

// esbuild打包是异步操作，需要用到顶层await语法（"target": "ESNext"这样设置，也是在es2017之后才支持这个新语法）
await esbuild.build({
  entryPoints: ['./src/index-esbuild-swc.ts'], // 支持多个入口
  outdir: 'dist', // 出口
  treeShaking: true,
  bundle: true, // 独立打包
  loader: {
    // key表示文件类型，value表示loader类型
    '.js': 'js',
    '.ts': 'ts',
    '.jsx': 'jsx',
    '.tsx': 'tsx',
  },
  plugins: [
    {
      name: 'swc-loader',
      // esbuild插件的方法名
      setup(build) {
        // build有各个阶段的方法
        build.onLoad({ filter: /\.(js|ts|jsx|tsx)$/ }, (args) => {
          // 回调函数返回的参数args，可以获取到当前编译到的入口文件的模块信息
          const content = fs.readFileSync(args.path, 'utf-8')
          const { code } = swc.transformSync(content, {
            filename: args.path,
          })
          return {
            contents: code,
          }
        })
      },
    },
  ],
})
