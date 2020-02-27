<script>
import Child from './Child'
export default {
  name: 'PropsAndOn',
  data () {
    return {
      name: '',
      age: '0'
    }
  },
  methods: {
    nameChange (e) {
      this.name = e.target.value
    },
    ageChange (e) {
      this.age = e.target.value
    },
    reset () {
      this.name = ''
      this.age = ''
    }
  },
  render () {
    const { name, age } = this
    return (
      <div class="props-and-on">
        <div>Slot Component</div>
        <p><span>name：</span> <input type="text" value={name} onChange={this.nameChange} /></p>
        <p><span>name：</span> <input type="text" value={age} onChange={this.ageChange} /></p>
        <Child
          props={
            {
              name: name,
              age: age
            }
          }
          on = {
            {
              reset: this.reset
            }
          }
        />
      </div>
    )
  }
}
</script>
