export default {
  path: '/A',
  name: 'A',
  component: () => import(/* webpackChunkName: "A" */'./A.vue')
}
