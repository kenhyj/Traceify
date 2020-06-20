import * as actions from "../constants/action-types";

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
