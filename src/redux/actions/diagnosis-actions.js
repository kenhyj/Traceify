export const submitSymptoms = symptoms => {
    return {
        type: 'SUBMIT_SYMPTOMS',
        selectedSymptoms: symptoms
    }
}

export const generateResult = symptoms =>{
    return {
        type: 'GENERATE_RESULT',
        symptoms
    }
}
