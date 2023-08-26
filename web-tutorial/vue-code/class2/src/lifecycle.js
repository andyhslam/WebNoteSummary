function mountComponent (vm) {
  /**
   * 此处的_render不是AST树转化的渲染函数，而是虚拟节点里面的渲染函数。
   * 虚拟节点的_render函数执行之后，返回vnode。
   */
  vm._update(vm._render())
}

function lifecycleMixin (Vue) {
  // 更新视图的同时，把虚拟节点的补丁打到真实节点上
  Vue.prototype._update = function (vnode) {
    const vm = this
  }
}

export { mountComponent, lifecycleMixin }