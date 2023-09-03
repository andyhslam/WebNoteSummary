import { randomNum } from '../shared/utils'

const reg_onClick = /onClick\=\"(.*?)\"/g

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