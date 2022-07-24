import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import './App.css';
import List from './components/List';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <List nanoid={nanoid()} />
      </div>
    );
  }
}
