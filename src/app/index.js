import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';
import './index.scss';

ReactDOM.render(
  <div><Router /></div>,
  document.getElementById('root'),
);

// react-hot-loader需要的配置
module.hot.accept();
