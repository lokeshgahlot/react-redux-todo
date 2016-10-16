import React from 'react';
import {connect} from 'react-redux';

import {fetchTodos} from '../actions/todos';

@connect((store) => {
  return {
      todos: store.todos
  };
})

export default class Layout extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchTodos());
  }

  render() {
    const todos = this.props.todos.list;
    const loader = this.props.todos.fetching ? <div>Loading...</div> : '';

    const mappedtodos = todos.map((todo) => {
      return (
        <li key={todo.id}>{todo.title}</li>
      );
    });

    return (
      <div>
        {loader}
        <ul>{mappedtodos}</ul>
      </div>
    );
  };
}
