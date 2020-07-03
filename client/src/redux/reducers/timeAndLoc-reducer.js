const InitialField = [
  {
    date: '',
    loc1: '1',
    loc2: '2',
    loc3: '3',
  },
];

const timeAndLocReducer = (fields = InitialField, action) => {
  switch (action.type) {
    case 'ADD_ROW':
      return [
        ...fields,
        {
          date: '',
          loc1: '1',
          loc2: '2',
          loc3: '3',
        },
      ];
    case 'DELETE_ROW':
      let temp = fields.slice();
      temp.splice(action.idx, 1);
      return temp;
    default:
      return fields;
  }
};

export default timeAndLocReducer;
