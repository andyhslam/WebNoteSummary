const { readFileSync } = require('fs')
const { resolve } = require('path')
const { compileHTML } = require('./compiler')

const INNER_MARK = '<!-- inner -->'

class MdToHtmlPlugin {
  constructor({ template, filename }) {
    if (!template) {
      throw new Error('The config for "template" must be configured')
    }
    this.template = template
    this.filename = filename || 'md.html'
  }

  apply (compiler) {
    // 第一个参数是插件名称
    compiler.hooks.emit.tap('md-to-html-plugin', (compilation) => {
      const _assets = compilation.assets
      // 读取test.md文件的内容
      const _mdContent = readFileSync(this.template, 'utf8')
      const _templateHTML = readFileSync(resolve(__dirname, 'template.html'), 'utf8')
      const _mdContentArr = _mdContent.split('\n')
      const _htmlStr = compileHTML(_mdContentArr)

      const _finalHTML = _templateHTML.replace(INNER_MARK, _htmlStr)

      // 添加一个资源到test.html
      _assets[this.filename] = {
        source () {
          return _finalHTML
        },
        size () {
          return _finalHTML.length
        }
      }
    })
  }
}

module.exports = MdToHtmlPlugin