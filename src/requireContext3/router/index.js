import Vue from 'vue'
import VueRouter from 'vue-router'

let routes = []
const views = require.context('../views', false, /\.js$/)
views.keys().forEach(key => {
  const view = views(key).default
  routes.push(view)
})

Vue.use(VueRouter)

// const routes = [
//   {
//     path: '/A',
//     name: 'A',
//     component: () => import('../views/A.vue')
//   },
//   {
//     path: '/B',
//     name: 'B',
//     component: () => import('../views/B.vue')
//   },
//   {
//     path: '/C',
//     name: 'C',
//     component: () => import('../views/C.vue')
//   }
// ]
const router = new VueRouter({
  routes
})

export const menus = routes

export default router
