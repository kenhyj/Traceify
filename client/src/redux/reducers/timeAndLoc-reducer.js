const InitialField = [
  {
    date: new Date('2020-07-01T01:11:54'),
    locations: [{ loc: '' }, { loc: '' }, { loc: '' }],
  },
];

const timeAndLocReducer = (fields = InitialField, action) => {
  switch (action.type) {
    case 'ADD_ROW':
      return [
        ...fields,
        {
          date: new Date('2020-07-01T01:11:54'),
          locations: [{ loc: '' }, { loc: '' }, { loc: '' }],
        },
      ];
    case 'DELETE_ROW':
      return fields.filter((oneRow, index) => {
        // console.log(`index${index}`);
        // console.log(`idx:${action.idx}`);
        return index !== action.idx;
      });

    case 'EDIT_ROW_DATE':
      return fields.map((oneRow, index) => {
        if (index === action.idx) {
          // console.log(action.newDate.toISOString());
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
