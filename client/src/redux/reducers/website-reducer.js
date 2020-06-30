const INITIAL_STATE = {
    isLoggedIn: false,
    accessToken: '',
    user: ""
};

const websiteReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LOG_IN':
            return {
                isLoggedIn: true,
                accessToken: action.accessToken,
                user: action.user
            };
        case 'LOG_OUT':
            return {
                isLoggedIn: false,
                accessToken: '',
                user: ""
            };
        default:
            return state;
    }
};

export default websiteReducer;
