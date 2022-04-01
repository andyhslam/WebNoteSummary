import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('../components/login/index.vue') // 打包时会进行代码分割，有利于性能优化
  },
  {
    path: '/register',
    component: () => import('../components/register/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

//vue2 mode history vue3 createWebHistory
//vue2 mode  hash  vue3  createWebHashHistory
//vue2 mode abstact vue3  createMemoryHistory(SSR服务端渲染，默认自动开启)
