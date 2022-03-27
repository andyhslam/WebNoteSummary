import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/reset.less'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import Card from './components/card/index.vue'
import Loading from './components/plugins/loading'

const app = createApp(App)

// 声明文件 不然TS无法正确类型 推导
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

// app.use(Loading)
// app.use(ElementPlus)
app.use(Antd)
app.component('Card', Card).mount('#app')