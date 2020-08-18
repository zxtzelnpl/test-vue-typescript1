<template>
  <div class="grid">
    foo
    <div class="container1">
      <div class="item"><p>1</p></div>
      <div class="item"><p>2</p></div>
      <div class="item"><p>3</p></div>
    </div>
    bar
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: []
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
    // grid-template-columns: 100px 100px 100px;
    // grid-template-rows: 100px 100px 100px;

    width: 300px;
    height: 300px;
    // grid-template-columns: 33.33% 33.33% 33.33%;
    // grid-template-rows: 33.33% 33.33% 33.33%;

    grid-template-columns: repeat(3, 33.33%);
    grid-template-rows: repeat(3, 33.33%);

    .item {
      background: radial-gradient(cyan 0%, transparent 20%, salmon 40%, #fff 75%)
    }
  }
}
</style>
