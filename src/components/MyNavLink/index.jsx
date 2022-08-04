import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class MyNavLink extends Component {
  render() {
    console.log('MyNavLink this.props:', this.props);
    const { to, children } = this.props;
    return (
      <NavLink activeClassName='atguigu' className='list-group-item' to={to}>
        {children}
      </NavLink>
    );
    // return <NavLink activeClassName='atguigu' className='list-group-item' to={to} children={children} />;
    // return <NavLink activeClassName='atguigu' className='list-group-item' {...this.props} />;
  }
}
