
const reg_mark = /^(.+?)\s/
const reg_sharp = /^\#/

function createTree (mdArr) {
  let _htmlPool = {}
  let _lastMark = ''

  mdArr.forEach((mdFragment) => {
    const matched = mdFragment.match(reg_mark)
    if (matched) {
      const mark = matched[1]
      const input = matched['input']
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