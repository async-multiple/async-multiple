// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // add your custom rules here
  'rules': {
    // costume
    'comma-dangle': [2, 'always-multiline'],
    'space-before-function-paren': [2, 'never'],
    // allow paren-less arrow functions
    'arrow-parens': 0,
    "space-before-function-paren": ["error", {
        "anonymous": "never",
        "named": "never",
        "asyncArrow": "always"
    }],
    // allow async-await
    'generator-star-spacing': 0
  }
}
