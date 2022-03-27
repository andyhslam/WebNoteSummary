import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/reset.less'
import Card from './components/card/index.vue'

const app = createApp(App)

// 声明文件 不然TS无法正确类型 推导
type Filter = {
  format: <T>(str: T) => string
}

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $filters: Filter,
    $env: string
  }
}

app.config.globalProperties.$filters = {
  format<T>(str: T): string {
    return `真·${str}`
  }
}

app.config.globalProperties.$env = 'dev'

app.component('Card', Card).mount('#app')