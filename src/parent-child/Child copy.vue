<template>
  <a-modal
    title="Title"
    :visible="visible"
    @ok="hide"
    @cancel="hide"
  >
    <p>{{ record.id }}</p>
  </a-modal>
</template>

<script>
export default {
  name: 'child',
  props: {
    record: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      visible: false
    }
  },
  methods: {
    show () {
      this.visible = true
      console.log('child', this.record.id)
    },
    hide () {
      this.visible = false
    }
  }
}
</script>
