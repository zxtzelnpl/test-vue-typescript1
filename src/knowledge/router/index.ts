/*eslint-disable*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import BasicLayout from '../layouts/BasicLayout.vue'

Vue.use(VueRouter)

const routes = [ {
  name: 'index',
  path: '',
  component: BasicLayout,
  redirect: '/async-demo',
  children:[
    {
      path: '/PropsAndOn-demo',
      name: 'PropsAndOn-demo',
      component: () => import(/* webpackChunkName: "PropsAndOn" */ '../views/PropsAndOn/index.vue')
    },
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
      path: '/keepAlive-demo',
      name: 'keepAlive-demo',
      component: () => import(/* webpackChunkName: "keepAlive" */ '../views/keepAlive/index.vue'),
      children: [
        {
          path: '/keepAlive-demo/one',
          name: 'keepAlive-demo-one',
          component: () => import(/* webpackChunkName: "keepAliveOne" */ '../views/keepAlive/ChildOne.vue'),
        },
        {
          path: '/keepAlive-demo/:id',
          name: 'keepAlive-demo-two',
          component: () => import(/* webpackChunkName: "keepAliveTwo" */ '../views/keepAlive/ChildTwo.vue'),
        }
      ]
    },
    {
      path: '/props-demo',
      name: 'props-demo',
      component: () => import(/* webpackChunkName: "props" */ '../views/props/index.vue')
    },
    {
      path: '/slot-demo',
      name: 'slot-demo',
      component: () => import(/* webpackChunkName: "slot" */ '../views/slot/index.vue')
    }
  ]
} ]

export const menus = routes[0].children.map(
  ({ path, name }) => ({
    path,
    name
  })
).concat([
  { name: '/keepAlive-demo/1', path: '/keepAlive-demo/1'},
  { name: '/keepAlive-demo/2', path: '/keepAlive-demo/2'},
  { name: '/keepAlive-demo/3', path: '/keepAlive-demo/3'},
  { name: '/keepAlive-demo/4', path: '/keepAlive-demo/4'}
])

const router = new VueRouter({
  routes
})

export default router
