const path = require('path');

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  NODE_ENV,
  basePath: __dirname,
  srcDir: path.resolve(__dirname, 'src'),
  outDir: path.resolve(__dirname, 'dist'),
  publicPath: '/',
  vendor: ['react', 'react-dom', 'react-router-dom', 'js-cookie'],
};
