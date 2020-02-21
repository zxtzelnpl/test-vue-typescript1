<template>
  <div class="props-and-on">
    <div>Slot Component</div>
    <p><span>name：</span> <input type="text" v-model="name"></p>
    <p><span>name：</span> <input type="nuumber" v-model="age"></p>
    <child
      :props="this.$data"
    />
  </div>
</template>

<script>
import Child from './Child'
export default {
  components: {
    Child
  },
  data () {
    return {
      name: '',
      age: 0
    }
  }
}
</script>
