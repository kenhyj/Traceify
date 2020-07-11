/* global google */
import React, { Component } from 'react';
import { GoogleMap } from '@react-google-maps/api';
import styles from './MapContainer.css';
import { connect } from 'react-redux';
import MapMarker from '../../../components/map/MapMarker';
import MapOutbreakMarker from '../../../components/map/MapOutbreakMarker';
import MapHeatLayer from '../../../components/map/MapHeatLayer';
import { withGoogleMaps } from './MapHOC';
import { fetchLocations } from '../../../redux/actions/map-actions';

class MapContainer extends Component {
  componentDidMount() {
    this.loadData();
  }

  loadData() {
    this.props.dispatch(fetchLocations());
  }

  render() {
    const { data, outbreaks } = this.props;
    // console.log(data);
    const { showMarkers, showOutbreakMarkers } = this.props.mapReducer;

    return (
      <div>
        <GoogleMap
          mapContainerStyle={styles.mapContainerStyle}
          center={styles.center}
          zoom={styles.zoom}
          options={{ styles: styles.mapStyle }}
        >
          {data.map(
            (marker) => showMarkers && <MapMarker key={marker.id} {...marker} />
          )}

          {outbreaks.map(
            (marker) =>
              showOutbreakMarkers && (
                <MapOutbreakMarker key={marker.id} {...marker} />
              )
          )}

          <MapHeatLayer />
        </GoogleMap>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log('map container : state... ', state);
  return {
    mapReducer: state.map,
    data: state.map.data,
    outbreaks: state.map.outbreaks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLocations: () => dispatch(fetchLocations()),
    dispatch,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withGoogleMaps(MapContainer));
