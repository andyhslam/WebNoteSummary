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
  const _state = {}
  template = template.replace(reg_data_dom, (node, key) => {
    const matched = node.match(reg_tag)[1]
    const _flag = randomNum()
    _state.flag = _flag
    return `<${matched} data-dom="${_flag}">{{${key}}}</${matched}>`
  })
  console.log('template1', template)
  template = template.replace(reg_variable, (node, key) => {
    let _variable = key.trim()
    const _variableArr = _variable.split('.')
    _variable = state
    let i = 0
    while (i < _variableArr.length) {
      _variable = _variable[_variableArr[i]]
      i++
    }
    _state.state = _variableArr
    statePool.push(_state)
    console.log('statePool', statePool)
    return _variable
  })
  console.log('template2', template)
  return template
}