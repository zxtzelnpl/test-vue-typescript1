<template>
  <div>
    <p> level-two:{{title}} <input :value="title" @input="e =>this.$emit('update:title', e.target.value)" />  </p>
    <p> level-two:{{content}} <input :value="content" @input="e =>this.$emit('update:content', e.target.value)" />  </p>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    content: { type: String, required: true }
  }
}
</script>
