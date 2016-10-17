export default function reducer(
    state = {
      fetching: false,
      fetched: false,
      list: [],
      error: null
    },
    action
  ) {
  switch(action.type) {
    case 'FETCH-TODOS-START':
      return {
        ...state,
        fetching: true
      };
    break;

    case 'FETCH-TODOS-FULFILLED':
      return {
        ...state,
        fetching: false,
        fetched: true,
        list: action.payload
      };
    break;

    case 'FETCH-TODOS-REJECTED':
      return {
        ...state,
        fetching: false,
        fetched: true,
        error: action.payload
      };
    break;

    case 'ADD-TODO':
      return {
        ...state,
          list: [].concat(state.list, [action.payload])
      };
    break;
    case 'TOGGLE-TODO':
      let t = [].concat(state.list).map((todo)=> {
        if(todo.id === parseInt(action.payload)) {
          todo.completed = !todo.completed
        }
        return todo;
      });

      return {
        ...state,
        list: t
      };
  }
  return state;
}
