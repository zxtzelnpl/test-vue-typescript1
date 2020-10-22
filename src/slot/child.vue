<template>
  <div class="child">
    child {{ fatherName }}
  </div>
</template>

<script>
export default {
  props: {
    fatherName: {
      type: String
    }
  },
  name: 'child',
  mounted () {
    console.log(this.$attrs)
  }
}
</script>

<style lang="less" scoped>
.child {
  color:red;
}
</style>
