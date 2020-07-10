/* global google */
import React, { Component } from "react";
import { GoogleMap } from "@react-google-maps/api";
import styles from "./MapContainer.css";
import { connect } from "react-redux";
import MapMarker from "./MapMarker";
import MapHeatLayer from "./MapHeatLayer";
import { withGoogleMaps } from "./MapHOC";
import PageHeader from "../page-header/page-header";
import Instruction from "../instruction/instruction";

class MapContainer extends Component {
    render() {
        const markers = this.props.markers;

        const { showMarkers } = this.props.mapReducer;

        // const initialHeatLocations = ;

        return (
            <div style={{textAlign: 'center'}}>
                <PageHeader text='HOME'/>
                <br/><br/>
                <Instruction text='The map below shows where the positive patients have traveled for the last few days. Click on the buttons on top of the map to change the map view.'/>
                <br/><br/>
                <GoogleMap
                    mapContainerStyle={styles.mapContainerStyle}
                    center={styles.center}
                    zoom={styles.zoom}
                    options={{styles: styles.mapStyle}}
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