import { Map } from '../src/index.js'
const hander = new Map({
  task: [],
  handle: async (item, step, cancelTask, stepKey) => {
    console.log(item)
    // if (item === 3) cancelTask()
    return item
  },
  stepBettwen: [100, 300],
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

// setInterval(() => {
//   console.log(hander.taskStatus)
// }, 1000)
