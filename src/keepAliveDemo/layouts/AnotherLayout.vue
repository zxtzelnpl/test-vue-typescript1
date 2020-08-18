<template>
  <my-keep-alive>
    <!-- <router-view /> -->
    <demo-one />
    <demo-one />
  </my-keep-alive>
</template>

<script>
import MyKeepAlive from './my-keep-alive'
import DemoOne from '../demo-one'

export default {
  name: 'AnotherLayout',
  components: {
    MyKeepAlive,
    DemoOne
  }
}
</script>
