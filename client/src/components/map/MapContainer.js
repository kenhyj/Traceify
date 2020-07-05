import React, { Component } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import styles from './MapContainer.css';

// NOTE: uncomment this, and comment out the actual api if you don't want to use up loads
const API_KEY = `${process.env.REACT_APP_GOOGLE_LOCATION_KEY}`;
// const API_KEY = 123456;

const locations = [
  {
    name: 'UBC',
    location: {
      lat: 49.2606052,
      lng: -123.2481825,
    },
  },
];

class MapContainer extends Component {
  render() {
    return (
      <div>
          <GoogleMap
            mapContainerStyle={styles.mapContainerStyle}
            center={styles.center}
            zoom={styles.zoom}
          >
            <Marker position={locations[0].location} />
          </GoogleMap>
      </div>
    );
  }
}

export default MapContainer;
