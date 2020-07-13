<template>
  <div class="keep-alive-demo">
    <keep-alive>
      <router-view :key="$route.fullPath" />
    </keep-alive>
  </div>
</template>

<script>

export default {
  name: 'KeepAliveDemo',
  mounted () {
    console.log(`${this.$options.name} mounted`)
    console.log(this.$route.fullPath)
  }
}
</script>
