<script>
import Father from './father.vue'
import Child from './child.vue'

export default {
  data () {
    return {
      default: (a, b, c) => {
        return (
          <div>
            123
            {JSON.stringify(a)}
            {JSON.stringify(b)}
            {JSON.stringify(c)}
          </div>
        )
      }
    }
  },
  components: {
    Father
    // Child
  },
  render () {
    return (
      <div>
        From render
        <Father
          {
          ...{
            scopedSlots: {
              default: this.default,
              before: this.default,
              after: Child
            }
          }
          }
        />
      </div>
    )
  }
}
</script>

<style lang="less" scoped>

</style>
