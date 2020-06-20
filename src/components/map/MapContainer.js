/* global google */
import React, { Component, forwardRef } from "react";
import { GoogleMap, LoadScript, useLoadScript } from "@react-google-maps/api";
import styles from "./MapContainer.css";
import { connect } from "react-redux";
import MapMarker from "./MapMarker";
import MapHeatLayer from "./MapHeatLayer";
import { HeatmapLayer } from "@react-google-maps/api";
import { withGoogleMaps } from "./MapHOC";

class MapContainer extends Component {
    render() {
        const markers = this.props.markers;

        const { showMarkers } = this.props.mapReducer;

        // const initialHeatLocations = ;

        return (
            <div>
                <GoogleMap
                    mapContainerStyle={styles.mapContainerStyle}
                    center={styles.center}
                    zoom={styles.zoom}
                >

                    {markers.map((marker) => (
                        showMarkers && <MapMarker key={marker.id} {...marker} />
                    ))}

                    <MapHeatLayer />
                    
                </GoogleMap>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        mapReducer: state.map,
        markers: state.map.markers,
    };
};

const ConnectedMapContainer = connect(mapStateToProps)(
    withGoogleMaps(MapContainer)
);

export default ConnectedMapContainer;
