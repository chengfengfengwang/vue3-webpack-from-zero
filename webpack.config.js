const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 3000,
    hot: true
  },
  plugins: [new HtmlWebpackPlugin()]
}
// console.log(path.resolve(__dirname, 'index.js'))
// console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', ''))