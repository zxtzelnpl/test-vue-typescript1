<template>
  <div>
    <div>
      LEVEL-ONE
      LEVEL-ONE
      <button @click="handleClick">点击</button>
      <button @click="handleClickAsync">Promise点击</button>
      <button @click="handleClickError">Promise处理</button>
    </div>
  </div>
</template>

<script>
import wait from './wait'

let me = null
export default {
  name: 'level-one',
  errorCaptured (err, vm, info) {
    console.info('######level-one-start######')
    console.log(err)
    console.log(vm)
    console.log(imfo)
    console.info('######level-one-end######')
    return false
  },
  computed: {
    // caculateD () {
    //   return c
    // }
  },
  methods: {
    handleClick () {
      b()
    },
    handleClickAsync () {
      me = wait(false)
        .then((str) => {
          console.log(str)
        })
    },
    handleClickError () {
      if (me) {
        me.catch(err => {
          console.log(err)
        })
      }
    }
  },
  renderError (h, err) {
    return h('pre', { style: { color: 'red' } }, err.stack)
  }
}

// Promise.resolve(handleClickAsync()).then(res => {
//
// })
</script>

<style lang="less" scoped>

</style>
