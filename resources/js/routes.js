import { createRouter, createWebHistory } from 'vue-router'

// Layouts
import GuestLayout from './layouts/Guest.vue'
import Login from "./pages/Login.vue";
import Register from "./pages/Register.vue";
import ForgotPassword from "./pages/ForgotPassword.vue";
import ResetPassword from "./pages/ResetPassword.vue";

const routes = [
  {
    path: '/',
    component: GuestLayout,
  },

  {
    path: '/login',
    component: Login,
  },

  {
    path: '/signup',
    component: Register,
  },
  {
    path: '/forgot-password',
    component: ForgotPassword,
  },
  {
    path: '/reset-password',
    component: ResetPassword,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
