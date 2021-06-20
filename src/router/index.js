import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/doctor-main',
    name: 'DoctorMain',
    component: () => import('../views/doctor/Main.vue')
  },
  {
    path: '/doctor-reg',
    name: 'DoctorReg',
    component: () => import('../views/doctor/Registry.vue')
  },
  {
    path: '/doctor-login',
    name: 'DoctorLogin',
    component: () => import('../views/doctor/Login.vue')
  },
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/registry',
    name: 'Registry',
    component: () => import('../views/Registry.vue')
  },
  {
    path: '/main',
    name: 'Main',
    component: () => import('@/views/Main.vue')
  },
  {
    path: '/enter',
    name: 'Enter',
    component: () => import('@/views/EnterValues.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
})

export default router
