import Event from '../src/util/event.js'
const eventBus = new Event({ debug: true })
eventBus.once('action1', (params) => {
  console.log('action1 called! fn 1', params)
})
eventBus.on('action1', (params) => {
  console.log('action1 called! fn 2', params)
}, 5)
setInterval(() => {
  eventBus.emit('action1', '4123123')
}, 1000)
