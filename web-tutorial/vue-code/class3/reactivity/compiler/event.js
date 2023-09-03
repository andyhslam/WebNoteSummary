import { randomNum, checkType } from '../shared/utils'

// 正则里面的一个小括号()表示一个子表达式
const reg_onClick = /onClick\=\"(.*?)\"/g
const reg_fnName = /^(.*?)\(/
const reg_arg = /\((.*?)\)/

const eventPool = []

export function eventFormat (template) {
  console.log(template)
  return template.replace(reg_onClick, function (node, key) {
    console.log(node, key)
    const _flag = randomNum()
    eventPool.push({
      type: 'click',
      flag: _flag,
      handler: key.trim()
    })
    return `data-dom="${_flag}"`
  })
}

export function bindEvent (methods) {
  console.log('methods', methods)
  const allElements = document.getElementsByTagName('*')
  let oItem = null
  let _flag = 0
  eventPool.forEach((event) => {
    for (let i = 0; i < allElements.length; i++) {
      oItem = allElements[i]
      _flag = parseInt(oItem?.dataset?.dom || '')
      // _flag = parseInt(oItem.getAttribute?.('data-dom') || '')
      if (event.flag === _flag) {
        oItem.addEventListener(event.type, function () {
          const fnName = event.handler.match(reg_fnName)[1]
          const arg = checkType(event.handler.match(reg_arg)[1])
          methods[fnName](arg)
        }, false)
      }
    }
  })
}