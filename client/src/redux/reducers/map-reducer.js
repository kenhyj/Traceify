import * as actions from '../constants/action-types';

const initialState = {
  data: [],
  outbreaks: [],
  showHeatLayer: true,
  showMarkers: true,
  showOutbreakMarkers: true,
  error: null,
  globalMap: {},
};

const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SHOW_HEAT_LAYER:
      return {
        ...state,
        showHeatLayer: !state.showHeatLayer,
      };
    case actions.SHOW_MARKERS:
      return {
        ...state,
        showMarkers: !state.showMarkers,
      };
    case actions.SHOW_OUTBREAK_MARKERS:
      return {
        ...state,
        showOutbreakMarkers: !state.showOutbreakMarkers,
      };
    case actions.FETCH_LOCATIONS_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        outbreaks: action.payload.outbreaks,
      };
    case actions.FETCH_LOCATIONS_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };
    case actions.SET_MAP:
      return {
        ...state,
        globalMap: action.payload,
      };
    default:
      return state;
  }
};

export default mapReducer;
