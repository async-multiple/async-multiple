// import { Map } from '../src/index.js'
// const sleep = time => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(`[Sleep]: ${time}ms`), time)
//   })
// }
// const map = new Map({
//   task: [0, 1, 2, 3, 4],
//   handle: async (item, step, cancelTask) => {
//     if (item === 2) {
//       console.log(2, 'cancel')
//       map.cancelTask()
//     }
//     return Promise.resolve(item * item)
//   },
//   randomStep: false,
//   // handleStart: ({ step, input, isRetry, cancelTask }) => {
//   //   console.log(`begin handle at step ${step}, input is ${input} ${isRetry ? '[RETRY]' : ''}`)
//   // },
//   // handleEnd: ({ step, input, output, error, isRetry }) => {
//   //   console.log(`end handle at step ${step}, input is ${input}, output is ${output}, status: ${error ? 'error' : 'success'}`)
//   // },
//   stepBettwen: 10,
//   stepTimeout: 3000,
//   showProgress: true,
//   // maxSuccessCount: 3,
// })
// map
// .start()
// .then(res => {
//     console.log(res.toArray())
//   })
//   .catch(err => {
//     console.log(err)
//   })

import { map } from '../src/index.js'
// const task = [1, 2, 3, 4, 5]
map({
  task: {
    'a': 1,
    'b': 2,
    'c': 3,
    'd': 4,
  },
  handle: async (item, step, cancelTask, stepKey) => {
    // if (item === 3) cancelTask()
    console.log(stepKey)
    return Promise.resolve(item)
  },
  stepBettwen: [100, 1000],
  showProgress: true,
  alias: 'loop task',
  randomStep: true,
  debug: true,
})
  .then(result => {
    console.log(result.toArray())
  })
