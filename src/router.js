import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: () => import('./components/Home.vue') },
  { path: '/room', component: () => import('./components/HomeRoom.vue') },
  { path: '/about', component: () => import('./components/HomeAbout.vue') },
  { path: '/profile', component: () => import('./components/HomeProfile.vue') },
  { path: '/admin', component: () => import('./components/Admin.vue') },
  { path: '/bookings', component: () => import('./components/Bookings.vue') },
  { path: '/login', component: () => import('./components/Login.vue') },
  { name: 'register', path: '/register', component: () => import('./components/Register.vue') }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
