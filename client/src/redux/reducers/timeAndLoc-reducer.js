const getTime = () => {
  let tzoffset = new Date().getTimezoneOffset() * 60000; // offset in milliseconds
  let localISOTime = new Date(Date.now() - tzoffset);
  return localISOTime;
};

const InitialField = [
  {
    date: getTime(),
    locations: [{ loc: '' }, { loc: '' }, { loc: '' }],
  },
];

const timeAndLocReducer = (fields = InitialField, action) => {
  switch (action.type) {
    case 'ADD_ROW':
      return [
        ...fields,
        {
          date: getTime(),
          locations: [{ loc: '' }, { loc: '' }, { loc: '' }],
        },
      ];
    case 'DELETE_ROW':
      return fields.filter((oneRow, index) => {
        return index !== action.idx;
      });

    case 'EDIT_ROW_DATE':
      return fields.map((oneRow, index) => {
        if (index === action.idx) {
          return {
            ...oneRow,
            date: action.newDate,
          };
        }
        return oneRow;
      });
    case 'EDIT_ROW_LOC':
      return fields.map((oneRow, idx) => {
        if (idx === action.idx) {
          const newLocation = oneRow.locations.map((oneLoc, index) => {
            if (index === action.locid) {
              return action.newLoc;
            }
            return oneLoc;
          });
          return {
            ...oneRow,
            locations: newLocation,
          };
        }
        return oneRow;
      });

    default:
      return fields;
  }
};

export default timeAndLocReducer;
