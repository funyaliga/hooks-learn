const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const {
  basePath, srcDir, publicPath, outDir,
} = require('../project.config');

path.resolve(__dirname, 'dist');

module.exports = {
  entry: {
    main: `${srcDir}/app/index.js`,
  },
  resolve: {
    alias: {
      '@': srcDir,
      '@c': `${srcDir}/components`,
    },
    extensions: ['.js', '.jsx', '.json', '.scss', '.css'],
  },
  output: {
    path: outDir,
    filename: 'main.js',
    chunkFilename: '[name].[chunkhash:4].js',
    publicPath,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: `${srcDir}/app/index.html`,
    }),

    // 优化 moment.js 库的体积，https://github.com/jmblog/how-to-optimize-momentjs-with-webpack
    // new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: {
          loader: 'url-loader',
          query: {
            limit: 1024 * 10, // 小于10kb base64
            name: 'images/[name].[hash:8].[ext]',
          },
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: 'file-loader',
        options: {
          name: 'font/[name].[hash:8].[ext]',
        },
      },
    ],
  },

};
