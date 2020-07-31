import React, { Component } from 'react';
import { GoogleMap, MarkerClusterer, InfoWindow } from '@react-google-maps/api';
import { connect } from 'react-redux';
import styles from './MapContainer.css';
import MapMarker from '../../../components/map/MapMarker';
import MapOutbreakMarker from '../../../components/map/MapOutbreakMarker';
import MapHeatLayer from '../../../components/map/MapHeatLayer';
import { withGoogleMaps } from './MapHOC';
import { fetchLocations } from '../../../redux/actions/map-actions';
import '../home.css';

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clusterInfoIsOpen: false,
    };
  }

  componentDidMount() {
    this.loadData();
  }

  handleToggleOpen = () => {
    this.setState({
      clusterInfoIsOpen: true,
    });
  };

  handleToggleClose = () => {
    this.setState({
      clusterInfoIsOpen: false,
    });
  };

  loadData() {
    this.props.dispatch(fetchLocations());
  }

  render() {
    const { data, outbreaks } = this.props;
    const { showMarkers, showOutbreakMarkers } = this.props.mapReducer;
    const options = {
      imagePath:
        'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m',
    };

    const handleClusterClick = (cluster) => {
      const markers = cluster.getMarkers();
      // console.log('cluster markers?', markers);
      // TODO: find out how to access google map's current zoom level
      const markerInfoArray = [];
      for (const m of markers) {
        markerInfoArray.push(m.getPosition().toString());
      }
      this.handleToggleOpen();
    };

    return (
      <>
        <GoogleMap
          mapContainerStyle={styles.mapContainerStyle}
          center={styles.center}
          zoom={styles.zoom}
          options={{ styles: styles.mapStyle }}
        >
          {showMarkers && (
            <MarkerClusterer
              options={options}
              minimumClusterSize={2}
              onClick={(cluster) => handleClusterClick(cluster)}
            >
              {(clusterer) =>
                data.map((marker) => (
                  <MapMarker
                    key={marker._id}
                    clusterer={clusterer}
                    {...marker}
                  />
                ))
              }
            </MarkerClusterer>
          )}

          {outbreaks.map(
            (marker) =>
              showOutbreakMarkers && (
                <MapOutbreakMarker key={marker._id} {...marker} />
              )
          )}

          <MapHeatLayer />
        </GoogleMap>
      </>
    );
  }
}

const mapStateToProps = (state) => {
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
