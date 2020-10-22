import Vue from 'vue'
import App from './app.vue'

const set: Set<Promise<any>> = new Set()

// setInterval(() => {
//   console.log(`set.size:${set.size}`)
//   if (set.size > 0) {
//     for (const promise of set) {
//       console.log(promise)
//       promise.catch(err => {
//         console.log(err)
//       })
//     }
//   }
// }, 1500)

window.onerror = function (err) {
  console.log('%c######window.onerror start######', 'color:red')
  console.log(err)
  console.log('%c######window.onerror end######', 'color:red')
}

window.addEventListener('unhandledrejection', event => {
  console.log('%c###### unhandledrejection start######', 'color:yellow')
  console.warn(`UNHANDLED PROMISE REJECTION: ${event.reason}`)
  set.add(event.promise)
  console.log('%c###### unhandledrejection end######', 'color:yellow')
})

window.addEventListener('rejectionhandled', event => {
  console.log('%c###### rejectionhandled start######', 'color:yellow')
  console.warn(`Promise rejected; reason: : ${event.reason}`)
  set.delete(event.promise)
  console.log('%c###### rejectionhandled end######', 'color:yellow')
})

Vue.config.errorHandler = function (err, vm, info) {
  console.log('%c######errorHandler start######', 'color:red')
  console.log(err)
  console.log(vm)
  console.log(info)
  console.log('%c######errorHandler end######', 'color:red')
}

Vue.config.warnHandler = function (msg, vm, trace) {
  console.log('%c######warnHandler start######', 'color:yellow')
  console.log(msg)
  console.log(vm)
  console.log(trace)
  console.log('%c######warnHandler end######', 'color:yellow')
}

new Vue({
  render: h => h(App)
}).$mount('#app')
