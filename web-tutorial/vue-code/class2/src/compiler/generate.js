// 匹配双大括号
const defaultTagRE = /\{\{((?:.|\r?\n)+?)\}\}/g

const regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g

function formatProps (attrs) {
  let attrStr = ''
  for (let i = 0; i < attrs.length; i++) {
    const attr = attrs[i]
    if (attr.name === 'style') {
      const styleAttrs = {}
      attr.value.split(';').map((styleAttr) => {
        const [key, value] = styleAttr.split(':')
        styleAttrs[key] = value
      })
      attr.value = styleAttrs
    }
    attrStr += `${attr.name}:${JSON.stringify(attr.value)},`
  }
  return `{${attrStr.slice(0, -1)}}`
}

function generateChild (node) {
  if (node.type === 1) {
    // 元素节点
    return generate(node)
  } else if (node.type === 3) {
    // 文本节点
    const text = node.text
    if (!defaultTagRE.test(text)) {
      // 纯文本的情况，使用JSON.stringify是为了给原有的字符串加上双引号。
      return `_v(${JSON.stringify(text)})`
    }
    let match, index, lastIndex = defaultTagRE.lastIndex = 0, textArr = []
    while (match = defaultTagRE.exec(text)) {
      // 每匹配一次，产生一个index
      console.log(match)
      index = match.index
      if (index > lastIndex) {
        textArr.push(JSON.stringify(text.slice(lastIndex, index)))
      }
      textArr.push(`_s(${match[1].trim()})`)
      lastIndex = index + match[0].length
    }

    if (lastIndex < text.length) {
      textArr.push(JSON.stringify(text.slice(lastIndex)))
    }

    return `_v(${textArr.join('+')})`
  }
}

function getChildren (el) {
  const children = el.children
  if (children.length) {
    return children.map(c => generateChild(c)).join()
  } else {
    return ''
  }
}

function generate (el) {
  const children = getChildren(el)
  const code = `_c('${el.tag}', ${el.attrs.length > 0
    ?
    `${formatProps(el.attrs)}`
    :
    'undefined'
    }${children ? `,${children}` : ''
    })`

  return code
}

export { generate }