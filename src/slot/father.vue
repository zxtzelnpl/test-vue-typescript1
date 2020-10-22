<template>
  <div>
    father
    <slot :fatherName="fatherName" name="before"></slot>
    <slot :fatherName="fatherName"></slot>
    <slot :fatherName="fatherName" name="after"></slot>
  </div>
</template>

<script>
export default {
  name: 'father-vue',
  data () {
    return {
      fatherName: '夸父'
    }
  },
  mounted () {
    console.log(this)
  }
}
</script>
