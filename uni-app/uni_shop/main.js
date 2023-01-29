import Vue from 'vue'
import App from './App'
import httpInterceptor from '@/common/http.interceptor.js'

Vue.config.productionTip = false

App.mpType = 'app'

// 引入全局uView
import uView from 'uview-ui'
Vue.use(uView);

const app = new Vue({
    ...App
})
// 这里需要写在最后，是为了等Vue创建对象完成，引入"app"对象(也即页面的"this"实例)
Vue.use(httpInterceptor, app)

// http接口API集中管理
import httpApi from '@/common/http.api.js'
Vue.use(httpApi, app)

app.$mount()
