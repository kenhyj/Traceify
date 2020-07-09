import axios from 'axios';

const fetchReopenRequest = () => {
  return {
    type: 'FETCH_REOPEN_REQUEST',
  };
};

const fetchReopenSuccess = (data) => {
  return {
    type: 'FETCH_REOPEN_SUCCESS',
    payload: data,
  };
};

const fetchReopenFailure = (error) => {
  return {
    type: 'FETCH_REOPEN_FAILURE',
    payload: error,
  };
};

const fetchReopens = (prov) => (dispatch, getState) => {
  dispatch(fetchReopenRequest());
  axios
    .get('http://localhost:7000/reopenings/getall')
    .then((res) => {
      dispatch(fetchReopenSuccess(res.data));
    })
    .catch((err) => {
      dispatch(fetchReopenFailure(err.message));
    });
};

// const fetchReopens = (prov) => (dispatch, getState) => {
//   dispatch(fetchReopenRequest());
//   axios
//     .get('http://localhost:7000/reopenings/getall', { province: prov })
//     .then((res) => {
//       dispatch(fetchReopenSuccess(res.data));
//     })
//     .catch((err) => {
//       dispatch(fetchReopenFailure(err.message));
//     });
// };

export default fetchReopens;
