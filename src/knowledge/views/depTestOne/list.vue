<template>
  <div class="dep-test-one-list">
    <item v-for="item in list" :key="item.id" :item="item"/>
  </div>
</template>

<script>
export default {
  name: 'dep-test-one-list',
  props: {
    list: Array
  }
}
</script>
