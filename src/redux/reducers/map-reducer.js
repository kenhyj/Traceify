import * as actions from '../constants/action-types';
import initialMarkers from './initialMarkers.js';

const INITIAL_STATE = {
    markers: initialMarkers
};

const mapReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actions.SHOW_MAP_INFOWINDOW:
            return state;
        default:
            console.log(state);
            return state;
    }
};

export default mapReducer;