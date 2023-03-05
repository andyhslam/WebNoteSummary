import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import Home from './Home.vue'
import About from './About.vue'

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/about',
    component: () => About,
  },
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router