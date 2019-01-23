import Event from '../src/util/event.js'
const eventBus = new Event()
eventBus.on('action1', (params) => {
  console.log('action1 called!', params)
})
setTimeout(() => {
  eventBus.emit('action1', '4123123')
}, 2000)
