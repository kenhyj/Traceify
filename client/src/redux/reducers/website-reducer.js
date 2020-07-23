const INITIAL_STATE = {
    isLoggedIn: false,
    accessToken: '',
    user: "",
    locationTraces: []
};

const websiteReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LOG_IN':
            return {
                ...state,
                isLoggedIn: true,
                accessToken: action.accessToken,
                user: action.user
            };
        case 'LOG_OUT':
            return {
                ...state,
                isLoggedIn: false,
                accessToken: '',
                user: ""
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
