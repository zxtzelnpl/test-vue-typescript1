<template>
  <div class="child">
    <p>name:{{name}}，age：{{age}}</p>
    <button @click="handleClick">reset</button>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    age: String
  },
  methods: {
    handleClick () {
      this.$emit('reset')
    }
  }
}
</script>
