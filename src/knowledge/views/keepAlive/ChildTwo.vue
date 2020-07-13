<template>
  <div class="child-two">
    child-two
    <input />
  </div>
</template>

<script>
export default {
  name: 'KeepAliveChildTwo',
  mounted () {
    console.log(`${this.$options.name} mounted`)
  }
}
</script>
