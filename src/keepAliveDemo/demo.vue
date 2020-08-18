<template>
  <div id="app">
    <p id="nav">
      <span v-for="menu in menus" :key="menu.name"><router-link :to="menu.path">{{menu.name}}</router-link> |</span>
    </p>
    <router-view />
  </div>
</template>

<script>
export default {
  data () {
    return {
      menus: [
        { name: 'demo1', path: '/keep-alive/one' },
        { name: 'demo2-1', path: '/keep-alive/two/1' },
        { name: 'demo2-2', path: '/keep-alive/two/2' },
        { name: 'demo2-3', path: '/keep-alive/two/3' },
        { name: 'demo2-4', path: '/keep-alive/two/4' },
        { name: 'demo2-5', path: '/keep-alive/two/5' },
        { name: 'demo3-1', path: '/keep-alive/three/1' },
        { name: 'demo3-2', path: '/keep-alive/three/2' },
        { name: 'demo3-3', path: '/keep-alive/three/3' },
        { name: 'demo3-4', path: '/keep-alive/three/4' },
        { name: 'demo3-5', path: '/keep-alive/three/5' },

        { name: 'another1', path: '/another/one' }
      ]
    }
  }
}
</script>
