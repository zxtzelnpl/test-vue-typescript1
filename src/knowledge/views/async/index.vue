<template>
  <div class="async">
    <div>Async Component</div>
    <div id="async-a">{{a}}</div>
  </div>
</template>

<script>
// 5679483
export default {
  name: 'async',
  data () {
    return { a: 1 }
  },
  methods: {
    change () {
      this.a = 2
      // console.log('********')
      // console.log(document.getElementById('async-a').innerHTML)
      // console.log('********')
    }
  },
  beforeCreate () { console.log(this) },
  mounted () {
    setTimeout(() => {
      console.log(3)
    }, 0)
    this.$nextTick(() => {
      console.log(4)
      console.log('********')
      console.log(document.getElementById('async-a').innerHTML)
      console.log('********')
    })
    console.log(5)
    new Promise(function (resolve) {
      console.log(6)
      resolve()
      console.log(7)
    }).then(function () {
      console.log(8)
    })
    this.change()
  },
  watch: {
    a () {
      console.log(9)
      console.log('********')
      console.log(document.getElementById('async-a').innerHTML)
      console.log('********')
    }
  }
}
</script>
