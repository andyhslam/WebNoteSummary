function createElement (tag, props = {}, ...children) {
  // ...children在此处表示剩余参数
  return vnode({ tag, props, children })
}

function createTextVnode (text) {
  return vnode({ text })
}

function vnode ({ tag, props, children, text }) {
  return {
    tag,
    props,
    children,
    text
  }
}

export { createElement, createTextVnode }