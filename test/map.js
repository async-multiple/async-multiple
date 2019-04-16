import { Map } from '../src/index.js'
const hander = new Map({
  task: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  handle: async (item, step, cancelTask, stepKey) => {
    console.log(item)
    // if (item === 3) cancelTask()
    return undefined
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
