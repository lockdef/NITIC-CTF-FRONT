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
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
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
