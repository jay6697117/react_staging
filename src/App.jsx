import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
export default class App extends Component {
  getStudentData = params => {
    console.log('params', params);
    axios.get('aaa').then(
      res => {
        console.log('res', res);
      },
      err => {
        console.log('err:', err)
      }
    );
  };

  render() {
    return (
      <div className='app'>
        <button onClick={this.getStudentData}>点我获取学生数据</button>
      </div>
    );
  }
}
