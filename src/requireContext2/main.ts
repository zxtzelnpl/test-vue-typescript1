import Vue from 'vue'
import Demo from './demo.vue'

import './components.js.js'

new Vue({
  render: h => h(Demo)
}).$mount('#app')
