<template>
  <div class="demo-one">
    <span>{{message}}</span>
    <button @click="reverse">改变</button>
    <Child :message="message" />
  </div>

</template>

<script lang="ts">
import Vue from 'vue'
import Child from './Child.vue' // @ is an alias to /src

export default Vue.extend({
  name: 'demo-one',
  components: {
    Child,
  },
  data () {
    return {
      message: '12345'
    }
  },
  updated () {
    console.log('*****demo-one updates*****');
    console.log(this);
    console.log('*****demo-one updates*****');
  },
  methods: {
    reverse () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})
</script>
