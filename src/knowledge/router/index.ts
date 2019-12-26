import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/async-demo',
    name: 'async-demo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/async/index.vue')
  },
  {
    path: '/slot-demo',
    name: 'slot-demo',
    component: () => import(/* webpackChunkName: "slot" */ '../views/slot/index.vue')
  },
  {
    path: '/event-demo',
    name: 'event-demo',
    component: () => import(/* webpackChunkName: "event" */ '../views/event/index.vue')
  },
  {
    path: '/props-demo',
    name: 'props-demo',
    component: () => import(/* webpackChunkName: "props" */ '../views/props/index.vue')
  }
]

export const menus = routes.map(
  ({ path, name }) => ({
    path,
    name
  })
)

const router = new VueRouter({
  routes
})

export default router
