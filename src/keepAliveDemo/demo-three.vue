<template>
  <div class="demo">
    <h4>DEMO-THREE</h4>
    <div>这是ID:{{id}}</div>
    <div>
      <input type="text" :placeholder="placeholder">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    const { id } = this.$route.params
    return {
      id,
      placeholder: `请输入ID:${id}对应的名字`
    }
  }
}
</script>
