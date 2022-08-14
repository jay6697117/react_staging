import React, { Component } from 'react';

export default class News extends Component {
  // componentDidMount() {
  //   console.log('三秒后跳转到/home/message');
  //   setTimeout(() => {
  //     this.props.history.push('/home/message');
  //   }, 3000);
  // }

  render() {
    return (
      <ul>
        <li>news001</li>
        <li>news002</li>
        <li>news003</li>
      </ul>
    );
  }
}
