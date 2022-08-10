import React, { Component } from 'react';

const DetailData = [
  { id: '01', content: '你好，中国' },
  { id: '02', content: '你好，尚硅谷' },
  { id: '03', content: '你好，未来的自己' }
];
export default class Detail extends Component {
  render() {
    console.log('Detail this.props:', this.props);
    // 接收params参数
    const { id, title } = this.props.match.params;
    const findResult = DetailData.find(detailObj => {
      return detailObj.id === id;
    });
    console.log('Detail findResult :', findResult);
    return (
      <ul>
        <li>
          ID: <span style={{ color: 'red' }}>【{id}】</span>
        </li>
        <li>
          TITLE: <span style={{ color: 'green' }}>【{title}】</span>
        </li>
        <li>
          CONTENT: <span style={{ color: 'blue' }}>【{findResult.content}】</span>
        </li>
      </ul>
    );
  }
}
