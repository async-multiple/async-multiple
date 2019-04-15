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
const task = [1, 2, 3, 4, 5]
map({
  task,
  handle: async (item) => {
    return Promise.resolve(item)
  },
  stepBettwen: [100, 1000],
  showProgress: true,
  alias: 'loop task',
  randomStep: true,
})
  .then(result => {
    console.log(result.toArray())
  })
