import React, { Component } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

// NOTE: uncomment this, and comment out the actual api if you don't want to use up loads 
const API_KEY = `${process.env.REACT_APP_GOOGLE_API_KEY}`;
// const API_KEY = 123456;  

const containerStyle = {
    width: "800px",
    height: "800px",
};

const center = {
    lat: 49.2827,
    lng: -123.1207,
};

class MapContainer extends Component {
    render() {
        return (
            <div>
                <LoadScript googleMapsApiKey={API_KEY}>
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={10}
                    >
                        <></>
                    </GoogleMap>
                </LoadScript>
            </div>
        );
    }
}

export default MapContainer;
