

const { EventEmitter } = require('events')
const myEmitter = new EventEmitter();
// listener
myEmitter.on('greeting', () => {
    console.log('Welcome to my appliction')
})
myEmitter.on('greeting', (name) => {
    console.log(`Hello ${name}`)
})
// emitter
myEmitter.emit('greeting', 'Ahmed')