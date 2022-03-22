import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/reset.less'
import Card from './components/card/index.vue'

createApp(App).component('Card', Card).mount('#app')
