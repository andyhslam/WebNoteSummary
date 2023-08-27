import { createElement, createTextVnode } from './vnode'

function renderMixin (Vue) {
  // 在Vue上扩展一个针对vnode的render函数
  Vue.prototype._render = function () {
    const vm = this,
      render = vm.$options.render,
      vnode = render.call(vm)
    console.log('vnode', vnode)
    return vnode
  }

  // 创建元素
  Vue.prototype._c = function () {
    return createElement(...arguments)
  }

  // 转换变量
  Vue.prototype._s = function (value) {
    if (value === null) return
    return typeof value === 'object' ? JSON.stringify(value) : value
  }

  // 创建文本节点
  Vue.prototype._v = function (text) {
    return createTextVnode(text)
  }
}

export { renderMixin }