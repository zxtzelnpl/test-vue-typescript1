const isObject = val => val !== null && typeof val === 'object'
const toProxy = new WeakMap()
const toRaw = new WeakMap()
const effectStack = []
const targetMap = new WeakMap() // 映射关系表，结构大致如下

const effect = (fn) => {
  const rxEffect = function () {
    // 1.捕获可能的异常
    try {
      // 2 .入栈，用于后续依赖手机
      effectStack.push(rxEffect)
      // 3. 运行fn，触发依赖手机
      return fn()
    } catch (error) {

    } finally {
      effectStack.pop()
    }
  }
  // 默认执行一次响应函数
  rxEffect()
  // 返回响应函数
  return rxEffect
}

const track = (target, key) => {
  const effect = effectStack[effectStack.length - 1]
  if (effect) {
    // 获取target对应的依赖表
    let depsMap = targetMap.get(target)
    if (!depsMap) {
      depsMap = new Map()
      targetMap.set(target, depsMap)
    }
    // 获取key对应的响应函数集
    let deps = depsMap.get(key)
    if (!deps) {
      deps = new Set()
      depsMap.set(key, deps)
    }
    // 将响应式函数加入到对应的集合
    if (!deps.has(effect)) {
      deps.add(effect)
    }
  }
}

// 触发target.key对应响应函数
const trigger = (target, key) => {
  // 获取依赖表
  const depsMap = targetMap.get(target)
  if (depsMap) {
    const deps = depsMap.get(key)
    if (deps) {
      deps.forEach(effect => {
        effect()
      })
    }
  }
}

const reactive = (obj) => {
  if (!isObject(obj)) {
    return obj
  }

  if (toProxy.has(obj)) { return toProxy.get(obj) }
  if (toRaw.has(obj)) { return obj }

  // Proxy相当于在对象的外层加拦截
  // http://es6.ruanyifeng.com/#docs/proxy
  const observed = new Proxy(obj, {
    get (target, key, receiver) {
      // Reflect 用于执行对象的默认操作，更规范，更友好
      // Proxy和Object的方法Reflect都有对应
      // http://es6.ruanyifeng.com/#docs/reflect
      const res = Reflect.get(target, key, receiver)
      console.log(`获取${key}:${res}`)
      track(target, key)
      return reactive(res)
    },
    set (target, key, value, receiver) {
      const res = Reflect.set(target, key, value, receiver)
      console.log(`设置${key}:${value}`)
      trigger(target, key)
      return res
    },
    deleteProperty (target, key) {
      const res = Reflect.deleteProperty(target, key)
      console.log(`删除${key}:${res}`)
      return res
    }
  })

  toProxy.set(obj, observed)
  toRaw.set(observed, obj)

  return observed
}

const state = reactive({
  foo: 'foo',
  bar: { a: 1 },
  array: ['a', 'b']
})

effect(() => {
  console.log('我们获取了state.bar.a的值-start')
  document.body.innerHTML = state.foo
  console.log('我们获取了state.bar.a的值-end')
})

setTimeout(() => {
  state.foo = 'bbb'
}, 1000)
