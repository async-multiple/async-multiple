import { map } from '../src/index.js'
const sleep = time => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`[Sleep]: ${time}ms`), time)
  })
}
map({
  task: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]],
  handle: async item => {
    await sleep(1000)
    await map({
      task: item,
      handle: async item => {
        return Promise.resolve(item * item)
      },
      randomStep: false,
      handleStart: ({ step, input, isRetry }) => {
        console.log(`begin handle at step ${step}, input is ${input} ${isRetry ? '[RETRY]' : ''}`)
      },
      handleEnd: ({ step, input, output, error, isRetry }) => {
        console.log(`end handle at step ${step}, input is ${input}, output is ${output}, status: ${error ? 'error' : 'success'}`)
      },
      stepBettwen: 1000,
    })
    return Promise.resolve(true)
  },
  randomStep: false,
  handleStart: ({ step, input, isRetry }) => {
    console.log(`begin handle at step ${step}, input is ${input} ${isRetry ? '[RETRY]' : ''}`)
  },
  handleEnd: ({ step, input, output, error, isRetry }) => {
    console.log(`end handle at step ${step}, input is ${input}, output is ${output}, status: ${error ? 'error' : 'success'}`)
  },
  stepBettwen: 2000,
  maxCall: 2,
})
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  })
