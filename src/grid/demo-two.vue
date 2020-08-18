<template>
  <div class="grid">
    foo
    <div class="container1">
      <div v-for="(item, index) in items" class="item" :style="{background: '#fff'}" :key="index"><p>{{index}}</p></div>
    </div>
    bar
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        { style: "background: red" },
        { style: "background: orange" },
        { style: "background: green" },
        { style: "background: blue" },
        { style: "background: blueviolet" },
        { style: "background: blanchedalmond" },
        { style: "background: darkgray" },
        { style: "background: peru" },
        { style: "background: indianred" },
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
    display: inline-grid;
    column-gap: 1px;
    row-gap: 1px;
    background: #ccc;
    // grid-template-columns: 100px 100px 100px;
    // grid-template-rows: 100px 100px 100px;

    // width: 550px;
    width: 302px;
    height: 302px;
    border: 1px solid #ccc;
    // grid-template-columns: 33.33% 33.33% 33.33%;
    // grid-template-rows: 33.33% 33.33% 33.33%;

    // grid-template-columns: repeat(3, 33.33%);
    // grid-template-columns: repeat(2, 100px 20px 80px);
    // grid-template-columns: repeat(auto-fill, 100px);
    // grid-template-columns: 1fr 1fr;
    // grid-template-columns: 150px 3fr 1fr;
    // grid-template-columns: 1fr 1fr minmax(100px, 2fr);
    // grid-template-columns: 50px auto 50px;
    // grid-template-columns: [c0] 100px [c1] 100px [c2] 100px [c3];
    grid-template-columns: repeat(3, [col-start] 100px [col-end]);
    grid-template-rows: repeat(3, 100px);

    .item {
      line-height: 100px;
      text-align: center;
      vertical-align: middle;
    }
  }
}
</style>
