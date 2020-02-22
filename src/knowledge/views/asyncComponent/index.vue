<template>
  <div class="async-component-demo">
    <h4>Async Component Demo</h4>
    <div v-if="show">

    </div>
    <button @click="changeShow">change</button>
  </div>
</template>

<script>
// import AsyncComponent from '../../components/async-component'
export default {
  components: {
    // AsyncComponent
  },
  data () {
    return {
      show: false
    }
  },
  methods: {
    changeShow () {
      this.show = !this.show
    }
  }
}
</script>
