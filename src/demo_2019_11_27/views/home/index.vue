<template>
  <div class="home">
    <div>Home Component</div>
    <div>
      This is home's user info;
      <span>
        {{JSON.stringify(user)}}
      </span>
    </div>
    <DiscountInfo
      msg="Welcome to Your Vue.js App"
      :user="user"
    />
  </div>
</template>

<script>
import DiscountInfo from './components/discount-info.vue'

export default {
  name: 'home',
  components: {
    DiscountInfo
  },
  // data () {
  //   return {
  //     user: {
  //       id: null,
  //       name: null,
  //       age: null
  //     }
  //   }
  // },
  // mounted () {
  //   this.user = {
  //     id: 1,
  //     name: 'name1',
  //     age: 1
  //   }
  // }
  computed: {
    user () {
      return this.$store.state.user.select
    }
  },
  mounted () {
    setTimeout(() => {
      this.$store.dispatch('user/init')
    }, 5000)
  }
}
</script>
