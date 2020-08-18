import Vue from 'vue'
import VueRouter from 'vue-router'
import BasicLayout from './layouts/BasicLayout.vue'
import AnotherLayout from './layouts/AnotherLayout.vue'
import DemoOne from './demo-one.vue'
import DemoTwo from './demo-two.vue'
import DemoThree from './demo-three.vue'

Vue.use(VueRouter)

const routes = [
  {
    name: 'index',
    path: '/keep-alive',
    component: BasicLayout,
    children: [
      {
        path: 'one',
        name: 'demoOne',
        component: DemoOne
      },
      {
        path: 'two/:id',
        name: 'demoTwo',
        component: DemoTwo,
        props: true
      },
      {
        path: 'three/:id',
        name: 'DemoThree',
        component: DemoThree
      }
    ]
  },
  {
    name: 'another',
    path: '/another',
    component: AnotherLayout,
    children: [
      {
        path: 'one',
        name: 'demoOne',
        component: DemoOne
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
