import React, { Component } from 'react';
import listStyle from './index.module.css';

class List extends Component {
  render() {
    const { nanoid } = this.props;
    return <div className={listStyle.list}>nanoid:{nanoid}</div>;
  }
}

export default List;
