import { createApp } from 'vue'
import App from './App.vue'
import GlobalComponent from './views/12-components/GlobalComponent.vue'

const app = createApp(App)
app.component('GC', GlobalComponent)
app.mount('#app')

// setTimeout(() => {
//   app.unmount()
// }, 5000)
