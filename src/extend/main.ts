import Vue from 'vue'
import App from './App.vue'
import Demo from './demo'

Vue.prototype.$demo = Demo

new Vue({
  render: h => h(App)
}).$mount('#app')
