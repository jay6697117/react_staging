//引入react核心库
import React from 'react';
//引入ReactDOM
import ReactDOM from 'react-dom';
//引入路由库
import { BrowserRouter } from 'react-router-dom';
// import { HashRouter } from 'react-router-dom';
//引入App root组件(根组件)
import App from './App';

ReactDOM.render(
  // <HashRouter>
  <BrowserRouter>
    <App>
      <div>aaa</div>
      <div>bbb</div>
      <div>ccc</div>
    </App>
  </BrowserRouter>,
  // </HashRouter>
  document.getElementById('root')
);
