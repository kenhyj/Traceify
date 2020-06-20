/* global google */
import React, { Component, forwardRef } from "react";
import { GoogleMap, LoadScript, useLoadScript } from "@react-google-maps/api";
import styles from "./MapContainer.css";
import { connect } from "react-redux";
import MapMarker from "./MapMarker";
// import MapHeatLayer from "./MapHeatLayer";
import { HeatmapLayer } from "@react-google-maps/api";

// NOTE: uncomment this, and comment out the actual api if you don't want to use up loads
const API_KEY = `${process.env.REACT_APP_GOOGLE_API_KEY}`;
// const API_KEY = 123456;

const googlemapsLibraries = ["drawing", "visualization"]; // whatever google libraries you need
export function withGoogleMaps(Component) {
    // eslint-disable-next-line react/display-name
    return forwardRef((props, ref) => {
        const { isLoaded } = useLoadScript({
            googleMapsApiKey: API_KEY,
            libraries: googlemapsLibraries,
        });
        if (isLoaded) {
            return <Component {...props} ref={ref} />;
        }
        return <div>Map loading</div>;
    });
}

class MapContainer extends Component {
    render() {
        const markers = this.props.markers;

        // const initialHeatLocations = ;

        return (
            <div>
                {/* <LoadScript
                    googleMapsApiKey={API_KEY}
                    libraries={["drawing", "visualization"]}
                > */}
                <GoogleMap
                    mapContainerStyle={styles.mapContainerStyle}
                    center={styles.center}
                    zoom={styles.zoom}
                >
                    {markers.map((marker) => (
                        <MapMarker key={marker.id} {...marker} />
                    ))}
                    <HeatmapLayer data={[
                            new google.maps.LatLng(49.2589731,-123.0389234),
                            new google.maps.LatLng(49.2689731,-123.0389234),
                            new google.maps.LatLng(49.2589731,-123.2389234),
                            new google.maps.LatLng(49.2644731,-123.0489234),
                        ]}>
                    </HeatmapLayer>
                    {/* <MapHeatLayer /> */}
                </GoogleMap>
                {/* </LoadScript> */}
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
