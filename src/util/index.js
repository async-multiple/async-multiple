export default class Util {
  whatType(obj) {
    return Object.prototype.toString.call(obj)
  }

  shuffle(arr) {
    return arr.map(i => ({ v: i, r: Math.random() })).sort((a, b) => a.r - b.r).map(item => item.v)
  }

  assign(...params) {
    return Object.assign(...params)
  }

  isType(...objs) {
    return objs.map(item => this.whatType(item) === this.whatType(objs[0])).filter(item => !item).length === 0
  }

  isPromise(fn) {
    return !!(fn.then && this.isType(fn, fn.then, () => { }))
  }

  makePromise(obj) {
    return this.isPromise(obj) ? obj : Promise.resolve(obj)
  }

  arrayToObject(list) {
    if (!this.isType(list, [])) throw new Error('[arrayToObject error]: expect a array!')
    const obj = {}
    list.map((item, key) => {
      obj[key] = item
    })
    return obj
  }

  sleep(time) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(`[Sleep]: ${time}ms`), time)
    })
  }

  removeUndefined(obj) {
    if (!this.isType(obj, {})) {
      throw new Error(`[removeUndefined message]: obj expect a ${this.whatType({})}`)
    }
    for (let i in obj) {
      if (this.isType(obj[i], undefined)) delete obj[i]
    }
    return obj
  }

  randomString(L = 8) {
    let s = ''
    let randomchar = () => {
      var n = Math.floor(Math.random() * 62)
      if (n < 10) return n // 1-10
      if (n < 36) return String.fromCharCode(n + 55) // A-Z
      return String.fromCharCode(n + 61) // a-z
    }
    while (s.length < L) s += randomchar()
    return s
  }

  randomNumber(s, e, isPrase = true) {
    if (!this.isType(s, e, 1)) {
      throw new Error(`[randomNumber message]: obj expect a ${this.whatType(1)}`)
    }
    if (s > e) {
      throw new Error(`[randomNumber message]: start number big than end!`)
    }
    const num = Math.random() * (e - s) + s
    return isPrase ? parseInt(num) : num
  }
}
