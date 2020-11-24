<script>
import Child from './Child'
export default {
  name: 'father',
  components: {
    Child
  },
  data () {
    return {
      record: {
        id: {
          number: 0
        }
      }
    }
  },
  methods: {
    handleShow () {
      // 父组件改变之后，子组件并未来得及更新，父组件已经指向新的地址了，但是子组件指向的还是原来的
      // console.log(this.record === this.$refs.child.$props.record)
      // this.record = { id: this.record.id + 1 }
      // this.record.id = this.record.id + 1
      this.record = { id: { number: this.record.number + 1 } }
      // console.log(this.record === this.$refs.child.$props.record)
      // console.log('father', this.record.id)
      // console.log('child', this.$refs.child.$props.record.id)
      // this.$refs.child.show()
    }
  },
  mounted () {
    console.log('#father# mounted start')
    // console.log(this.record)
    // console.log(this.$refs.child.$props)
    // 1. 父组件的record和子组件的record 是一样的，并没有副本之说
    // console.log(this.record === this.$refs.child.$props.record)
  },
  render () {
    console.log('#father# render start')
    // console.log('father', this.record.id)
    // console.log('child', this.$refs.child && this.$refs.child.$props.record.id)
    console.log('#father# render end')
    return <div class="father">
      <button onClick={this.handleShow}>show</button>
      <child ref="child" record={this.record} />
    </div>
  }
}
//
</script>
