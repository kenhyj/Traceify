/* global google */
import React, { Component } from 'react';
import { GoogleMap } from '@react-google-maps/api';
import styles from './MapContainer.css';
import { connect } from 'react-redux';
import MapMarker from '../../../components/map/MapMarker';
import MapHeatLayer from '../../../components/map/MapHeatLayer';
import { withGoogleMaps } from './MapHOC';

class MapContainer extends Component {
  render() {
    const markers = this.props.markers;

    const { showMarkers } = this.props.mapReducer;

    return (
      <div>
        <GoogleMap
          mapContainerStyle={styles.mapContainerStyle}
          center={styles.center}
          zoom={styles.zoom}
          options={{ styles: styles.mapStyle }}
        >
          {markers.map(
            (marker) => showMarkers && <MapMarker key={marker.id} {...marker} />
          )}

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