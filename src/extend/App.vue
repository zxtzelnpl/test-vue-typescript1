<template>
  <div class="app">
    <button @click="handleClick">Click</button>
  </div>
</template>

<script>
export default {
  name: 'extend-demo',
  methods: {
    handleClick () {
      const vm = new this.$demo({
        data () {
          return {
            home: 'China'
          }
        }
      }).$mount()
      document.body.append(vm.$el)
    }
  }
}
</script>
