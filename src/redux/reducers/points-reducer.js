
// set the initial state here
const INITIAL_STATE = {
    points: 0,
};

const pointsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'CALCULATE_POINTS':
            return {
                ...state,
                // symptoms: state.symptoms.push(action.symptom)
                payload: action.payload
            };
        default:
            return state;
    }
};

export default pointsReducer;
