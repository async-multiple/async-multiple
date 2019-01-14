import { each } from '../index.js'
const dot = item => dot * dot
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
      return Promise.reject('not 4')
    },
    async () => {
      await sleep(500)
      return Promise.resolve(5)
    },
  ],
  handerStart: (step) => {
    console.log(`begin hander at step ${step}`)
  },
  handerEnd: (step, res) => {
    console.log(`end hander at step ${step}, answer is ${res}`)
  },
  randomStep: true,
})
.then(res => {
  console.log(res)
})