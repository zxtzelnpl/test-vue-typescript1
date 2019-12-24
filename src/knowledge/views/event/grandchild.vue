<template>
  <div class="grand-child">
    <div>Slot Component GrandChild</div>
    <hr>
    <button @click="handleClick">zxt</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick ($event) {
      console.log('grandchild emit zxt')
      this.$emit('zxt', $event)
    }
  }
}
</script>
