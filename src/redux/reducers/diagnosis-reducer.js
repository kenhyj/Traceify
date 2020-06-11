
// set the initial state here
const commonstate = {
    "fever": false,
    "dry cough": false,
    "tiredness": false,
};

const rarestate = {
    "aches and pains": false,
    "sore throat": false,
    "diarrhea": false,
    "conjunctivitis": false,
    "headache": false,
    "loss of taste": false,
    "loss of smell": false,
    "a rash on skin": false,
    "discolouration of fingers or toes": false,
};
const seriousstate = {
    "difficulty breathing or shortness of breath": false,
    "chest pain or pressure": false,
    "loss of speech": false,
    "loss of movement": false,
};

const INITIAL_STATE = {
    common: Object.keys(commonstate),
    rare: Object.keys(rarestate),
    serious: Object.keys(seriousstate),
    symptoms: {...commonstate, ...rarestate, ...seriousstate},
};

const diagnosisReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SELECTED_SYMPTOMS':
            return {
                ...state,
                // symptoms: state.symptoms.push(action.symptom)
                // fixme: I don't know how to update the symptoms' fields here...
                symptoms: {...state.symptoms, ...action.payload}
            };
        default:
            return state;
    }
};

export default diagnosisReducer;
