export const addRow = () => {
  return {
    type: 'ADD_ROW',
  };
};

export const deleteRow = (idx) => {
  return {
    type: 'DELETE_ROW',
    idx,
  };
};

export const editRowDate = (idx, newDate) => {
  return {
    type: 'EDIT_ROW_DATE',
    idx,
    newDate,
  };
};

export const editRowLoc = (idx, locid, newLoc) => {
  return {
    type: 'EDIT_ROW_LOC',
    idx,
    locid,
    newLoc,
  };
};
