import Vue from 'vue'
import Notice from './Notice.vue'

const Demo = Vue.extend({
  mounted () {
    console.log(this)
  },
  render (h) {
    // @ts-ignore
    const name = this['home']

    return h(Notice, { props: { name } })
  }
})

export default Demo
