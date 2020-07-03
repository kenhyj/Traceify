export const addRow = (idx) => {
    return {
        type: 'ADD_ROW',
        idx
    }
};

export const deleteRow = (idx) => {
    return {
        type: 'DELETE_ROW'
    }
};