import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('../layout/tab/Tab.vue'),
    children: [
      {
        path: 'tab1',
        components: {
          default: () => import('../layout/tab/TabA.vue')
        }
      },
      {
        path: 'tab2',
        components: {
          tabB: () => import('../layout/tab/TabB.vue'),
          tabC: () => import('../layout/tab/TabC.vue'),
        }
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../components/login/login.vue') // 打包时会进行代码分割，有利于性能优化
  },
  {
    path: '/register/:id',
    name: 'Register',
    component: () => import('../components/register/register.vue')
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
