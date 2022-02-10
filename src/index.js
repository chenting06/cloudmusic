import React from 'react';
import ReactDOM from 'react-dom';

import "./assets/css/base.css"

import App from './App';

ReactDOM.render(
  // 取消严格模式
  // <React.StrictMode>
    <App />,
  // </React.StrictMode>,
  document.getElementById('root')
);
