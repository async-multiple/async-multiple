var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
var path = require('path')
module.exports = {
  entry: './index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'async-multiple.js',
    sourceMapFilename: 'async-multiple.map',
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
    new BundleAnalyzerPlugin(),
  ],
  node: {
    process: false,
  },
  devtool: 'source-map',
}
