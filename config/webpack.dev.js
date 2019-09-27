const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const { basePath, outDir } = require('../project.config');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    // dll
    new webpack.DllReferencePlugin({
      manifest: path.resolve(basePath, 'dll', 'manifest.json'),
    }),

    // react-hot-loader需要配置这个
    new webpack.HotModuleReplacementPlugin(),

    // 全局常量
    new webpack.DefinePlugin({
      DEBUG: JSON.stringify(true),
    }),
  ],
  devServer: {
    contentBase: outDir,
    // proxy: {
    // '/api': {
    //   target: env.development.PROXY_TARGET,
    //   changeOrigin: true, // target是域名时，为true，
    //   secure: false, // 设置支持https协议的代理
    // },
    // },
    // proxy: {
    //     '/api': {
    //         target: 'http://lottery.prod.51xuanshi.com',
    //         changeOrigin: true, // 跨域
    //         secure: false, // 设置支持https协议的代理
    //         pathRewrite: {'^/api' : ''}, // 重写地址, 不传递api过去
    //     }
    // },
    proxy: [{
      context: ['/lottery', '/user'], // 多个target
      target: 'http://lottery.prod.51xuanshi.com',
      changeOrigin: true,
    }],
    historyApiFallback: true,
    hot: true, // react-hot-loader 要开启这个
  },
});
