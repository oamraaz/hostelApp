import { createRouter, createWebHistory } from 'vue-router'
import useUser from './composables/useUser'
const routes = [
  {
    path: '/',
    component: () => import('./components/Home.vue')
  },
  {
    path: '/room',
    component: () => import('./components/HomeRoom.vue')
  },
  { path: '/about', component: () => import('./components/HomeAbout.vue') },
  { path: '/profile', component: () => import('./components/HomeProfile.vue') },
  { path: '/admin', component: () => import('./components/Admin.vue') },
  { path: '/bookings', component: () => import('./components/Bookings.vue') },
  {
    path: '/login',
    component: () => import('./components/Login.vue'),
    meta: {
      guest: true
    }
  },
  {
    name: 'register',
    path: '/register',
    component: () => import('./components/Register.vue'),
    meta: {
      guest: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const { user: currentUser } = useUser
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const isGuestPage = to.matched.some(record => record.meta.guest)
  console.log(currentUser)
  if (requiresAuth && !currentUser) {
    next('/')
  } else if (isGuestPage && currentUser) {
    next('/') // or your desired route
  } else {
    next()
  }
})

export default router
