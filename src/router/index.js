import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Tasks from '../views/Tasks.vue'
import Calendar from '../views/Calendar.vue'
import Table from '../views/Table.vue'
import Form from '../views/Form.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/tasks',
    name: 'tasks',
    component: Tasks
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: Calendar
  },
  {
    path: '/table',
    name: 'table',
    component: Table
  },
  {
    path: '/form',
    name: 'form',
    component: Form
  }
]

const router = new VueRouter({
  routes
})

export default router
