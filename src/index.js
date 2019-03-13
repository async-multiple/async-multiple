import Map from './lib/map'
import Each from './lib/each'
export const map = (...params) => new Map(...params).start()
export const each = (...params) => new Each(...params).start()
export { Map, Each }
