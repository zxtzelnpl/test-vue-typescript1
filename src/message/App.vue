<template>
  <div class="app">
    <child-one />
    <child-two />
  </div>
</template>

<script>
import ChildOne from './ChildOne'
import ChildTwo from './ChildTwo'

export default {
  name: 'extend-demo',
  components: {
    ChildOne,
    ChildTwo
  }
}
</script>
