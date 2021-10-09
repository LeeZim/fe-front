import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/components/HelloWorld.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
