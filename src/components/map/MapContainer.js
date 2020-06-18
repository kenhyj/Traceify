import React, { Component } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import styles from './MapContainer.css';

// NOTE: uncomment this, and comment out the actual api if you don't want to use up loads 
const API_KEY = `${process.env.REACT_APP_GOOGLE_API_KEY}`;
// const API_KEY = 123456;  

class MapContainer extends Component {
    render() {
        return (
            <div>
                <LoadScript googleMapsApiKey={API_KEY}>
                    <GoogleMap
                        mapContainerStyle={styles.mapContainerStyle}
                        center={styles.center}
                        zoom={styles.zoom}
                    >
                        <></>
                    </GoogleMap>
                </LoadScript>
            </div>
        );
    }
}

export default MapContainer;
