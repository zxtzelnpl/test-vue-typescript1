const req = require.context('./svgs', false, /\.svg$/)
req.keys().forEach(req)

// console.dir(req)
// console.log(req.keys)
// console.log(req.keys())
// console.log(req.id)

// const cache = []

// req.keys().forEach(key => {
//   cache[key] = req(key)
// })

// console.log(cache)
// console.log(cache.length)
