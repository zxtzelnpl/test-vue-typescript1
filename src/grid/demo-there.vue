<template>
  <div class="grid">
    foo
    <div class="container1">
      <div v-for="(item, index) in items" :class="['item', `item-${index}`]" :style="item.style" :key="index"><p>{{index}}</p></div>
    </div>
    bar
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        { style: 'background: red' },
        { style: 'background: orange' },
        { style: 'background: green' },
        { style: 'background: blue' },
        { style: 'background: blueviolet' },
        { style: 'background: blanchedalmond' },
        { style: 'background: darkgray' },
        { style: 'background: peru' },
        { style: 'background: indianred' }
      ]
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.grid {
  p {
    margin: 0;
    padding: 0;
  }

  .container1 {
    display: grid;
    column-gap: 1px;
    row-gap: 1px;
    background: #ccc;
    // grid-template-columns: 100px 100px 100px;
    // grid-template-rows: 100px 100px 100px;
    width: 500px;
    height: 500px;
    grid-template-columns: 100px [abc] 100px 100px;
    grid-template-rows: 100px 100px 100px;
    grid-auto-rows: 50px;
    // grid-template-columns: repeat(auto-fill, 100px);
    // grid-template-rows: repeat(auto-fill, 100px);
    grid-template-areas:'a b c'
                        'd e f'
                        'g h i';

    .item {
      // display: flex;
      // align-items: center;
      // justify-content: center;
      font-size: 20px;
      &-0{
        grid-column-start: a-start;
        grid-column-end: e-end;
        grid-row-start: a-start;
        grid-row-end: e-end;
      }
      &-1{
        grid-column-start: e-start;
        grid-column-end: i-end;
        grid-row-start: e-start;
        grid-row-end: i-end;
      }
    }
  }
}
</style>
