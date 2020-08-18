function getComponentName (opts) {
  console.log(opts)
  return opts && (opts.Ctor.options.name || opts.tag)
}

export default {
  name: 'father',
  abstract: true,
  render () {
    const slot = this.$slots.default
    const vNode = slot[1]
    const componentOptions = vNode.componentOptions
    const name = getComponentName(componentOptions)
    console.log(slot)
    console.log(name)

    return (
      <div>
        father
      </div>
    )
  }
}
