const https = require('https')
const querystring = require('querystring')

let postData = querystring.stringify({
  userId: '8C2112A0C4D51C49E0532A000A1ECED8'
})
console.log(postData)

const options = {
  hostname: 'ehis-vitality-stg1.health.pingan.com',
  path: '/vitality/UserLogin/getJwtToken.run',
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    // 'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(postData)
  }
}

let req = https.request(options, res => {
  let dd = ''
  res.on('data', secCheck => {
    console.log('####')
    console.log(secCheck)
    console.log('####')
    dd += secCheck
  })

  res.on('end', () => {
    console.log(dd)
  })

  res.on('error', err => {
    reject(err)
  })
})

// 记得这两句鸭！！！！！！！！！！！！！！！！！！！！！！！

req.write(postData)

req.end()
