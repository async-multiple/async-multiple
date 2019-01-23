import Util from '../util'
import Event from '../util/event'
export default class Lib extends Util {
  constructor(param) {
    super(param)
    this.event = new Event()
  }

  _errorManage(message = 'unexpected error!') {
    if (!this.isType(message, '')) message = message.toString()
    return new Error(`[async-multiple ERROR]: ${message}`)
  }

  _debug(message) {
    if (!message) return
    if (!this.isType(message, '')) message = message.toString()
    console.log(`[async-multiple MESSAGE]: ${message}`)
  }
}
