import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'MallHome',
    component: () => import('@/views/mall/home.vue')
  },
  {
    path: '/layout',
    name: 'Layout',
    component: () => import('@/views/Layout.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
