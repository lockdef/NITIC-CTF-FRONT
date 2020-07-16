import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Content from '../views/Contest.vue'
import Form from '../views/Form.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contest/:id',
    name: 'Contest',
    component: Content
  },
  {
    path: '/form/:id',
    name: 'Form',
    component: Form
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
