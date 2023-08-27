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

  // 创建元素：方式一
  Vue.prototype._c = function () {
    console.log(arguments, ...arguments)
    return createElement(...arguments)
  }

  // 创建元素：方式二
  // Vue.prototype._c = function (...args) {
  //   console.log(args, ...args)
  //   return createElement(...args)
  // }

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