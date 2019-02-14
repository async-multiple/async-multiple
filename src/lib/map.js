import Each from './each'

export default class Map extends Each {
  _initTask() {
    const res = this.task.map((item, key) => ({
      order: key,
      input: item,
      handle: (...params) => this.handle(...params),
    }))
    this._formatType = 'map'
    this.task = this.randomStep ? this.shuffle(res) : res
  }
}
