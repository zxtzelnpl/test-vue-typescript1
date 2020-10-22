<template>
  <div>
    ChildOne
    <button @click="handleClick">Click</button>
  </div>
</template>

<script>
export default {
  name: 'child-one',
  methods: {
    handleClick () {
      console.log('handleClick')
      this.$root.$emit('go')
    }
  }
}
</script>
