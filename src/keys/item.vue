<template>
  <li class="item">
    <span class="outer">outer: {{it.id}}</span> |
    <span class="inner">inner: {{inner}}</span> |
    <input type="checkbox"> |
    <input type="text"> |
    <button @click="handleGet"> 获取ineer数据 </button> |
    <button @click="handleClick"> 删除 </button> |
  </li>
</template>

<script>
const getInner = (id) => {
  return String.fromCharCode(65 + id)
}

export default {
  props: {
    it: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      inner: ''
    }
  },
  methods: {
    handleGet () {
      this.inner = getInner(this.it.id)
    },
    handleClick () {
      this.$emit('del', this.it.id)
    }
  }
}
</script>

<style scoped>
.item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 30px;
  line-height: 30px;
}
</style>
