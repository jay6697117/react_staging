import React, { Component } from 'react';
import ListStyle from './index.module.css';

class List extends Component {
  render() {
    const { nanoid } = this.props;
    return <div className={ListStyle.list}>nanoid:{nanoid}</div>;
  }
}

export default List;
