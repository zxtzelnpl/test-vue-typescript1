<template>
  <div class="async">
    <div>Slot Component List</div>
    <hr>
    <ul id="ul" @click="handleClick">
      <li v-for="(item, index) in items" :key="item.id">
        {{index}} <slot :item="item"></slot>
      </li>
    </ul>
  </div>
</template>

<script>
// import Grandchild from './grandchild';
export default {
  props: {
    items: Array
  },
  components: {
    // Grandchild
  },
  methods: {
    handleClick () {
      console.log('ul 123')
    }
  },
  mounted () {
    document.getElementById('ul').addEventListener('click', (e) => { console.log('ul 456'); console.log(e) })
  }
}
</script>
