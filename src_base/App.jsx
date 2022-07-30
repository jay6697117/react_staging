import React, { Component } from 'react';
import './App.css';
import {nanoid} from 'nanoid'
import List from './components/List'
export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>App......</h1>
        <List nanoid={nanoid()} />
      </div>
    );
  }
}
