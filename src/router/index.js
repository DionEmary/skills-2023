import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/support',
    name: 'support',
    component: () => import('../views/SupportView.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../views/ProductsView.vue')
  },
  {
    path: '/review',
    name: 'review',
    component: () => import('../views/ReviewsView.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
