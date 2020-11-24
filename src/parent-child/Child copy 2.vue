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
      // this.visible = true
      console.log('#child# show', this.record.id)
    },
    hide () {
      this.visible = false
    }
  },
  render () {
    console.log('#child# render start')
    console.log('this.record.id', this.record.id)
    console.log('#child# render end')
    return <div>
      <h4>Child</h4>
      <p>{ JSON.stringify(this.record) }</p>
      <button onClick={this.hide}>hide</button>
    </div>
  }
}
</script>
