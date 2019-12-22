<template>
  <div class="async">
    <div>Slot Component</div>
    <List :items="items">
      <template v-slot:default="slotProps">
        <ColorText :item="slotProps.item" />
      </template>
    </List>
  </div>
</template>

<script>
// import Child from './child'
import ColorText from './colorText'
import List from './list'
export default {
  components: {
    ColorText,
    List
  },
  data () {
    return {
      items: [
        {
          id: 1,
          name: 'zxt1'
        },
        {
          id: 2,
          name: 'zxt2'
        },
        {
          id: 3,
          name: 'zxt3'
        }
      ]
    }
  }
}
</script>
