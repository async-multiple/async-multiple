var path = require('path')
var UglifyJsPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
  entry: './index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'async-multiple.min.js',
    library: 'async-multiple',
    libraryTarget: 'umd',
  },
  module: {
    loaders: [
      {
        test: /.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new UglifyJsPlugin(),
  ],
  node: {
    process: false,
  },
  devtool: 'source-map',
}
