import Vue from 'vue'
import VueRouter from 'vue-router'

import login from '../views/login.vue'
import signup from '../views/signup.vue'
import todo from '../views/todo.vue'
import profile from '../views/profile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'todo',
    component: todo
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/signup',
    name: 'signup',
    component: signup
  },
  {
    path: '/profile',
    name: 'profile',
    component: profile
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
