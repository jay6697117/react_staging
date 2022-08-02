import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Item from './components/Item';
import ListStyle from './index.module.css';
// console.log('ListStyle', ListStyle);

export default class List extends Component {
  //对接收的props进行：类型、必要性的限制
  static propTypes = {
    todos: PropTypes.array.isRequired,
    updateTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    editTodo: PropTypes.func.isRequired
  };

  render() {
    const { todos, updateTodo, deleteTodo, editTodo } = this.props;
    return (
      <ul className={ListStyle['todo-main']}>
        {todos.map(todo => {
          return <Item key={todo.id} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo} editTodo={editTodo} />;
        })}
      </ul>
    );
  }
}
