import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';

export default class Footer extends Component {
  //对接收的props进行：类型、必要性的限制
  static propTypes = {
    checkAllTodo: PropTypes.func.isRequired,
    clearAllDone: PropTypes.func.isRequired
  };

  //全选checkbox的回调
  handleCheckAll = event => {
    this.props.checkAllTodo(event.target.checked);
  };

  //清除已完成任务的回调
  handleClearAllDone = () => {
    this.props.clearAllDone();
  };

  render() {
    const { todos } = this.props;
    //已完成的个数
    const doneCount = todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0);
    //总数
    const total = todos.length;
    return (
      <div className='todo-footer'>
        <label>
          <input
            type='checkbox'
            onChange={this.handleCheckAll}
            checked={doneCount === total && (total !== 0 || doneCount !== 0) ? true : false}
          />
        </label>
        <span>
          已完成{doneCount} / 全部{total}
        </span>
        <button onClick={this.handleClearAllDone} className='btn btn-danger'>
          清除已完成任务
        </button>
      </div>
    );
  }
}
