import { createRouter, createWebHistory } from 'vue-router'
import Cookbook from '@/views/cookbook/Cookbook.vue'

const routes = [
  {
    path: '/',
    redirect: '/cookbook',
  },
  {
    path: '/cookbook',
    component: Cookbook,
    meta: {
      title: '菜谱大全'
    },
  },
  {
    path: '/category',
    component: () => import('@/views/category/Category.vue'),
    meta: {
      title: '分类'
    },
  },
  {
    path: '/more',
    component: () => import('@/views/more/More.vue'),
    meta: {
      title: '更多'
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router