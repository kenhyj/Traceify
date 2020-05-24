
// set the initial state here
const INITIAL_STATE = {
    symptoms: []
};

const diagnosisReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'SELECT_SYMPTOM':
            return {
                ...state,
                symptoms: state.symptoms.push(action.symptom)
            };

        case 'DESELECT_SYMPTOM':
            // Do something here
            return {
                ...state
            };

        default:
            return state;
    }
};

export default diagnosisReducer;
