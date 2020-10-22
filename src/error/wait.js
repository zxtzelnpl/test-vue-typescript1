const wait = (flag) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (flag) {
        resolve('wait')
      } else {
        reject(new Error('wait'))
      }
    }, 1000)
  })
}

function test () {
  return wait(false).then(res => console.log(res))
}

export default wait
