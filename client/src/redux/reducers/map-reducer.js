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
};

const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SHOW_MAP_INFOWINDOW:
      return {
        ...state,
        data: state.data.map((d) =>
          d.id === action.id
            ? (d.isInfoWindowVisible = !d.isInfoWindowVisible)
            : d
        ),
      };
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
    default:
      return state;
  }
};

export default mapReducer;
