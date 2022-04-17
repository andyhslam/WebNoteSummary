import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw } from 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    title: string,
    transition: string
  }
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/components/login/eLogin.vue'),
    meta: {
      title: '登录页面',
      transition: 'animate__fadeInUp'
    }
  },
  {
    path: '/index',
    component: () => import('@/layout/index.vue'),
    meta: {
      title: '首页',
      transition: 'animate__bounceIn'
    }
  },
  {
    path: '/root',
    // alias: ['/root1', '/root2'], // 别名 alias
    // redirect:'/tab1', // 1.字符串形式配置
    // redirect: { path: '/tab1' }, // 2.对象形式配置
    redirect: (to) => { // 3.函数模式（可以传参）
      // return '/tab1'
      to.query.name = '清明节' // to表示当前父路由的所有信息
      return { path: '/tab1', query: to.query }
    },
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
  },
  {
    path: '/case1',
    name: 'Case1',
    component: () => import('@/views/case/case1.vue')
  },
  {
    path: '/case2',
    name: 'Case2',
    component: () => import('@/views/case/case2.vue')
  },
  {
    path: '/case3',
    name: 'Case3',
    component: () => import('@/views/case/case3.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: (to, from, savePosition) => {
    // savePosition: 标记距离
    // scrollBehavior：返回滚动位置的对象信息 { left: number, top: number }
    console.log('savePosition', savePosition)
    return new Promise((r) => {
      setTimeout(() => {
        r({
          top: 1000
        })
      }, 2000);
    })
  }
})

export default router

//vue2 mode history vue3 createWebHistory
//vue2 mode  hash  vue3  createWebHashHistory
//vue2 mode abstact vue3  createMemoryHistory(SSR服务端渲染，默认自动开启)
