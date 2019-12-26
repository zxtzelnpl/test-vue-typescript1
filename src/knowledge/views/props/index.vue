<template>
  <div class="event-demo">
    <div>Slot Component</div>
    <button @click="handleChange">change</button>
    <Child :index="index"></Child>
  </div>
</template>

<script>
import Child from './child'

export default {
  components: {
    Child
  },
  data () {
    return {
      index: 1
    }
  },
  methods: {
    handleChange (e) {
      this.index = this.index + 1
    }
  }
}
</script>
