import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';

export default class Item extends Component {
  //对接收的props进行：类型、必要性的限制
  static propTypes = {
    updateTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    editTodo: PropTypes.func.isRequired
  };

  state = { mouse: false, isEdit: false, inputVal: '' }; //标识鼠标移入、移出

  componentDidMount() {
    const { name } = this.props;
    this.setState({ inputVal: name });
  }

  //鼠标移入、移出的回调
  handleMouse = flag => {
    const { name } = this.props;
    return () => {
      if (!flag) {
        this.setState({ isEdit: false });
        this.setState({ inputVal: name });
      }
      this.setState({ mouse: flag });
    };
  };

  //勾选、取消勾选某一个todo的回调
  handleCheck = id => {
    return event => {
      this.props.updateTodo(id, event.target.checked);
    };
  };

  //删除一个todo的回调
  handleDelete = id => {
    if (window.confirm('确定删除吗？')) {
      this.props.deleteTodo(id);
    }
  };

  //编辑一个todo的回调
  handleEdit = id => {
    const { isEdit, inputVal } = this.state;
    if (!isEdit) {
      this.setState({ isEdit: true });
    } else {
      console.log('this.handleEdit:', id, inputVal);
      if (window.confirm('确定完成编辑吗？')) {
        this.props.editTodo(id, inputVal);
        this.setState({ isEdit: false });
      }
    }
  };

  handleChange = event => {
    console.log('handleChange:', event.target.value);
    this.setState({ inputVal: event.target.value });
  };

  //键盘事件的回调
  handleKeyUp = id => {
    return event => {
      //解构赋值获取keyCode,target
      const { keyCode, target } = event;
      //判断是否是回车按键
      if (keyCode !== 13) return;
      //添加的todo名字不能为空
      if (target.value.trim() === '') {
        alert('输入不能为空');
        return;
      }
      if (window.confirm('确定完成编辑吗？')) {
        this.props.editTodo(id, target.value);
        this.setState({ isEdit: false });
      }
    };
  };

  render() {
    const { id, name, done } = this.props;
    const { mouse, isEdit, inputVal } = this.state;
    const content = isEdit ? (
      <input value={inputVal} onChange={this.handleChange} onKeyUp={this.handleKeyUp(id)} type='text' />
    ) : (
      <span>{name}</span>
    );

    return (
      <li
        style={{ backgroundColor: mouse ? '#ddd' : '#fff' }}
        onMouseEnter={this.handleMouse(true)}
        onMouseLeave={this.handleMouse(false)}>
        <label>
          <input type='checkbox' checked={done} onChange={this.handleCheck(id)} />
          {content}
        </label>
        <button
          onClick={() => this.handleEdit(id)}
          className='btn btn-danger'
          style={{ display: mouse ? 'block' : 'none', marginLeft: '10px' }}>
          {isEdit ? '完成' : '编辑'}
        </button>
        <button
          onClick={() => this.handleDelete(id)}
          className='btn btn-danger'
          style={{ display: mouse ? 'block' : 'none' }}>
          删除
        </button>
      </li>
    );
  }
}
