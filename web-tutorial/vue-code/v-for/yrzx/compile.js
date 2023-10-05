const customTags = ['if', 'for']
const reg_single_bracket = /\{(.*?)\}/g
const reg_double_bracket = /\{\{(.*?)\}\}/g

export function compileTemplate (template, data) {
  const _node = document.createElement('div')
  _node.innerHTML = template
  return compileNode(_node, data)
}

function compileNode (node, data) {
  const allNodes = node.querySelectorAll('*')
  allNodes.forEach(item => {
    const tagName = item.tagName.toLowerCase()
    if (customTags.includes(tagName)) {
      replaceNode(item, tagName, data)
    }
  })
}

function replaceNode (node, tag, data) {
  const dataKey = node.getAttribute('data')
  const className = node.className
  const realTag = node.getAttribute('tag')

  switch (tag) {
    case 'for':
      vFor(node, data, dataKey, className, realTag)
      break
    default:
      break
  }
}

function vFor (node, data, dataKey, className, realTag) {
  data[dataKey].forEach(item => {
    const el = document.createElement(realTag)
    el.className = className || ''
    el.innerHTML = replaceVar(node.innerHTML, item, reg_single_bracket)
  })
}

function replaceVar (html, data, reg) {
  return html.replace(reg, (node, key, xh) => {
    return data[key.trim()]
  })
}

