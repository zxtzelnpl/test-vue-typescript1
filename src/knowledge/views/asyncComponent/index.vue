<template>
  <div class="async-component-demo">
    <h4>Async Component Demo</h4>
    <div v-if="show">
      <AsyncComponent />
    </div>
    <button @click="changeShow">change</button>
  </div>
</template>

<script>
import AsyncComponent from '../../components/async-component'
export default {
  components: {
    AsyncComponent: AsyncComponent(/* webpackChunkName: "my-component" */'./my-component.vue')
  },
  data () {
    return {
      show: false
    }
  },
  methods: {
    changeShow () {
      this.show = !this.show
    }
  }
}
</script>
