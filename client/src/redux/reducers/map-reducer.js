import * as actions from '../constants/action-types';

const initialState = {
  activeMarker: {},
  selectedPlace: {},
  infoWindowIsOpen: false,
  data: [],
  outbreaks: [],
  showHeatLayer: true,
  showMarkers: true,
  showOutbreakMarkers: true,
  error: null,
  globalMap: {},
  globalMarkers: [],
  visibleMarkers: [],
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
    case actions.ADD_MARKER:
      state.globalMarkers.push(action.payload);
      return state;
    case actions.ADD_VISIBLE_MARKER:
      return {
        ...state,
        visibleMarkers: state.visibleMarkers.concat(action.payload.marker),
      };
    default:
      return state;
  }
};

export default mapReducer;
