
const reg_mark = /^(.+?)\s/
const reg_sharp = /^\#/
const reg_crossbar = /^\-/

function createTree (mdArr) {
  let _htmlPool = {}
  let _lastMark = ''

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
          _htmlPool[tag].tags.push(`<${tag}>${tagContent}</${tag}>`)
        } else {
          _lastMark = mark
          _htmlPool[tag] = {
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
          _htmlPool['ul'].tags.push(`<${tag}>${tagContent}</${tag}>`)
        } else {
          _lastMark = mark
          _htmlPool['ul'] = {
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
  console.log('_htmlPool', _htmlPool)
}

module.exports = {
  compileHTML
}