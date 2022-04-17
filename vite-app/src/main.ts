import App from './App.vue'
import { createApp, toRaw, createVNode, render } from 'vue'
import router from './router'
import mitt from 'mitt'
import { createPinia, PiniaPluginContext } from 'pinia'
import './assets/css/reset.less'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import Card from './components/card/index.vue'
// import Loading from './components/plugins/loading'
import loadingBar from "@/components/plugins/loadingBar.vue"
const vNode = createVNode(loadingBar)
render(vNode, document.body)
const app = createApp(App)
const Mit = mitt()

// 声明文件 不然TS无法正确类型推导
type Filter = {
  format: <T>(str: T) => string
}

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $filters: Filter,
    $env: string,
    $loading: {
      show: () => void,
      hide: () => void
    }
  }
}

app.config.globalProperties.$filters = {
  format<T>(str: T): string {
    return `真·${str}`
  }
}

app.config.globalProperties.$env = 'dev'

type Options = {
  key?: string
}
const __piniaKey__: string = 'victory'
const setStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value))
}
const getStorage = (key: string) => {
  return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key) as string) : {}
}
// 实现pinia持久化插件
const piniaPlugin = (options: Options) => {
  // 函数柯里化：pinia调用返回的函数，再传给context
  return (context: PiniaPluginContext) => {
    const { store } = context
    const getStorageData = getStorage(`${options?.key ?? __piniaKey__}-${store.$id}`)
    console.log('getStorage', getStorageData)
    store.$subscribe(() => {
      setStorage(`${options?.key ?? __piniaKey__}-${store.$id}`, toRaw(store.$state))
    })
    console.log('piniaPlugin', store)
    return {
      ...getStorageData
    }
  }
}
const store = createPinia()
store.use(piniaPlugin({
  key: 'pinia'
}))

const whiteList = ['/']
// 全局前置守卫：只要是与路由相关的，都可以在这个钩子读取
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  vNode.component?.exposed?.startLoading()
  //白名单有值或者登陆过存储了token信息可以跳转，否则就去登录页面
  if (whiteList.includes(to.path) || localStorage.getItem('token')) {
    next()
  } else {
    next('/')
  }
})
// 全局后置守卫：不会接受 next函数，也不会改变导航本身。
router.afterEach((to, from) => {
  vNode.component?.exposed?.endLoading()
})

declare module 'vue' {
  export interface ComponentCustomProperties {
    $Bus: typeof Mit
  }
}

app.config.globalProperties.$Bus = Mit
app.use(Antd)
app.use(ElementPlus)
// app.use(Loading)
app.use(store)
app.use(router)
app.component('Card', Card).mount('#app')