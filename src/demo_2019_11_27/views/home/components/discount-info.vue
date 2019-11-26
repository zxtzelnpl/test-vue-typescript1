<template>
  <div class='discount-info'>
    <div>{{msg}}</div>
    <div v-if="visible">
      如果这里显示了，那么就是user --> visible --> discount-info
    </div>
  </div>
</template>

<script>
export default {
  name: 'discount-info',
  props: ['msg', 'user'],
  update () {
    console.log(this)
  },
  computed: {
    visible () {
      if (typeof this.user.id === 'number') {
        return true
      } else {
        return false
      }
    }
  }
}
</script>
