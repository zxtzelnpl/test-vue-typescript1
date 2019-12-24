<template>
  <div class="child">
    <div>Slot Component Child</div>
    <hr>
    <Grandchild v-on:zxt="handleZxt"/>
  </div>
</template>

<script>
import Grandchild from './grandchild'
export default {
  components: {
    Grandchild
  },
  methods: {
    handleZxt (e) {
      console.log('handleZxt in grandchild')
      console.log(e)
    }
  }
}
</script>
