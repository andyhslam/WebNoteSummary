import { createApp } from 'vue'
import App from './App.vue'
import GlobalComponent from './views/12-components/GlobalComponent.vue'
import MyDirective from './views/19-directive-plugin/myDirective.js'
import MyPlugin from './views/19-directive-plugin/myPlugin.js'

const app = createApp(App)
app.component('GC', GlobalComponent)
app.directive('focus', MyDirective)
app.use(MyPlugin, 'hello')
app.mount('#app')

// setTimeout(() => {
//   app.unmount()
// }, 5000)
