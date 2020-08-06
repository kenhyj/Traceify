import * as actions from '../constants/action-types';

const initialState = {
  data: [],
  outbreaks: [],
  showHeatLayer: true,
  showMarkers: true,
  showOutbreakMarkers: true,
  error: null,
  globalMap: {},
  globalMarkers: [],
  visibleMarkers: [],
  activeMarkerId: '',
  panToLocationLatLng: null,
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
        globalMarkers: [...action.payload.data, ...action.payload.outbreaks],
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
    case actions.SET_VISIBLE_MARKERS:
      return {
        ...state,
        visibleMarkers: action.payload,
      };
    case actions.SET_ACTIVE_MARKER:
      return {
        ...state,
        activeMarkerId: action.payload,
      };
    case actions.SET_PAN_TO_LOCATION:
      return {
        ...state,
        panToLocationLatLng: action.payload,
      }
    default:
      return state;
  }
};

export default mapReducer;
