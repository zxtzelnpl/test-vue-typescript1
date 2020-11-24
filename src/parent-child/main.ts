import Vue from 'vue'
import App from './Father.vue'
import 'ant-design-vue/dist/antd.css'
import Antd from 'ant-design-vue'
Vue.use(Antd)

new Vue({
  render: h => h(App)
}).$mount('#app')
