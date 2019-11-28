<template>
  <div class="home">
    <div>Home Component</div>
    <div>
      This is home's user info;
      <span>
        {{JSON.stringify(user)}}
      </span>
    </div>
    <UserIdInArray v-for="user in list" :key="user.id" :user="user" />
    <!-- <UserId :user="user"/> -->
    <!-- <DiscountInfo
      msg="Welcome to Your Vue.js App"
      :user="user"
    /> -->

  </div>
</template>

<script>
// import DiscountInfo from './components/discount-info.vue'
// import UserId from './components/user-id'
import UserIdInArray from './components/user-id-in-array'

export default {
  name: 'home',
  components: {
    // DiscountInfo
    // UserId
    UserIdInArray
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
    list () {
      return this.$store.state.user.list
    },
    user () {
      return this.$store.state.user.select
    }
  },
  mounted () {
    setTimeout(() => {
      this.$store.dispatch('user/init')
    }, 5000)
    setTimeout(() => {
      this.$store.dispatch('user/changeLastOneInList')
    }, 10000)
  }
}
</script>
