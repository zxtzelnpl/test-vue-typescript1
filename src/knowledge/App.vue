<template>
  <div id="app">
    <p id="nav">
      <span v-for="menu in menus" :key="menu.name"><router-link :to="menu.path">{{menu.name}}</router-link> |</span>
    </p>
    <router-view/>
  </div>
</template>

<<<<<<< HEAD
<style lang="scss">

</style>
=======
<script>
import { menus } from './router';
export default {
  data() {
    return {
      menus
    }
  }
}
</script>
>>>>>>> 70c38f96026b317816769fea836ff10cabbb131e
