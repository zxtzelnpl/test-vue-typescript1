<template>
  <div class="dep-test-one-item">
    <span>id: {{item.id}}</span>
    <span :style="style">这里显示颜色的改变</span>
    <button @click="change">change</button>

    <div v-if="hasChildren">
      <list :list="item.children" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'dep-test-one-item',
  props: {
    index: Number,
    item: Object
  },
  methods: {
    change () {
      this.$store.dispatch('depTestOne/change', {
        id: this.item.id
      })
    }
  },
  computed: {
    hasChildren () {
      const { children } = this.item
      return (Array.isArray(children) && children.length > 0)
    },
    style () {
      if (this.item.flag) {
        return {
          color: 'red'
        }
      } else {
        return {
          color: 'green'
        }
      }
    }
  }
}
</script>

<style lang="scss">
.red {
  color: red;
}

.green {
  color: green;
}
</style>
