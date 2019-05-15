import { Map } from '../src/index.js'
const hander = new Map({
  task: [1, 2, 3, 4, 5, 6],
  handle: async (item, step, cancelTask, stepKey) => {
    console.log(item)
    // if (item === 3) cancelTask()
    return item
  },
  stepBettwen: 1000,
  maxCall: 1,
  showProgress: true,
  alias: 'loop task',
  // randomStep: true,
  debug: true,
})
hander.start().then(
  s => {
    console.log(s)
  }
)

setTimeout(() => {
  hander.cancelTask().then(() => {
    console.log('stop')
  })
}, 3000)
