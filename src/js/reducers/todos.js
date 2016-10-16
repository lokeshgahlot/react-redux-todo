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
  }
  return state;
}
