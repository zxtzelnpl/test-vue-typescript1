<template>
  <div class="home">
    child's message
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'DemoOneChild',
  props: {
    message: String
  },
  updated () {
    console.log('demo-one-child')
  }
})
</script>
