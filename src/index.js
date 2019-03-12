import Map from './lib/map'
import Each from './lib/each'
export const map = (...params) => new Map().init(params)
export const each = (...params) => new Each().init(params)
