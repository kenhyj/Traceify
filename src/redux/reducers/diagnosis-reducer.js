
// set the initial state here
const INITIAL_STATE = {
    symptoms: {},
    common: ["fever",
        "dry cough",
        "tiredness"],
    rare: ["aches and pains",
        "sore throat",
        "diarrhea",
        "conjunctivitis",
        "headache",
        "loss of taste",
        "loss of smell",
        "a rash on skin",
        "discolouration of fingers or toes"],
    serious: ["difficulty breathing or shortness of breath",
        "chest pain or pressure",
        "loss of speech",
        "loss of movement"]
};

const diagnosisReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SELECTED_SYMPTOMS':
            return {
                ...state,
                // symptoms: state.symptoms.push(action.symptom)
                symptoms: action.symptom
            };
        default:
            return state;
    }
};

export default diagnosisReducer;
