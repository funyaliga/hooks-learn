// const webpack    = require('webpack')
// const path       = require('path')
// const project    = require('../project.config')

// module.exports = {
//     entry: {
//         vendor: project.vendor
//     },
//     mode  : 'production',
//     output: {
//       path     : path.resolve(project.basePath, 'dll'),
//       filename : '[name].dll.[hash:5].js',
//       library  : '[name]_library'
//     },
//     performance: {
//         hints: false
//     },
//     plugins: [
//         new webpack.DllPlugin({
//             name    : '[name]_library',
//             path    : path.resolve(project.basePath, 'dll', 'manifest.json'),
//             context : project.basePath
//         })
//     ]
// };

const path = require('path')
const webpack = require('webpack')
const project    = require('../project.config')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

console.log(__dirname)

module.exports = {
  mode: 'development',
  entry: {
    vendor: project.vendor
  },
  output: {
    path: path.resolve(project.basePath, 'dll'),
    filename: "[name].dll.[hash:5].js",
    pathinfo: true,
    library: '[name]_dll'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DllPlugin({
      path: path.resolve(project.basePath, 'dll', 'manifest.json'),
      name: "[name]_dll",
      context: path.resolve(project.basePath, 'src'),
    })
  ]
}