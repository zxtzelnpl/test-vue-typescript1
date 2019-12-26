<template>
  <div class="child">
    <div>Slot Component Child</div>
    <hr>
    <div>props.index {{index}}</div>
    <div>data.calcIndex {{calcIndex}}</div>
  </div>
</template>

<script>
export default {
  props: {
    index: Number
  },
  data () {
    const calcIndex = this.index + '****'
    return {
      calcIndex
    }
  },
  methods: {
    handleZxt (e) {
      console.log('handleZxt in grandchild')
      console.log(e)
    }
  }
}
</script>
