export const choosesymptoms = symptoms => {
    return {
        type: 'SELECTED_SYMPTOMS',
        payload: symptoms
    }
}

export const showdiagnosis = diagnosis => {
    return {
        type: 'SHOW_DIAGNOSIS',
        payload: diagnosis
    }
}

export const hidediagnosis = diagnosis => {
    return {
        type: 'HIDE_DIAGNOSIS',
        payload: diagnosis
    }
}

