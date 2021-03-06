import axios from 'axios';

// export function fetchTodos() {
//   return {
//     type: 'FETCH-TODOS',
//     payloads: [
//       {id: 1, text: 'todo-1', isCompleted: false},
//       {id: 2, text: 'todo-2', isCompleted: false},
//       {id: 3, text: 'todo-3', isCompleted: false},
//       {id: 4, text: 'todo-4', isCompleted: true}
//     ]
//   }
// }

let nextTodoId = 0;

export function fetchTodos() {
  return (dispatch) => {
    dispatch({type: 'FETCH-TODOS-START'});
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then((response) => {
        nextTodoId = response.data.length;
        dispatch({type: 'FETCH-TODOS-FULFILLED', payload: response.data});
      })
      .catch((err)=> {
        dispatch({type: 'FETCH-TODOS-REJECTED', payload: err});
      })
  }
}

export function addTodo(title) {
  return {
    type: 'ADD-TODO',
    payload: {
      title,
      id: ++nextTodoId,
      completed: false
    }
  }
}

export function toggleTodo(id) {
  return {
    type: 'TOGGLE-TODO',
    payload: id
  }
}
