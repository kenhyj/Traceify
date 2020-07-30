const INITIAL_STATE = {
  isLoggedIn: false,
  accessToken: '',
  user: '',
  locationTraces: []
};

const websiteReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LOG_IN':
      if (sessionStorage.getItem('token') === null) {
        let object = { token: action.accessToken, user: action.user };
        sessionStorage.setItem('token', JSON.stringify(object));
      }
      return {
        ...state,
        isLoggedIn: true,
        accessToken: action.accessToken,
        user: action.user
      };
    case 'LOG_OUT':
      if (sessionStorage.getItem('token') !== null)
        sessionStorage.removeItem('token');
      return {
        ...state,
        isLoggedIn: false,
        accessToken: '',
        user: ''
      };
    case 'SET_LOCATION_TRACES':
      return {
        ...state,
        locationTraces: action.result
      };

    default:
      return state;
  }
};

export default websiteReducer;
