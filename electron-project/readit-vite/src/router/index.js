import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

// 定义路由表
const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/imageGallery',
    name: 'ImageGallery',
    component: () => import('@/views/ImageGallery.vue')
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(),
})

export default router