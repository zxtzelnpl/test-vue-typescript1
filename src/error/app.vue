<template>
  <div>
    App
    <wrapper />
  </div>
</template>

<script>
import wrapper from './wrapper.vue'
export default {
  components: {
    wrapper
  },
  errorCaptured (err, vm, info) {
    console.info('######app-start######')
    console.log(err)
    console.log(vm)
    console.log(info)
    console.info('######app-end######')
    return true
  }
}
</script>
