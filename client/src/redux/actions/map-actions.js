import axios from 'axios/index';
import * as actions from '../constants/action-types';

export const showInfoWindow = (id) => ({
  type: actions.SHOW_MAP_INFOWINDOW,
  id: id,
  // isInfoWindowVisible: !isInfoWindowVisible,
});

export const showHeatLayer = () => ({
  type: actions.SHOW_HEAT_LAYER,
});

export const showMarkers = () => ({
  type: actions.SHOW_MARKERS,
});

export const showOutbreakMarkers = () => ({
  type: actions.SHOW_OUTBREAK_MARKERS,
});

export const fetchLocationsSuccess = (locations, outbreaks) => ({
  type: actions.FETCH_LOCATIONS_SUCCESS,
  payload: {
    data: locations,
    outbreaks: outbreaks,
  },
});

export const fetchLocationsFailure = (error) => ({
  type: actions.FETCH_LOCATIONS_FAILURE,
  payload: {
    error,
  },
});

export const fetchLocations = () => (dispatch) => {
  const getAllData = axios.get('/api/location-trace');
  const getOutbreakData = axios.get('/api/location-outbreak');
  axios
    .all([getAllData, getOutbreakData])
    .then(
      axios.spread((...responses) => {
        const locations = responses[0].data;
        const outbreaks = responses[1].data;
        return { locations, outbreaks };
      })
    )
    .then((res) => {
      dispatch(fetchLocationsSuccess(res.locations, res.outbreaks));
    })
    .catch((err) => {
      dispatch(fetchLocationsFailure(err));
      console.log(err);
    });
  // axios
  //   .get('/locations')
  //   .then((res) => {
  //     // console.log('res...', res.data);
  //     return res.data;
  //   })
  //   .then((locations) => {
  //     // console.log('map actions locations...', locations);
  //     dispatch(fetchLocationsSuccess(locations));
  //   })
  //   .catch((err) => {
  //     dispatch(fetchLocationsFailure(err));
  //     console.log(err);
  //   });
};
