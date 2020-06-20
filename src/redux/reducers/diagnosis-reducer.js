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
    "In need of organ transplant": false,
    // https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/people-at-higher-risk.html
};

const please = "Currently there is no official treatment or cure for COVID-19. Meanwhile, please continue to practice " +
    "social distancing and wash your hands thoroughly and regularly. Avoid large gatherings and limit outside contact to" +
    " as limited to shopping groceries and essentials.  If you are seeing new symptpoims or pre-existing symptoms worsen" +
    " in the next 2-14 days, check the symptom checker or in case of emergency contact your local health authorities.";

const asymptomatic = "You are asymptomatic. You may be a virus carrier. To be sure that you are virus-free, a COVID testing from a clinic is necessary." + please;

const chill = "You are exhibiting some of the more common symptoms of someone who has the virus. Do not be alarmed. Some of these are commonly seen in colds and flu."+please;

const interesting = "You are exhibiting some of the rarest symptoms of someone who has the virus. Not many individuals who have contracted COVID 19 exhibits these symptoms"+please;

const emergency = "You are exhibiting some of the more serious symptoms exhibited by those with the COVID virus" + please;

const complications = "The COVID-19 has put you at an elevated risk of developing health complications from either your pre-existing disorder or current disorder"+ please;

const INITIAL_STATE = {
    common: Object.keys(commonstate),
    rare: Object.keys(rarestate),
    serious: Object.keys(seriousstate),
    atrisk: Object.keys(atriskstate),
    // TODO: is 'symptoms' below necessary?
    symptoms: {...commonstate, ...rarestate, ...seriousstate},

    diagnosis: ''
};

const diagnosisReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SUBMIT_SYMPTOMS':
            // TODO: send a request to the back-end to get the result. As a temporary measure, this sets 'diagnosis' to emergency. This should be changed later on.
            console.log(state);
            return {
                ...state,
                diagnosis: emergency
            };

        case 'SET_DIAGNOSIS':
            // TODO: set diagnosis based on the result returned from the back-end. This will be called when the request returns. get the result from action.diagnosis. Below is just an example.
            let result = '';
            if (action.diagnosis === 'emergency')
                result = emergency;
            return {
                ...state,
                symptoms: {...state.symptoms, ...action.payload}
            };
        default:
            return state;
    }
};

export default diagnosisReducer;
