export const select = symptom => {
    // Ex) symptom is the payload that gets passed to the reducer
    return {
        type: 'SELECT_SYMPTOM',
        symptom: symptom
    };
};

export const deselect = symptom => {
    return {
        type: 'DESELECT_SYMPTOM',
        symptom: symptom
    };
};

export const choosesymptoms = symptoms => {
    return {
        type: 'SELECTED_SYMPTOMS',
        payload: symptoms
    }
}

export const calcpoints = something => {
    return {
        type: 'CALCULATE_POINTS',
        payload: something
    }
}
