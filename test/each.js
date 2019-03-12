import { each } from '../src/index.js'
const sleep = time => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`[Sleep]: ${time}ms`), time)
  })
}

each({
  task: [
    async () => {
      await sleep(500)
      return Promise.resolve(1)
    },
    async () => {
      await sleep(500)
      return Promise.resolve(2)
    },
    async () => {
      await sleep(500)
      return Promise.resolve(3)
    },
    async () => {
      await sleep(500)
      return Promise.reject(new Error('not 4'))
    },
    async () => {
      await sleep(500)
      return Promise.resolve(5)
    },
  ],
  handleStart: ({ step }) => {
    console.log(`begin handle at step ${step}`)
  },
  handleEnd: ({ step, output }) => {
    console.log(`end handle at step ${step}, answer is ${output}`)
  },
  randomStep: true,
  stepBettwen: [100, 200],
}).then(res => {
  console.log(res)
})
