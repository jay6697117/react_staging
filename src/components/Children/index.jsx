import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    console.log('Children this.props :>> ', this.props);
    const { children } = this.props;
    return (
      <div>
        {children.map((item, index) => {
          return <div key={index}>{item}</div>;
        })}
      </div>
    );
  }
}
