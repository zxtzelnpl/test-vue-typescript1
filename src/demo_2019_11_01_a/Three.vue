<template>
  <div class="three">
    Three
    Three
    Three
    <input type="text" v-model="value">

     <div key="three">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nobis omnis magnam, aliquam voluptas iure autem ipsa repellendus sed a assumenda perspiciatis voluptatum animi id in quod? Consequatur, odio rem?1
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nobis omnis magnam, aliquam voluptas iure autem ipsa repellendus sed a assumenda perspiciatis voluptatum animi id in quod? Consequatur, odio rem?2
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nobis omnis magnam, aliquam voluptas iure autem ipsa repellendus sed a assumenda perspiciatis voluptatum animi id in quod? Consequatur, odio rem?3
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nobis omnis magnam, aliquam voluptas iure autem ipsa repellendus sed a assumenda perspiciatis voluptatum animi id in quod? Consequatur, odio rem?4
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nobis omnis magnam, aliquam voluptas iure autem ipsa repellendus sed a assumenda perspiciatis voluptatum animi id in quod? Consequatur, odio rem?5
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nobis omnis magnam, aliquam voluptas iure autem ipsa repellendus sed a assumenda perspiciatis voluptatum animi id in quod? Consequatur, odio rem?6
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nobis omnis magnam, aliquam voluptas iure autem ipsa repellendus sed a assumenda perspiciatis voluptatum animi id in quod? Consequatur, odio rem?7
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nobis omnis magnam, aliquam voluptas iure autem ipsa repellendus sed a assumenda perspiciatis voluptatum animi id in quod? Consequatur, odio rem?8
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nobis omnis magnam, aliquam voluptas iure autem ipsa repellendus sed a assumenda perspiciatis voluptatum animi id in quod? Consequatur, odio rem?9
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nobis omnis magnam, aliquam voluptas iure autem ipsa repellendus sed a assumenda perspiciatis voluptatum animi id in quod? Consequatur, odio rem?10
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nobis omnis magnam, aliquam voluptas iure autem ipsa repellendus sed a assumenda perspiciatis voluptatum animi id in quod? Consequatur, odio rem?11
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nobis omnis magnam, aliquam voluptas iure autem ipsa repellendus sed a assumenda perspiciatis voluptatum animi id in quod? Consequatur, odio rem?12
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nobis omnis magnam, aliquam voluptas iure autem ipsa repellendus sed a assumenda perspiciatis voluptatum animi id in quod? Consequatur, odio rem?13
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nobis omnis magnam, aliquam voluptas iure autem ipsa repellendus sed a assumenda perspiciatis voluptatum animi id in quod? Consequatur, odio rem?14
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nobis omnis magnam, aliquam voluptas iure autem ipsa repellendus sed a assumenda perspiciatis voluptatum animi id in quod? Consequatur, odio rem?15
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nobis omnis magnam, aliquam voluptas iure autem ipsa repellendus sed a assumenda perspiciatis voluptatum animi id in quod? Consequatur, odio rem?16
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nobis omnis magnam, aliquam voluptas iure autem ipsa repellendus sed a assumenda perspiciatis voluptatum animi id in quod? Consequatur, odio rem?17
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nobis omnis magnam, aliquam voluptas iure autem ipsa repellendus sed a assumenda perspiciatis voluptatum animi id in quod? Consequatur, odio rem?18
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nobis omnis magnam, aliquam voluptas iure autem ipsa repellendus sed a assumenda perspiciatis voluptatum animi id in quod? Consequatur, odio rem?19
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nobis omnis magnam, aliquam voluptas iure autem ipsa repellendus sed a assumenda perspiciatis voluptatum animi id in quod? Consequatur, odio rem?20
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nobis omnis magnam, aliquam voluptas iure autem ipsa repellendus sed a assumenda perspiciatis voluptatum animi id in quod? Consequatur, odio rem?21
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nobis omnis magnam, aliquam voluptas iure autem ipsa repellendus sed a assumenda perspiciatis voluptatum animi id in quod? Consequatur, odio rem?22
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nobis omnis magnam, aliquam voluptas iure autem ipsa repellendus sed a assumenda perspiciatis voluptatum animi id in quod? Consequatur, odio rem?23
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'three',
  data () {
    return {
      value: '',
      children: [{
        name: 'childName',
        age: 10,
        grandChild: {
          name: 'grandChild',
          age: 5
        }
      }]
    }
  }
})
</script>
