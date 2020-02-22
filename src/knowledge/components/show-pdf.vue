<template>
  <div class="show-pdf">
    <pdf
      v-for="i in numPages"
      :key="i"
      :src="src"
      :page="i"
      style="display: inline-block; width: 25%"
    />
  </div>
</template>

<script>
import pdf from 'vue-pdf'
var loadingTask = pdf.createLoadingTask('./test.pdf')

export default {
  name: 'show-pdf',
  components: {
    pdf
  },
  data () {
    return {
      src: loadingTask,
      numPages: undefined
    }
  },
  mounted () {
    this.src.then(pdf => {
      this.numPages = pdf.numPages
    })
  }
}
</script>
