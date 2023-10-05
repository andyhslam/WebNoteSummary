const { randomNum } = require('./utils')

const reg_mark = /^(.+?)\s/
const reg_sharp = /^\#/
const reg_crossbar = /^\-/
const reg_number = /^\d/

function createTree (mdArr) {
  let _htmlPool = {}
  let _lastMark = ''
  let _key = 0

  mdArr.forEach((mdFragment) => {
    const matched = mdFragment.match(reg_mark)
    if (matched) {
      const mark = matched[1]
      const input = matched['input']

      // 判断h标签
      if (reg_sharp.test(mark)) {
        const tag = `h${mark.length}`
        const tagContent = input.replace(reg_mark, '').replace(/\r/, '')
        // 当前标签和上一个标签是一样的，表示他们是一组的
        if (mark === _lastMark) {
          _htmlPool[`${tag}-${_key}`].tags.push(`<${tag}>${tagContent}</${tag}>`)
        } else {
          _lastMark = mark
          _key = randomNum()
          _htmlPool[`${tag}-${_key}`] = {
            type: 'single',
            tags: [`<${tag}>${tagContent}</${tag}>`]
          }
        }
      }

      // 判断无序列表：ul标签
      if (reg_crossbar.test(mark)) {
        const tag = 'li'
        const tagContent = input.replace(reg_mark, '').replace(/\r/, '')
        // 当前标签和上一个标签是一样的，表示他们是一组的
        if (reg_crossbar.test(_lastMark)) {
          _htmlPool[`ul-${_key}`].tags.push(`<${tag}>${tagContent}</${tag}>`)
        } else {
          _lastMark = mark
          _key = randomNum()
          _htmlPool[`ul-${_key}`] = {
            type: 'wrap',
            tags: [`<${tag}>${tagContent}</${tag}>`]
          }
        }
      }

      // 判断有序列表：ol标签
      if (reg_number.test(mark)) {
        const tag = 'li'
        const tagContent = input.replace(reg_mark, '').replace(/\r/, '')
        // 当前标签和上一个标签是一样的，表示他们是一组的
        if (reg_number.test(_lastMark)) {
          _htmlPool[`ol-${_key}`].tags.push(`<${tag}>${tagContent}</${tag}>`)
        } else {
          _lastMark = mark
          _key = randomNum()
          _htmlPool[`ol-${_key}`] = {
            type: 'wrap',
            tags: [`<${tag}>${tagContent}</${tag}>`]
          }
        }
      }
    }
  })

  return _htmlPool
}

function compileHTML (mdArr) {
  const _htmlPool = createTree(mdArr)
  let _htmlStr = ''
  let item

  for (const k in _htmlPool) {
    item = _htmlPool[k]
    if (item.type === 'single') {
      item.tags.forEach(tag => {
        _htmlStr += tag
      })
    } else if (item.type === 'wrap') {
      const tagName = k.split('-')[0]
      let _list = `<${tagName}>`
      item.tags.forEach(tag => {
        _list += tag
      })
      _list += `</${tagName}>`
      _htmlStr += _list
    }
  }
  return _htmlStr
}

module.exports = {
  compileHTML
}