<template>
  <div class="child-one">
    child-one
  </div>
</template>

<script>
export default {
  name: 'KeepAliveChildOne',
  mounted () {
    console.log(`${this.$options.name} mounted`)
  }
}
</script>
