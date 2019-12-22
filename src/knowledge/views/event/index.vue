<template>
  <div class="event-demo">
    <div>Slot Component</div>
    <Child v-on:zxt="handleZxt"></Child>
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
      items: [
        {
          id: 1,
          name: 'zxt1'
        },
        {
          id: 2,
          name: 'zxt2'
        },
        {
          id: 3,
          name: 'zxt3'
        }
      ]
    }
  },
  methods: {
    handleZxt (e) {
      console.log('handleZxt')
      console.log(e)
    }
  }
}
</script>
