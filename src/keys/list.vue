<template>
  <div class="list">
    <ul>
      <item v-for="it in items" :key="it.id" :it="it" @del="handleDelete" />
    </ul>
    <button @click="handleClick">Add+</button>
    <button @click="handleReverse">Reverse</button>
  </div>
</template>

<script>
// 1. 有key，如果k相同，则dom会保留原来的dom，顺序改变也会移动原来的dom
// 2. 有key，如果k不同，则dom不会保留原来的dom
// 3. 没有key，则数据改变直接就是就地更新, 则dom会保留原来的dom
import Item from './item'

let index = 0
export default {
  components: {
    Item
  },
  data () {
    return {
      items: []
    }
  },
  methods: {
    handleClick () {
      this.items.push({
        id: index++
      })
    },
    handleDelete (id) {
      const index = this.items.findIndex(item => (item.id === id))
      this.items.splice(index, 1)
    },
    handleReverse () {
      this.items.reverse()
    }
  }
}
</script>
