<script>
export default {
  name: 'child',
  props: {
    record: {
      type: Object,
      default: () => ({})
    }
  },
  render () {
    // console.log('#child# render start')
    // console.log('this.record.id', this.record.id)
    // console.log('#child# render end')
    return <div>
      Child
    </div>
  }
}
// <p>{ JSON.stringify(this.record) }</p>
</script>
