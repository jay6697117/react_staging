import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import './App.css';

export default class App extends Component {
  state = { path: '' };
  handleClick = path => {
    this.setState({ path });
  };
  render() {
    const { path } = this.state;
    return (
      <div>
        <div className='row header'>
          <div className='col-xs-offset-2 col-xs-8'>
            <div className='page-header'>
              <h3>React Router Demo</h3>
            </div>
          </div>
        </div>
        <div className='row content'>
          <div className='col-xs-2 col-xs-offset-2'>
            <div className='list-group'>
              {/* 原生html中，靠<a>跳转不同的页面 */}
              {/* <a className="list-group-item" href="./about.html">About</a>
							<a className="list-group-item active" href="./home.html">Home</a> */}
              {/* 在React中靠路由链接实现切换组件--编写路由链接 */}
              <Link className='list-group-item' to='/home' onClick={() => this.handleClick('/home')}>
                <span className={path === '/home' ? 'active' : ''}>Home</span>
              </Link>
              &nbsp;&nbsp;
              <Link className='list-group-item' to='/about' onClick={() => this.handleClick('/about')}>
                <span className={path === '/about' ? 'active' : ''}>About</span>
              </Link>
            </div>
          </div>
          <div className='col-xs-6'>
            <div className='panel'>
              <div className='panel-body'>
                {/* 注册路由 */}
                <Route path='/about' component={About} />
                <Route path='/home' component={Home} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
