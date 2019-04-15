import { map } from '../src/index.js'

map({
  task: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  handle: async (item, step, cancelTask, stepKey) => {
    if (item === 3) cancelTask()
    return Promise.resolve(item)
  },
  stepBettwen: [100, 300],
  maxCall: 5,
  showProgress: true,
  alias: 'loop task',
  // randomStep: true,
  debug: true,
})
  .then(result => {
    console.log(result.toArray())
  })
