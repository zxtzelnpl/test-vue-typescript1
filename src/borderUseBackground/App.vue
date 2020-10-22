<template>
  <div id="app">
    borderUseBackground
    <div class="box one"></div>
    <div class="box two"></div>
    <div class="box three"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menus
    }
  }
}
</script>

<style>
.box {
  margin: 5px;
  width: 100px;
  height: 100px;
}
.one {
  background-image:linear-gradient(to right,#000 10%, #fff 50%, #000 90%);
  background-size:1px 100%;
  background-repeat: no-repeat;
}
.two {
  background: linear-gradient(#dadada, #dadada) bottom,
    linear-gradient(#dadada, #dadada) top;
  background-size: 100% 1px;
  background-repeat: no-repeat;
}
.three {
  background: linear-gradient(#dadada, #dadada) right,
    linear-gradient(#dadada, #dadada) left;
  background-size: 1px 100%;
  background-repeat: no-repeat;
}
</style>
