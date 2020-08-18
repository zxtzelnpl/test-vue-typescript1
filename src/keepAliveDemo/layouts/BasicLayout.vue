<template>
  <keep-alive>
    <router-view :key="$route.fullPath" />
  </keep-alive>
</template>

<script>
// import MyKeepAlive from './my-keep-alive'
// import DemoOne from '../demo-one'

export default {
  name: 'BasicLayout'
  // components: {
  // MyKeepAlive
  // TagDemoOne: DemoOne
  // }
}
</script>
