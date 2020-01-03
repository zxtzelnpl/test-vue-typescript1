<template>
  <div class="dep-test-one">
    <div v-if="root">
      <item :item="root" />
    </div>
    <div class="buttons">
      <button @click="add">增加一个list</button>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import List from './list'
import Item from './item'

Vue.component('list', List)
Vue.component('item', Item)

export default {
  name: 'dep-test-one',
  methods: {
    add () {
      this.$store.dispatch('depTestOne/add')
    }
  },
  computed: {
    root () {
      return this.$store.state.depTestOne.root
    }
  }
}
</script>
