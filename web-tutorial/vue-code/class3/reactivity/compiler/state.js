import { randomNum } from '../shared/utils'

const reg_data_dom = /\<.+?\>\{\{(.+?)\}\}\<\/.+?\>/g
const reg_variable = /\{\{(.*?)\}\}/g
const reg_tag = /\<(.+?)\>/
const reg_frontTag = (node) => {
  // 只取开头的标签，所以只有前面一个子表达式
  return new RegExp(`\<(.*?)\>${node}\</.*?\>`)
}

export const statePool = []

export function stateFormat (template, state) {
  template = template.replace(reg_data_dom, (node, key) => {
    const matched = node.match(reg_tag)[1]
    const _flag = randomNum()
    statePool.push({ flag: _flag })
    return `<${matched} data-dom="${_flag}">{{${key}}}</${matched}>`
  })
  console.log('template1', template)
  // 这里的两个replace函数执行的次数是一样的
  let od = 0
  template = template.replace(reg_variable, (node, key) => {
    // 每匹配到一次，会执行一次这个箭头函数
    let _variable = key.trim()
    const _variableArr = _variable.split('.')
    _variable = state
    let i = 0
    while (i < _variableArr.length) {
      _variable = _variable[_variableArr[i]]
      i++
    }
    statePool[od].state = _variableArr
    od++
    return _variable
  })
  console.log('statePool', statePool)
  console.log('template2', template)
  return template
}