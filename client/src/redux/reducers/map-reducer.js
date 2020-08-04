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
  mapIsVisibleMobile: true,
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
      return {
        ...state,
        globalMarkers: [...state.globalMarkers, action.payload],
      };
    case actions.SET_VISIBLE_MARKERS:
      return {
        ...state,
        visibleMarkers: action.payload,
      };
    case actions.SET_MAP_VISIBLE_MOBILE:
      return {
        ...state,
        mapIsVisibleMobile: !state.mapIsVisibleMobile,
      };
    default:
      return state;
  }
};

export default mapReducer;
