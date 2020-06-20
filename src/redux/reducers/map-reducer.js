import * as actions from '../constants/action-types';
import initialMarkers from './initial-data/initialMarkers';
// import initialHeatData from './initial-data/initialHeatData';

const INITIAL_STATE = {
    activeMarker: {},
    selectedPlace: {},
    infoWindowIsOpen: false,
    markers: initialMarkers,
    // heatData: initialHeatData,
};

const mapReducer = (state = INITIAL_STATE, action) => {
    console.log('map reducer action', action);
    switch (action.type) {
        case actions.SHOW_MAP_INFOWINDOW:
            console.log('clicked', action.id);
            console.log('map reducer state markers ', state.markers);
            return {
                ...state,
                markers: state.markers.map(marker =>
                    marker.id === action.id ? marker.isInfoWindowVisible = !marker.isInfoWindowVisible : marker
            )};
        default:
            return state;
    }
};

export default mapReducer;