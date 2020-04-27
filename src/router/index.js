import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    component: () => import('../views/Home'),
    children: [
      {
        path: 'index',
        component: () => import('@/views/Home/MyIndex')
      },
      {
        path: 'order',
        component: () => import('@/views/Home/Order')
      },
      {
        path: 'my',
        component: () => import('@/views/Home/My')
      },
      {
        path: '',
        redirect: '/home/index'
      }
    ]
  },
  {
    path: '/food',
    component: () => import('@/views/Food')
  },
  {
    path: '/menu',
    component: () => import('@/views/Menu')
  },
  {
    path: '/',
    redirect: '/home'
  }
]

const router = new VueRouter({
  routes
})

export default router
