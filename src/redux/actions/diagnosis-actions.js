export const submitSymptoms = symptoms => {
    return {
        type: 'SUBMIT_SYMPTOMS',
        selectedSymptoms: symptoms
    }
};

// Note: this will be called when the request to the backend returns
export const setDiagnosis = diagnosis => {
    return {
        type: 'SUBMIT_SYMPTOMS',
        diagnosis: diagnosis
    }
};
