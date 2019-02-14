import { map } from '../src/index.js'
const sleep = time => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`[Sleep]: ${time}ms`), time)
  })
}
map({
  task: [0, 1, 2, 3, 4],
  handle: async (item, step, cancelTask) => {
    await sleep(1000)
    if (item === 3) cancelTask()
    return Promise.resolve(item * item)
  },
  randomStep: false,
  handleStart: ({ step, input, isRetry, cancelTask }) => {
    console.log(`begin handle at step ${step}, input is ${input} ${isRetry ? '[RETRY]' : ''}`)
  },
  handleEnd: ({ step, input, output, error, isRetry }) => {
    console.log(`end handle at step ${step}, input is ${input}, output is ${output}, status: ${error ? 'error' : 'success'}`)
  },
  stepBettwen: 10,
  stepTimeout: 3000,
  // maxSuccessCount: 3,
})
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  })
