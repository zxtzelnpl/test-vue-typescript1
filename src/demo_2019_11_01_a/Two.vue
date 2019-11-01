<template>
  <div class="two">
    Two
    <input type="text" v-model="value">
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'two',
  data () {
    let children = []
    for (let i = 0; i < 10000; i++) {
      children.push({
        name: 'childName',
        age: 10,
        grandChild: {
          name: 'grandChild',
          age: 5
        }
      })
    }

    return {
      value: '',
      children: children
    }
  }
})
</script>
