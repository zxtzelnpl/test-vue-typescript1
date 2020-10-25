import Vue from 'vue'
const req = require.context('./components/', false, /\.vue$/)
req.keys().forEach(key => {
  const comp = req(key).default
  Vue.component(comp.name, comp)
})
