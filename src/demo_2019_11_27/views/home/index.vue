<template>
  <div class="home">
    <div>Home Component</div>
    <div>
      This is home's user info;
      <span>
        {{JSON.stringify(user)}}
      </span>
    </div>
    <UserId :user="user"/>
    <!-- <DiscountInfo
      msg="Welcome to Your Vue.js App"
      :user="user"
    /> -->

  </div>
</template>

<script>
// import DiscountInfo from './components/discount-info.vue'
import UserId from './components/user-id'

export default {
  name: 'home',
  components: {
    // DiscountInfo
    UserId
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
      this.$store.dispatch('user/change', 5)
    }, 5000)
  }
}
</script>
