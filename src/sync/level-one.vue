<template>
  <div>
    <p>level-one,doc.title:{{ doc.title }}</p>
    <p>level-one,doc.content:{{ doc.content }}</p>
    <level-two v-bind.sync="doc" />
    <level-two-a v-bind="doc" />
  </div>
</template>

<script>
import LevelTwo from './level-two'
import LevelTwoA from './level-two-a'
export default {
  components: {
    LevelTwo,
    LevelTwoA
  },
  data () {
    return {
      doc: {
        title: 'Doc Ttile',
        content: 'Doc Content'
      },
      pages: [
        1, 2, 3
      ]
    }
  }
}
</script>
