import React, { Component } from 'react';
import { Button, DatePicker } from 'antd';
import { WechatOutlined, WeiboOutlined, SearchOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
const { RangePicker } = DatePicker;

export default class App extends Component {
  render() {
    return (
      <div style={{padding:'20px'}}>
        App....
        <hr />
        <button>点我</button>
        <hr />
        <Button type='primary'>按钮1</Button>
        <hr />
        <Button>按钮2</Button>
        <hr />
        <Button type='link'>按钮3</Button>
        <hr />
        <Button type='primary' icon={<SearchOutlined />}>
          Search
        </Button>
        <hr />
        <WechatOutlined />
        <hr />
        <WeiboOutlined />
        <hr />
        <DatePicker />
        <hr />
        <RangePicker />
      </div>
    );
  }
}
