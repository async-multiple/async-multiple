import Util from '../util'
export default class Event extends Util {
  constructor(params) {
    super(params)
    this._callbacks = {}
  }
  on(name, callback) {
    if (!this.isType(name, '')) {
      this._errorManage('name expected a string!')
    }
    if (!this.isType(callback, () => { })) {
      this._errorManage('callback expected a function!')
    }
    this._debug(`Add listener for ${name}`)
    this._callbacks[name] = callback
  }
  emit(name, ...params) {
    if (!this.isType(name, '')) {
      this._errorManage('name expected a string!')
    }
    if (!this._callbacks[name]) {
      this._errorManage(`action named ${name} wasn't bind!`)
    }
    this._callbacks[name].apply(this, params)
  }
  remove(name) {
    if (!this.isType(name, '')) {
      this._errorManage('name expected a string!')
    }
    if (!this._callbacks[name]) {
      this._errorManage(`action named ${name} wasn't bind!`)
    }
    delete this._callbacks[name]
  }
  _debug(message) {
    if (!message) return
    if (!this.isType(message, '')) message = message.toString()
    console.log(`[event MESSAGE]: ${message}`)
  }
  _errorManage(message = 'unexpected error!') {
    if (!this.isType(message, '')) message = message.toString()
    throw new Error(`[event ERROR]: ${message}`)
  }
}
