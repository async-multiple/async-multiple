import Each from './each'
import util from '../util'

export default class Map extends Each {
  constructor(param) {
    super(param)
  }

  initTask() {
    const res = this.task.map((item, key) => ({
      order: key,
      input: item,
      hander: () => this.hander.call(this, item),
    }))
    this.formatType = 'map'
    this.task = this.randomStep ? util.shuffle(res) : res
  }
}