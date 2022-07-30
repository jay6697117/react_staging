//引入react核心库
import React from 'react';
//引入ReactDOM
import ReactDOM from 'react-dom';
//引入路由库
// import { BrowserRouter } from 'react-router-dom';
//引入App root组件(根组件)
import App from './App';

ReactDOM.render(
  // <BrowserRouter>
    <App>
      <h1>aaa</h1>
      <h1>bbb</h1>
      <h1>ccc</h1>
    </App>
  // </BrowserRouter>
  ,
  document.getElementById('root')
);
