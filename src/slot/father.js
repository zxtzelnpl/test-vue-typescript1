function getComponentName (opts) {
  console.log(opts)
  return opts && (opts.Ctor.options.name || opts.tag)
}

export default {
  name: 'father',
  // abstract: true,
  data () {
    return {
      fatherName: '夸父'
    }
  },
  render () {
    console.log(this)
    // const vNode = slot[1]
    // const componentOptions = vNode.componentOptions
    // const name = getComponentName(componentOptions)
    // console.log(slot)
    // console.log(name)

    return (
      <div>
        father
        {this.$scopedSlots.before('first', 'second', 'third', 'forth', 'fifth')}
        {this.$scopedSlots.default({ fatherName: '2' })}
        {this.$scopedSlots.after('first', 'second', 'third', 'forth', 'fifth')}
      </div>
    )
  }
}
