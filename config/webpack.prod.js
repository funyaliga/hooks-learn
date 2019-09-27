const webpack = require('webpack');
const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const common = require('./webpack.common.js');
const { outDir } = require('../project.config');
// const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
// const smp = new SpeedMeasurePlugin()

// module.exports = smp.wrap(
//   merge(common, {
//     mode: 'production',
//     plugins: [
//       new webpack.DefinePlugin({
//         DEBUG: JSON.stringify(false),
//       }),
//     ],
//   })
// )
module.exports = merge(common, {
  mode: 'production',
  // devtool: 'cheap-module-source-map',
  plugins: [
    new CleanWebpackPlugin(outDir, { allowExternal: true }),

    // 全局常量
    new webpack.DefinePlugin({
      DEBUG: JSON.stringify(false),
    }),
  ],
});
