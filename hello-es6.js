// const and let
const name = 'gatuk'
console.log('const name >', name)

let mutableName = ''
mutableName = 'gatuk'
console.log('let mutable name > ', mutableName)

if (mutableName === 'gatuk') {
  const name = 'someone'
  let mutableName = 'someone'
  console.log('inside if scope const name > ', name)
  console.log('inside if scope let mutable name > ', mutableName)
}
console.log('outside if scope const name > ', name)
console.log('outside if scope let mutable name > ', mutableName)

// Arrow function & template literal
// function say(name) {
//   const greetingMessage = 'Hello ' + name
//   console.log(greetingMessage)
// }
// say('Gatuk')

const say = (name) => {
  const greetingMessage = `Hello ${name}!`
  console.log(greetingMessage)
}
say('Gatuk')

// Destructing and assignment
// Array
const numbers = [1, 2, 3]
const [number1, number2, number3] = numbers
console.log('numbers >', number1, number2, number3)

// object
const user = {
  firstname: 'Sudarat',
  lastname: 'Chattanon',
}
const { firstname, lastname } = user
console.log('user > ', firstname, lastname)

// callback
function callApi(callback) {
  setTimeout(() => {
    callback('successfully after 1 sec')
  }, 1000)
}

callApi((text) => {
  console.log('callback text', text)
})

// promise
const callApiPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('successfully after 300 ms')
    }, 300)
  })
}
callApiPromise().then((text) => {
  console.log('promise text', text)
})

// async/await
const callApiAsync = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('async/await successfully after 500 ms')
    }, 300)
  })
}
const fetchData = async () => {
  const text = await callApiAsync()
  console.log(text)
}
fetchData()
