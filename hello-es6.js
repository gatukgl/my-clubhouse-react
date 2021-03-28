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
