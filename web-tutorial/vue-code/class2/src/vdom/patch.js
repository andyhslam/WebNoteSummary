function patch (oldNode, vNode) {
  /**
   * oldNode表示老的真实节点，vNode表示虚拟节点，el表示新的真实节点;
   * 通过打补丁的方式，将老的真实节点oldNode替换成新的真实节点el
   */
  const el = createElement(vNode)
  const parentElement = oldNode.parentNode

  parentElement.insertBefore(el, oldNode.nextSibling)
  parentElement.removeChild(oldNode)
}

// 通过vnode生产出真实节点
function createElement (vnode) {
  const { tag, props, children, text } = vnode

  if (typeof tag === 'string') {
    vnode.el = document.createElement(tag)
    updateProps(vnode)
    children.forEach((child) => {
      vnode.el.appendChild(createElement(child))
    })
  } else {
    vnode.el = document.createTextNode(text)
  }

  return vnode.el
}

function updateProps (vnode) {
  const el = vnode.el,
    newProps = vnode.props || {}

  for (let key in newProps) {
    if (key === 'style') {
      for (let sKey in newProps.style) {
        el.style[sKey] = newProps.style[sKey]
      }
    } else if (key === 'class') {
      el.className = el.class
    } else {
      el.setAttribute(key, newProps[key])
    }
  }
}

export { patch }