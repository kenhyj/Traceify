export const submitSymptoms = symptoms => {
    return {
        type: 'SUBMIT_SYMPTOMS',
        selectedSymptoms: symptoms
    }
}
