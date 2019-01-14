import util from '../util'
import to from 'await-to-js'
import _ from 'lodash'
export default class Lib {
  constructor() {}

  errorManage(message = 'unexpected error!') {
    if (!util.isType(message, '')) message = message.toString()
    return new Error(`[async-multiple ERROR]: ${message}`)
  }
}