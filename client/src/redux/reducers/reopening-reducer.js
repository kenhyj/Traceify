const initialState = {
  loading: false,
  messages: [],
  error: '',
};

const asyncReopenReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_REOPEN_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_REOPEN_SUCCESS':
      return {
        ...state,
        loading: false,
        details: action.payload,
        error: '',
      };
    case 'FETCH_REOPEN_FAILURE':
      return {
        ...state,
        loading: false,
        details: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
export default asyncReopenReducer;
