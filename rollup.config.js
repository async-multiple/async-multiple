import { version, author } from './package.json'

import nodeResolve from 'rollup-plugin-node-resolve'
import commonjsResolve from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import json from 'rollup-plugin-json'
import { uglify } from 'rollup-plugin-uglify'

import dayjs from 'dayjs'

const module = {
  compress: true,
  babel: true,
}

const banner = `
/*
* @Package async-multiple
* @Version ${version}
* @Author: ${author}
* @Date: 2019-07-21 11:57:15
* @Last Modified Time: ${dayjs().format('YYYY-MM-DDTHH:mm:ss SSS [Z] A')}
*/
`

export default {
  input: 'src/index.js',
  output: {
    file: './dist/async-multiple.rollup.min.js',
    format: 'umd',
    banner,
    name: 'async-multiple'
  },
  plugins: [
    nodeResolve(),
    commonjsResolve(),
    json(),
    module.babel ? babel({
      babelrc: false,
      exclude: 'node_modules/**',
      presets: ['es2015-rollup', 'stage-0'],
      plugins: ['external-helpers']
    }) : null,
    module.compress ? uglify({
      compress: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
      }
    }): null
  ].filter(s => !!s)
}
