import React, { Component } from 'react';
// import { Route, NavLink } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home'; //Home是路由组件
import About from './pages/About'; //About是路由组件
// import Test from './pages/Test'; //About是路由组件
import Header from './components/Header'; //Header是一般组件
import MyNavLink from './components/MyNavLink';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className='row'>
          <div className='col-xs-offset-2 col-xs-8'>
            <Header />
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-2 col-xs-offset-2'>
            <div className='list-group'>
              {/* 原生html中，靠<a>跳转不同的页面 */}
              {/* <a className="list-group-item" href="./about.html">About</a>
							<a className="list-group-item active" href="./home.html">Home</a> */}

              {/* 在React中靠路由链接实现切换组件--编写路由链接 */}
              <MyNavLink to='/taetea/home' title='prop_title' a='prop_a' b='prop_b' c='prop_c'>
                {/* <h4>Home</h4> */}
                <span>Home</span>1{/* Home */}
              </MyNavLink>
              <MyNavLink to='/taetea/about'>
                {/* <h4>About</h4> */}
                <span>About</span>2{/* About */}
              </MyNavLink>
              {/* <NavLink to='/home' children='AAA' />
              <hr />
              <NavLink to='/about' children='BBB' /> */}
            </div>
          </div>
          <div className='col-xs-6'>
            <div className='panel'>
              <div className='panel-body'>
                {/* 注册路由 */}
                <Switch>
                  <Route path='/taetea/home' component={Home} />
                  {/* <Route path='/about' component={Test} /> */}
                  <Route path='/taetea/about' component={About} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
