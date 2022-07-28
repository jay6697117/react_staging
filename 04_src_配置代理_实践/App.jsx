import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
export default class App extends Component {
  state = {
    students: [],
    cars: []
  };

  getStudentData = () => {
    axios.get('//localhost:3000/api1/students').then(
      res => {
        console.log('res', res);
        const data = res.data;
        console.log('data', data);
        this.setState({ students: data });
      },
      err => {
        console.log('err:', err);
      }
    );
  };

  getCarsData = () => {
    axios.get('//localhost:3000/api2/cars').then(
      res => {
        console.log('res', res);
        const data = res.data;
        console.log('data', data);
        this.setState({ cars: data });
      },
      err => {
        console.log('err:', err);
      }
    );
  };

  render() {
    const { students,cars } = this.state;
    console.log('students', students);
    console.log('cars', cars)
    return (
      <div className='app'>
        <button onClick={this.getStudentData}>点我获取学生数据</button>
        <ul>
          {students.map(item => {
            return (
              <li key={item.id}>
                {item.name} - {item.age}
              </li>
            );
          })}
        </ul>
        <hr />
        <button onClick={this.getCarsData}>点我获取汽车数据</button>
        <ul>
          {cars.map(item => {
            return (
              <li key={item.id}>
                {item.name} - {item.price}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
