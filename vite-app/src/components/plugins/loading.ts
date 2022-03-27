import { App, createVNode, VNode, render } from 'vue'

// 把组件封装成插件
import Loading from './loading.vue'

export default {
  install(app: App) {
    // 挂载之前的虚拟dom
    const vnode: VNode = createVNode(Loading)
    // 转成真实的dom
    render(vnode, document.body)
    // 挂载完毕，可以读取属性
    app.config.globalProperties.$loading = {
      show: vnode.component?.exposed?.show,
      hide: vnode.component?.exposed?.hide,
    }
  }
}