<template>
  <div class="test" @click="handleClick">
    123
  </div>
</template>

<script>
export default {
  props: {
    item: Object
  },
  methods: {
    handleClick () {
      console.log('colorText 123')
    }
  }
}
</script>

<style lang="scss">
  .test{
    color:red;
  }
</style>
