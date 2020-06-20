import * as actions from "../constants/action-types";

export const showInfoWindow = (id) => ({
    type: actions.SHOW_MAP_INFOWINDOW,
    id: id,
    // isInfoWindowVisible: !isInfoWindowVisible,
});
