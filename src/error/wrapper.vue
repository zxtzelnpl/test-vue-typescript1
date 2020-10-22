<template>
  <div class="wrapper">
    Wrapper
    <level-one />
  </div>
</template>

<script>
import levelOne from './level-one.vue'
export default {
  name: 'wrapper',
  components: {
    levelOne
  },
  errorCaptured (err, vm, info) {
    console.info('######wrapper-start######')
    console.log(err)
    console.log(vm)
    console.log(info)
    console.info('######wrapper-end######')
    return true
  },
  renderError (h, err) {
    return h('pre', { style: { color: 'red' } }, err.stack)
  }
}
</script>

<style lang="less" scoped>

</style>
