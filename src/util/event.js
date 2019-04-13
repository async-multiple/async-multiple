import Util from '../util'
export default class Event extends Util {
  constructor({ debug = false } = {}) {
    super()
    this._callbacks = {}
    this._isDebug = debug
  }

  on(name, callback, times) {
    if (!this.isType(name, '')) {
      this._errorManage('name expected a string!')
    }
    if (!this.isType(callback, () => { })) {
      this._errorManage('callback expected a function!')
    }
    if (!this.isType(times, undefined) && !this.isType(times, 1) && times <= 0) {
      this._errorManage('times expected a number(min 1)!')
    }
    this._debug(`Add listener for ${name}`)
    this._callbacks[name] = this._callbacks[name] || []
    this._callbacks[name].push(
      {
        fn: callback,
        times,
      }
    )
  }

  emit(name, ...params) {
    if (!this.isType(name, '')) {
      this._errorManage('name expected a string!')
    }
    if (!this._callbacks[name]) {
      return
    }
    this._callbacks[name].map((c, k) => {
      if (!this.isType(c, {})) return
      const { fn, times } = c
      fn(...params)
      if (!this.isType(times, undefined)) {
        const newItem = times > 1 ? { fn, times: times - 1 } : undefined
        this._callbacks[name].splice(k, 1, newItem)
      }
    })
  }

  remove(name) {
    if (!this.isType(name, '')) {
      this._errorManage('name expected a string!')
    }
    if (!this._callbacks[name]) {
      this._errorManage(`action named ${name} wasn't bind or removed!`)
    }
    delete this._callbacks[name]
  }

  once(name, ...params) {
    return this.on(name, params[0], 1)
  }

  _debug(message) {
    if (!this._isDebug) return
    if (!message) return
    if (!this.isType(message, '')) message = message.toString()
    console.log(`[event MESSAGE]: ${message}`)
  }
  
  _errorManage(message = 'unexpected error!') {
    if (!this.isType(message, '')) message = message.toString()
    throw new Error(`[event ERROR]: ${message}`)
  }
}
