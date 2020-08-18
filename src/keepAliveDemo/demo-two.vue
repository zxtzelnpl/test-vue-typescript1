<template>
  <div class="demo">
    <h4>DEMO-TWO</h4>
    <div>这是ID:{{id}}</div>
    <div>
      <input type="text" :placeholder="placeholder">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    placeholder () {
      return `请输入ID:${this.id}对应的名字`
    }
  }
  // data () {
  //   const { id } = this
  //   return {
  //     // id,
  //     placeholder: `请输入ID:${id}对应的名字`
  //   }
  // }
}
</script>
