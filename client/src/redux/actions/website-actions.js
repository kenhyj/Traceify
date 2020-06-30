export const login = (accessToken, user) => {
    return {
        type: 'LOG_IN',
        accessToken: accessToken,
        user: user
    }
};

export const logout = () => {
    return {
        type: 'LOG_OUT'
    }
};
