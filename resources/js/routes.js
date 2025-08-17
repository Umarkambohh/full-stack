import { createRouter, createWebHistory } from 'vue-router'

// Layouts
import GuestLayout from './layouts/Guest.vue'
import Login from "./pages/Login.vue";

const routes = [
  {
    path: '/',
    component: GuestLayout,
    children: [
      {
        path: '/',
        name: '',
        component: Login
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
