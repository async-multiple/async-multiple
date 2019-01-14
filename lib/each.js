import Lib from './index'
import util from '../util'
import to from 'await-to-js'
import _ from 'lodash'
export default class Each extends Lib {
  constructor(param) {
    super(param)
    this._defaultParams = {
      task: [],
      rejectOnError: false,
      handerStart: () => {},
      handerEnd: () => {},
      randomStep: false,
      stepBettwen: {
        type: [Array, Number],
        default: 0,
      },
      timeout: 12000,
      errorReplace: undefined,
    }
    this.setedParams = param
    this.formatType = 'each'
    util.assign(this, this._defaultParams)
  }

  checkParams() {
    if (util.isType(this.setedParams[0], {})) {
      util.assign(this, this.setedParams[0])
    } else if (util.isType(this.setedParams[0], [])) {
      this.task = this.setedParams[0]
      this.rejectOnError = this.setedParams[1] || false
      if (this.setedParams[2]) {
        if (util.isType(this.setedParams[2], {})) {
          util.assign(this, this.setedParams[2])
        } else {
          return this.errorManage('option expect to a object, please check!')
        }
      }
    }
    for (let name in this._defaultParams) {
      const param = this._defaultParams[name]
      if (util.isType(param, undefined)) {
        continue
      }
      if (util.isType(param, {}) && util.isType(param.type, [])) {
        if (param.type.filter(item => item === this[name].constructor).length === 0) {
          const types = param.type.map(item => item.name)
          return this.errorManage(`${name} expect to a ${types} but get a ${util.whatType(this[name])}, please check!`)
          break
        }
      } else if (!util.isType(param, this[name])) {
        return this.errorManage(`${name} expect to a ${util.whatType(param)} but get a ${util.whatType(this[name])}, please check!`)
        break
      }
    }
  }

  init () {
    // check params
    const checkErr = this.checkParams()
    if (checkErr) return Promise.reject(checkErr)
    // init task
    this.initTask()
    // hander result
    return this.taskHander().then(response => {
      const all = _.orderBy(response, 'order', 'asc')
      const res = {}
      const answer = all.map(item => {
        res[this.formatType === 'map' ? item.input : item.order] = item.answer
        return item.answer
      })
      const success = answer.filter(item => !(item instanceof Error))
      const error = answer.filter(item => item instanceof Error)
      const keys = all.filter(item => !(item.answer instanceof Error)).map(item => this.formatType === 'map' ? item.input : item.order)
      return Promise.resolve({
        res,
        all,
        answer,
        success,
        error,
        keys,
        stat: {
          all: all.length,
          success: success.length,
          error: error.length,
        },
      })
    })
  }

  initTask() {
    const res = this.task.map((item, key) => ({
      order: key,
      hander: item,
    }))
    this.task = this.randomStep ? util.shuffle(res) : res
  }

  getStepBettwen() {
    return util.isType(this.stepBettwen, []) ? _.random(...this.stepBettwen.slice(0, 2)) : this.stepBettwen
  }

  errorManage(message = 'unexpected error!') {
    if (!util.isType(message, '')) message = message.toString()
    return new Error(`[async-multiple ERROR]: ${message}`)
  }

  getTaskError(err) {
    return this.errorReplace === undefined ? new Error(err) : this.errorReplace
  }

  taskHander(step = 0) {
    if (step > this.task.length - 1) return Promise.resolve([])
    const nextHander = (preRes, resolveFn, rejectFn) => this.taskHander(step + 1).then(
      nextRes => resolveFn(
        [{ ...this.task[step], answer: preRes}]
        .concat(
          nextRes
        )
      ),
      nextErr => {
        if (this.rejectOnError) {
          rejectFn(this.getTaskError(nextErr))
        } else {
          resolveFn(
            [{ ...this.task[step], answer: preRes }]
            .concat(
              this.getTaskError(nextErr)
            )
          )
        }
      }
    )
    return new Promise((resolve, reject) => {
      if (this.handerStart) this.handerStart.call(this, step)
      util.makePromise(this.task[step].hander(step)).then(
        res => {
          if (this.handerEnd) this.handerEnd.call(this, step, res)
          const sleep = this.getStepBettwen()
          console.log('sleep', sleep)
          util.sleep(sleep).then(() => {
            nextHander.call(this, res, resolve, reject)
          })
        },
        err => {
          if (this.handerEnd) this.handerEnd.call(this, step, new Error(err))
          if (this.rejectOnError) {
            reject(this.getTaskError(err))
          } else {
            util.sleep(this.getStepBettwen()).then(() => {
              nextHander.call(this, this.getTaskError(err), resolve, reject)
            })
          }
        },
      )
    })
  }
}