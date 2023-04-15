import ts from 'rollup-plugin-typescript2'
import path from 'path'
import { fileURLToPath } from 'url'
const metaUrl = fileURLToPath(import.meta.url) // 导入元信息的地址
const dirName = path.dirname(metaUrl) // 得到真正的dirName
export default {
  input: './src/view/plugins/local-storage/index.ts',
  output: {
    // file: path.resolve(__dirname, './dist/index-local-storage.js') // 旧版rollup用的__dirname
    file: path.resolve(dirName, './dist/index-local-storage.js') // 新版rollup用的dirName
  },
  plugins: [
    ts() // 把ts转成js
  ]
}
