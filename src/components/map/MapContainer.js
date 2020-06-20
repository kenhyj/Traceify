import React, { Component } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import styles from './MapContainer.css';
import { connect } from 'react-redux';
import MapMarker from './MapMarker';

// NOTE: uncomment this, and comment out the actual api if you don't want to use up loads 
const API_KEY = `${process.env.REACT_APP_GOOGLE_API_KEY}`;
// const API_KEY = 123456;  

class MapContainer extends Component {
    
    render() {
        const markers = this.props.markers;

        return (
            <div>
                <LoadScript 
                    googleMapsApiKey={API_KEY}
                    >
                        <GoogleMap
                            mapContainerStyle={styles.mapContainerStyle}
                            center={styles.center}
                            zoom={styles.zoom}
                        >
                            {markers.map(marker =>
                                <MapMarker key={marker.id} {...marker} />
                            )}
                        </GoogleMap>
                </LoadScript>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    // console.log("map container state.map: ", state.map.markers);
    return {
        mapReducer: state.map,
        markers: state.map.markers
    }
}

const ConnectedMapContainer = connect(mapStateToProps)(MapContainer);

export default ConnectedMapContainer;
