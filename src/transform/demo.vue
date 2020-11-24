<template>
  <div class="test">
    <p></p>
    <p></p>
    <p></p>
    <p></p>

    <p></p>
    <p></p>
    <p></p>
    <p></p>

    <p></p>
    <p></p>
    <p></p>
    <p></p>

    <p></p>
    <p></p>
    <p></p>
    <p></p>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.test {
  display: grid;
  width: 403px;
  height: 403px;
  border:1px solid #ddd;
  grid-row-gap: 1px;
  grid-column-gap: 1px;
  grid-template-columns: repeat(4, 100px);
  grid-template-rows: repeat(4, 100px);
  background: #ddd;
  transform-origin: top left;
  //  a  c  e
  //  b  d  f
  //                a  b  c  d  e  f
  transform: matrix(1, 0, 0, 1, 0, 0);
  > p {
    margin: 0;
    padding: 0;
    background: #fff;
  }
}
</style>
