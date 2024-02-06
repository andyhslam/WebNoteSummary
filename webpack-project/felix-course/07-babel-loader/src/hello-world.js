function getString () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hello world!!!!')
    }, 2000)
  })
}

async function helloWorld () {
  const string = await getString()
  console.log('string', string)
}

export default helloWorld