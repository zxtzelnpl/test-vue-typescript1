export default {
  path: '/B',
  name: 'B',
  component: () => import(/* webpackChunkName: "B" */'./B.vue')
}
