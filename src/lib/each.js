import Lib from './index'
import _ from 'lodash'
import { PENDING, RESOLVE, REJECT } from '../constants'
export default class Each extends Lib {
  constructor(...param) {
    super()
    this._defaultParams = {
      task: [],
      rejectOnError: false,
      handleStart: () => { },
      handleEnd: () => { },
      randomStep: false,
      stepBettwen: {
        type: [Array, Number],
        default: 0,
        min: 0,
      },
      stepTimeout: {
        type: Number,
        default: undefined,
        min: 0,
      },
      errorReplace: undefined,
      errorRetry: 0,
      maxSuccessCount: {
        type: Number,
        default: undefined,
      },
      showProgress: {
        type: Boolean,
        default: false,
      },
      alias: {
        type: String,
        default: `TASK_${this.randomString(8)}`,
      },
    }
    this._formatType = 'each'
    this._stopAtNextTrick = false
    this._actionName = this.randomString(8)
    // check params
    this._checkParams(param)
    // init task
    this._initTask()
    // init hooks
    this._initHooks()
  }

  start() {
    // handle result
    return this._beginTask().then(response => {
      const allArray = _.orderBy(response, 'order', 'asc')
      const allObject = {}
      const outputArray = allArray.map(item => {
        allObject[this._formatType === 'map' ? item.input : item.order] = item.output
        return item.output
      })
      return Promise.resolve({
        response,
        allObject,
        allArray,
        outputArray,
        toObject: () => {
          return allObject
        },
        toArray: () => {
          return allArray
        },
      })
    })
  }

  cancelTask() {
    this._debug('Calling the cancelTask method, task will stop at next trick!')
    this._stopAtNextTrick = true
  }

  get _getTaskOutput() {
    if (!this.isType(this.errorReplace, undefined)) return this.errorReplace
    return null
  }

  _assign(THIS, ...params) {
    params = params.map(item => {
      if (!this.isType(item, {})) return undefined
      const newObj = {}
      for (let key in item) {
        const value = item[key]
        if (this.isType(value, {})) {
          if (!THIS.hasOwnProperty(key)) newObj[key] = this.isType(value.default, () => { }) ? value.default() : value.default
        } else {
          newObj[key] = value
        }
      }
      return newObj
    })
    return this.assign(THIS, ...params)
  }

  _checkParams(param) {
    this._assign(this, this._defaultParams)
    if (this.isType(param[0], {})) {
      this.assign(this, param[0])
    } else if (this.isType(param[0], [])) {
      this.task = param[0]
      this.rejectOnError = param[1] || false
      if (param[2]) {
        if (this.isType(param[2], {})) {
          this.assign(this, param[2])
        } else {
          throw this._errorManage('option expect to a object, please check!')
        }
      }
    }
    for (let name in this._defaultParams) {
      const param = this._defaultParams[name]
      if (this.isType(param, undefined)) {
        continue
      }
      if (this.isType(param, {})) {
        if (param.hasOwnProperty('type') && !this.isType(this[name], undefined)) {
          param.type = this.isType(param.type, []) ? param.type : [param.type]
          if (param.type.filter(item => item === this[name].constructor).length === 0) {
            const types = param.type.map(item => item.name)
            throw this._errorManage(`${name} expect to a ${types} but get a ${this.whatType(this[name])}, please check!`)
          }
        } else {
          continue
        }
      } else if (!this.isType(param, this[name])) {
        throw this._errorManage(`${name} expect to a ${this.whatType(param)} but get a ${this.whatType(this[name])}, please check!`)
      }
    }
  }

  _initTask() {
    const res = this.task.map((item, key) => ({
      order: key,
      handle: item,
    }))
    this.task = this.randomStep ? this.shuffle(res) : res
  }

  _initHooks() {
    if (this.showProgress) {
      const progress = ({ step, all, progress }) => {
        console.log(`[ ${this.alias} ] all: ${all} complete: ${step + 1} progress: ${progress}`)
      }
      const oldHandleEnd = this.handleEnd
      this.handleEnd = (...params) => {
        oldHandleEnd.apply(this, params)
        progress.apply(this, params)
      }
    }
  }

  _getStepBettwen() {
    return this.isType(this.stepBettwen, []) ? _.random(...this.stepBettwen.slice(0, 2)) : this.stepBettwen
  }

  _errorManage(message = 'unexpected error!') {
    if (!this.isType(message, '')) message = message.toString()
    return new Error(`[async-multiple ERROR]: ${message}`)
  }

  _makeError(err) {
    if (err instanceof Error) return err
    if (err instanceof String) return new Error(err)
    return new Error(err.toString())
  }

  _beginTask() {
    let taskCalledNum = 0
    const result = []
    const stepHandle = (step, resolveFn, isRetry) => {
      // check if continue
      if (this._stopAtNextTrick) {
        resolveFn(result)
        return
      }
      // chech if enough success result
      if (this.maxSuccessCount && result.filter(item => !item.error).length >= this.maxSuccessCount) {
        this._debug('Enough success result, task will stop!')
        resolveFn(result)
        return
      }
      this.sleep(this._getStepBettwen()).then(() => {
        if (step < this.task.length) {
          this._callTaskHandle(step, isRetry)
        } else {
          resolveFn(result)
        }
      })
    }
    this._callTaskHandle()
    return new Promise((resolve, reject) => {
      // bind action
      this.event.on(this._actionName, ({ error, output, step }) => {
        if (error) {
          // if set errorRetry
          if (this.errorRetry > taskCalledNum) {
            taskCalledNum += 1
            stepHandle(step, resolve, true)
            return
          }
          error = this._makeError(error)
          if (this.rejectOnError) {
            return reject(error)
          }
        }
        taskCalledNum = 0
        result.push(this.removeUndefined({ ...this.task[step], output, error, handle: undefined }))
        stepHandle(step + 1, resolve)
      })
    })
  }

  _callTaskHandle(step = 0, isRetry = false) {
    if (step > this.task.length - 1 || step < 0) return Promise.reject(this._errorManage('step overflow!'))
    let status = PENDING
    let timer = null
    let allStep = this.task.length
    let progress = s => (100 * s / allStep).toFixed(2) + '%'
    if (this.handleStart) this.handleStart({ step, all: allStep, progress: progress(step), ...this.task[step], isRetry, cancelTask: this.cancelTask.bind(this) })
    const succcesCallback = output => {
      if (status !== PENDING) return
      status = RESOLVE
      if (timer) clearInterval(timer)
      const response = { ...this.task[step], all: allStep, progress: progress(step + 1), output, error: null, step, isRetry, cancelTask: this.cancelTask.bind(this) }
      if (this.handleEnd) this.handleEnd(response)
      this.event.emit(this._actionName, response)
    }
    const errorCallback = error => {
      if (status !== PENDING) return
      status = REJECT
      if (timer) clearInterval(timer)
      const response = { ...this.task[step], all: allStep, progress: progress(step + 1), output: this._getTaskOutput, error, step, isRetry }
      if (this.handleEnd) this.handleEnd(response)
      this.event.emit(this._actionName, response)
    }
    if (!this.isType(this.stepTimeout, undefined)) {
      timer = setTimeout(() => {
        errorCallback(this._makeError('timeout!'))
      }, this.stepTimeout)
    }
    this.makePromise(this.task[step].handle(this.task[step].input, step, this.cancelTask.bind(this))).then(succcesCallback, errorCallback)
  }
}
