import Each from './each'

export default class Map extends Each {
  constructor(param) {
    super(param)
    this._formatType = 'map'
  }

  // _initTask() {
  //   const res = this.task.map((item, key) => ({
  //     order: key,
  //     input: item,
  //     handle: (...params) => this.handle(...params),
  //   }))
  //   this.task = this.randomStep ? this.shuffle(res) : res
  // }

  _initTask() {
    let order = 0
    const task = []
    for (const key in this.task) {
      task.push({
        order,
        input: this.task[key],
        stepKey: key,
        handle: (...params) => this.handle(...params),
      })
      order++
    }
    this.task = this.randomStep ? this.shuffle(task) : task
  }
}
