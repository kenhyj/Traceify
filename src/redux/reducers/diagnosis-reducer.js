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
    "rash on skin": false,
    "discolouration of fingers or toes": false,
};
const seriousstate = {
    "difficulty breathing or shortness of breath": false,
    "chest pain or pressure": false,
    "loss of speech": false,
    "loss of movement": false,
};
const atriskstate = {
    "Older than 64": false,
    "Have Liver Disease": false,
    "Have HIV or immunocompromised": false,
    "Undergoing chemotherapy": false,
    "Diabetic": false,
    "Undergoing dialysis": false,
    "BMI 40 and over": false,
    // https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/people-at-higher-risk.html
}

const INITIAL_STATE = {
    common: Object.keys(commonstate),
    rare: Object.keys(rarestate),
    serious: Object.keys(seriousstate),
    atrisk: Object.keys(atriskstate),
    symptoms: {...commonstate, ...rarestate, ...seriousstate},
};

const diagnosisReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SELECTED_SYMPTOMS':
            return {
                ...state,
                symptoms: {...state.symptoms, ...action.payload}
            };
        default:
            return state;
    }
};

export default diagnosisReducer;
