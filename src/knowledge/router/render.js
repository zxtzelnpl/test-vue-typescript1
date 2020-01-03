const fs = require('fs')
const path = require('path')

const template = (routes) => (`/*eslint-disable*/
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  ${routes}
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
`)

var filePath = path.resolve('./src/knowledge/views')
console.log(filePath)

fs.readdir(filePath, (error, files) => {
  if (error) {
    console.log(error)
    return
  }
  var count = files.length
  console.log(files)
  const routes = files.map(file => (
    `
  {
    path: '/${file}-demo',
    name: '${file}-demo',
    component: () => import(/* webpackChunkName: "${file}" */ '../views/${file}/index.vue')
  }`
  )).join(',')
  const routerContent = template(routes)
  const routerPath = path.resolve('./src/knowledge/router/index.ts')
  fs.writeFile(routerPath, routerContent, (err) => {
    if (err) { console.log(err) } else { console.log('文件已保存') }
  })
})
