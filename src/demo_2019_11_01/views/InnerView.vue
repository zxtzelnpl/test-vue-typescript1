<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <iframe id="myIframe" src="http://localhost:8080/#/" frameborder="0"></iframe>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'home',
  mounted () {
    let iframe = document.getElementById('myIframe')
    // if (iframe) {
    //   iframe.onload = function () {
    //     if (iframe === null) return
    //     let document = iframe.contentWindow.document // eslint-disable-line
    //     console.log(document)
    //     let nav = document.getElementById('nav')
    //     nav.style = 'color:red'
    //     let as = nav.querySelectorAll('a')
    //     console.log(as)
    //     as[1].click()
    //   }
    // }
  }
})
</script>
