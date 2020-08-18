<template>
  <div class="demo">
    <father>
      <div>12345</div>
      <child />
    </father>
  </div>
</template>

<script>
import Father from './father'
import Child from './child'

export default {
  components: {
    Father,
    Child
  }
}
</script>

<style lang="less" scoped>

</style>
