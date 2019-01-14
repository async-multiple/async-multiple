export default {
  whatType: (obj) => Object.prototype.toString.call(obj),
  shuffle: arr => arr.map(i => ({v: i, r: Math.random()})).sort((a, b) => a.r - b.r).map(item => item.v),
  assign: (obj1, obj2) => Object.assign(obj1, obj2),
  isType(...objs) {
    return objs.map(item => this.whatType(item) === this.whatType(objs[0])).filter(item => !item).length === 0
  },
  isPromise(fn) {
    return !!(fn.then && this.isType(fn, fn.then, () => {}))
  },
  makePromise(obj) {
    return this.isPromise(obj) ? obj : Promise.resolve(obj)
  },
  arrayToObject(list) {
    if (!this.isType(list, [])) throw new Error('[arrayToObject error]: expect a array!')
    const obj = {}
    list.map((item, key) => {
      obj[key] = item
    })
    return obj
  },
  sleep(time) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(`[Sleep]: ${time}ms`), time)
    })
  },
}