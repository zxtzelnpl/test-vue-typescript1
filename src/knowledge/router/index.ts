/*eslint-disable*/
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  
  {
    path: '/async-demo',
    name: 'async-demo',
    component: () => import(/* webpackChunkName: "async" */ '../views/async/index.vue')
  },
  {
    path: '/asyncComponent-demo',
    name: 'asyncComponent-demo',
    component: () => import(/* webpackChunkName: "asyncComponent" */ '../views/asyncComponent/index.vue')
  },
  {
    path: '/depTest-demo',
    name: 'depTest-demo',
    component: () => import(/* webpackChunkName: "depTest" */ '../views/depTest/index.vue')
  },
  {
    path: '/depTestOne-demo',
    name: 'depTestOne-demo',
    component: () => import(/* webpackChunkName: "depTestOne" */ '../views/depTestOne/index.vue')
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
  },
  {
    path: '/PropsAndOn-demo',
    name: 'PropsAndOn-demo',
    component: () => import(/* webpackChunkName: "PropsAndOn" */ '../views/PropsAndOn/index.vue')
  },
  {
    path: '/slot-demo',
    name: 'slot-demo',
    component: () => import(/* webpackChunkName: "slot" */ '../views/slot/index.vue')
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
