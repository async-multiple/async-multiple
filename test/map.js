import { map } from '../index.js'
const dot = item => dot * dot
const sleep = time => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`[Sleep]: ${time}ms`), time)
  })
}

map({
  task: [1, 2, 3, 4, 5],
  hander: async item => {
    await sleep(500)
    if (item === 3) return Promise.reject('not 3')
    return Promise.resolve(item * item)
  },
  randomStep: false,
  stepBettwen: [500, 2000],
  handerStart: (step) => {
    console.log(`begin hander at step ${step}`)
  },
  handerEnd: (step, res) => {
    console.log(`end hander at step ${step}, answer is ${res}`)
  },
  // errorReplace: [],
  // rejectOnError: true,
})
.then(res => {
  console.log(res)
})
.catch(err=> {
  console.log(err)
})