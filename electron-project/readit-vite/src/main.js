import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router/index.js'
import 'normalize.css'
import '@/assets/style/common.css'
import '@/assets/iconfont/iconfont.css'
import App from './App.vue'

createApp(App).use(createPinia()).use(router).mount('#app')
