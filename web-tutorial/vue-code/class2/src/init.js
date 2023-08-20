import { initState } from "./state.js"
import { compileToRenderFunction } from "./compiler"

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    const vm = this
    vm.$options = options
    initState(vm)

    if (vm.$options.el) {
      // 执行挂载函数
      vm.$mount(vm.$options.el)
    }
  }

  Vue.prototype.$mount = function (el) {
    const vm = this,
      options = vm.$options

    el = document.querySelector(el),
      vm.$el = el

    if (!options.render) {
      let template = options.template
      if (!template && el) {
        template = el.outerHTML
      }
      // 先将模板编译成AST树，再将AST树转化成render函数
      const render = compileToRenderFunction(template)
      options.render = render
    }
  }
}

export { initMixin }