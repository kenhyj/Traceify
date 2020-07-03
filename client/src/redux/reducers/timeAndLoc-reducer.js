const InitialField = [
  {
    date: new Date('2020-07-01T21:11:54'),
    loc1: '',
    loc2: '',
    loc3: '',
  },
];

const timeAndLocReducer = (fields = InitialField, action) => {
  switch (action.type) {
    case 'ADD_ROW':
      return [
        ...fields,
        {
          date: new Date('2020-07-01T21:11:54'),
          loc1: '',
          loc2: '',
          loc3: '',
        },
      ];
    case 'DELETE_ROW':
      return fields.filter((oneRow, index) => {
        console.log(`index${index}`);
        console.log(`idx:${action.idx}`);
        if (index === action.idx) {
          return false;
        }
        return true;
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
      if (action.locid === '1') {
        return fields.map((oneRow, index) => {
          if (index === action.idx) {
            return {
              ...oneRow,
              loc1: action.newLoc,
            };
          }
          return oneRow;
        });
      }
      if (action.locid === '2') {
        return fields.map((oneRow, index) => {
          if (index === action.idx) {
            return {
              ...oneRow,
              loc2: action.newLoc,
            };
          }
          return oneRow;
        });
      }
      return fields.map((oneRow, index) => {
        if (index === action.idx) {
          return {
            ...oneRow,
            loc3: action.newLoc,
          };
        }
        return oneRow;
      });

    default:
      return fields;
  }
};

export default timeAndLocReducer;
