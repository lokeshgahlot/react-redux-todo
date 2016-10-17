import React from 'react';
import {connect} from 'react-redux';

import {fetchTodos, toggleTodo} from '../actions/todos';
import AddTodo from './AddTodo';

@connect((store) => {
  return {
      todos: store.todos
  };
})

export default class Layout extends React.Component {

  componentWillMount() {
    this.props.dispatch(fetchTodos());
  }

  toggleTodo(e) {
    // console.log('click', e.target.getAttribute('data-todoid'));
    this.props.dispatch(toggleTodo(e.target.getAttribute('data-todoid')));
  }

  render() {
    const todos = this.props.todos.list;
    const loader = this.props.todos.fetching ? <div>Loading...</div> : '';
    const mappedtodos = todos.map((todo) => {
      return (
        <li
        key={todo.id} data-todoid={todo.id}
        onClick={this.toggleTodo.bind(this)}
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none'
        }}>
            {todo.title}
        </li>
      );
    });
    return (
      <div>
        {loader}
        <ul>{mappedtodos}</ul>
        <AddTodo />
      </div>
    );
  };
}
