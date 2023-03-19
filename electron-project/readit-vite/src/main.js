import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'normalize.css'
import '@/assets/style/common.css'
import App from './App.vue'

createApp(App).use(createPinia()).mount('#app')
