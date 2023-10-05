export function compileTemplate (template, data) {
  const _node = document.createElement('div')
  _node.innerHTML = template
  return compileNode(_node, data)
}

function compileNode (node, data) {
  const allNodes = node.querySelectorAll('*')
  allNodes.forEach(item => {
    const tagName = item.tagName.toLowerCase()
  })
}