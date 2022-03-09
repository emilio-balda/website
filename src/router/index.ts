import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomePage from '../views/HomePage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/ContactPage.vue'),
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: () => import('../views/PortfolioPage.vue'),
  },
  {
    path: '/references',
    name: 'References',
    component: () => import('../views/ReferencesPage.vue'),
  },
  {
    path: '/services',
    name: 'Services',
    component: () => import('../views/ServicesPage.vue'),
  },
  {
    path: '/testimonials',
    name: 'Testimonials',
    component: () => import('../views/TestimonialsPage.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
