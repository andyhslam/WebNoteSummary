const { tplReplace } = require('../utils')
const { getOptions } = require('loader-utils')

function tplLoader (source) {
  source = source.replace(/\s+/g, '')
  const { log } = getOptions(this)
  console.log('source', source)

  // this.resourcePath：当前编译的文件的路径
  const _log = log ? `console.log('compiled the file which is from ${this.resourcePath}')` : ''

  return `
    export default (options) => {
      ${tplReplace.toString()}
      ${_log.toString()}
      return tplReplace('${source}', options)
    }
  `
}

module.exports = tplLoader