<template>
  <div>
    ChildTwo
  </div>
</template>

<script>
export default {
  name: 'child-two',
  mounted () {
    console.log(this.$root)
    this.$root.$on('go', () => {
      console.log('ChildTwo')
    })
  }
}
</script>
