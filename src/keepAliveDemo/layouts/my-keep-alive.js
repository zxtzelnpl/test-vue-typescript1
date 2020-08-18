function getComponentName (opts) {
  console.log(opts)
  return opts && (opts.Ctor.options.name || opts.tag)
}

export default {
  name: 'my-keep-alive',
  abstract: true,
  render () {
    const slot = this.$slots.default
    const vnode = slot[0]
    const componentOptions = vnode.componentOptions
    const name = getComponentName(componentOptions)
    const key = vnode.key == null
      ? componentOptions.Ctor.cid + (componentOptions.tag ? `::${componentOptions.tag}` : '')
      : vnode.key
    // console.log(`componentOptions.Ctor.cid:${componentOptions.Ctor.cid}`)
    // console.log(`key:${key}`)
    // console.log(`name:${name}`)
    console.log(`slot[0].componentOptions.Ctor.cid:${slot[0].componentOptions.Ctor.cid}`)
    console.log(`slot[1].componentOptions.Ctor.cid:${slot[1].componentOptions.Ctor.cid}`)

    return (
      vnode || (slot && slot[0])
    )
  }
}
