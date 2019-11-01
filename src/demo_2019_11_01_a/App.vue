<template>
  <div id="app">
    <div id="nav" class="nav">
      <button @click="show(1)">One</button>
      <button @click="show(2)">Two</button>
      <button @click="show(3)">Three</button>
    </div>
    <keep-alive>
      <component v-bind:is="currentTabComponent"></component>
    </keep-alive>
  </div>
</template>

<script lang="ts">
import Vue, { VNode } from 'vue'
import One from './One.vue'
import Two from './Two.vue'
import Three from './Three.vue'

const getComponent = (page: number) => {
  switch (page) {
    case 1:
      return One
    case 2:
      return Two
    case 3:
      return Three
    default:
      return One
  }
}

export default Vue.extend({
  components: {
    One, Two, Three
  },
  data () {
    return {
      page: 1,
      currentTabComponent: One,
      child: {
        name: 'childName',
        age: 10,
        grandChild: {
          name: 'grandChild',
          age: 5
        }
      }
    }
  },
  methods: {
    show (_page: number) {
      this.page = _page
      this.currentTabComponent = getComponent(_page)
    }
  }
})
</script>

<style lang="scss">
  .nav {
    position: fixed;
    top: 100px;
  }
</style>
