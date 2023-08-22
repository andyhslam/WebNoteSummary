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

function generateChild (node) { }

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
  let code = `
    _c('${el.tag}',${el.attrs.length ? `${formatProps(el.attrs)}` : undefined
    }${children ? `,${children}` : ''
    })
  `
}

export { generate }