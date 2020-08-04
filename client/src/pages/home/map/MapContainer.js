import React, { useState, useEffect } from 'react';
import { GoogleMap, MarkerClusterer, InfoWindow } from '@react-google-maps/api';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import styles from './MapContainer.css';
import MapMarker from '../../../components/map/MapMarker';
import MapOutbreakMarker from '../../../components/map/MapOutbreakMarker';
import MapHeatLayer from '../../../components/map/MapHeatLayer';
import { withGoogleMaps } from './MapHOC';
import {
  fetchLocations,
  setGlobalMap,
} from '../../../redux/actions/map-actions';
import '../home.css';

const useStyles = makeStyles((theme) => ({
  infoWindowTitle: {
    textAlign: 'center',
    color: '#2196F3',
  },
  infoWindowLabel: {
    marginRight: '10px',
  },
  infoWindowType: {
    fontSize: '12px',
    textAlign: 'center',
  },
  infoWindowDataDiv: {
    marginBottom: '5px',
  },
  infoWindowTotal: {
    marginBottom: '10px',
  },
}));

const MapContainer = (props) => {
  const [map, setMap] = useState(null);
  const [zoom, setZoom] = useState(11);
  const [clusterCenter, setClusterCenter] = useState(null);
  const [clusterInfoWindowIsOpen, setClusterInfoWindowOpen] = useState(false);
  const [clusterMarkerData, setClusterMarkerData] = useState([]);
  const { data, outbreaks, dispatch } = props;
  const { showMarkers, showOutbreakMarkers } = props.mapReducer;
  const classes = useStyles();
  const clustererOptions = {
    imagePath:
      'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m',
  };

  useEffect(() => {
    dispatch(fetchLocations());
  }, []);

  const handleClusterClick = (cluster) => {
    const clusterMarkers = cluster.getMarkers();
    const markerTitleIdArray = [];
    const markerDataArray = [];
    for (const m of clusterMarkers) {
      markerTitleIdArray.push(m.getTitle());
      const markerData = data.find((element) => {
        return m.getTitle() === element._id;
      });
      markerDataArray.push(markerData);
    }
    if (zoom >= 20) {
      setClusterCenter(cluster.getCenter().toJSON());
      setClusterMarkerData(markerDataArray);
      setClusterInfoWindowOpen(true);
    }
  };

  const handleMapLoad = (currentMap) => {
    setMap(currentMap);
    dispatch(setGlobalMap(currentMap));
  };

  const handleZoomChange = () => {
    if (map) {
      setZoom(map.getZoom());
    }
  };

  return (
    <>
      <GoogleMap
        onLoad={(currentMap) => handleMapLoad(currentMap)}
        mapContainerStyle={styles.mapContainerStyle}
        center={styles.center}
        zoom={zoom}
        options={{ styles: styles.mapStyle }}
        onZoomChanged={handleZoomChange}
      >
        <MarkerClusterer
          options={clustererOptions}
          minimumClusterSize={2}
          onClick={(cluster) => handleClusterClick(cluster)}
        >
          {(clusterer) =>
            data.map(
              (marker) =>
                showMarkers && (
                  <MapMarker
                    key={marker._id}
                    clusterer={clusterer}
                    isVisible={showMarkers}
                    {...marker}
                  />
                )
            )
          }
        </MarkerClusterer>

        {clusterInfoWindowIsOpen && (
          <InfoWindow
            key={`${clusterCenter.toString()}_cluster`}
            position={clusterCenter}
            onCloseClick={() => setClusterInfoWindowOpen(false)}
          >
            <div>
              <Typography className={classes.infoWindowType}>
                Possible Exposures
              </Typography>
              <Typography
                variant='h6'
                gutterBottom
                className={classes.infoWindowTitle}
              >
                {clusterMarkerData[0].title}
              </Typography>
              <div
                className={classes.infoWindowTotal}
                style={{ display: 'flex' }}
              >
                <Typography
                  color='textSecondary'
                  className={classes.infoWindowLabel}
                >
                  Total possible exposures:
                </Typography>
                <Typography className={classes.infoWindowData}>
                  {clusterMarkerData.length}
                </Typography>
              </div>
              {clusterMarkerData.map((markerData) => (
                <div
                  className={classes.infoWindowDataDiv}
                  key={`${markerData._id}_infoWindow_data_div`}
                >
                  <div style={{ display: 'flex' }}>
                    <Typography
                      color='textSecondary'
                      className={classes.infoWindowLabel}
                    >
                      Date visited (Y/M/D):
                    </Typography>
                    <Typography className={classes.infoWindowData}>
                      {markerData.date.substring(0, 10)}
                    </Typography>
                  </div>
                  <div style={{ display: 'flex' }}>
                    <Typography
                      color='textSecondary'
                      className={classes.infoWindowLabel}
                    >
                      Time visited:
                    </Typography>
                    <Typography className={classes.infoWindowData}>
                      {markerData.time}
                    </Typography>
                  </div>
                </div>
              ))}
            </div>
          </InfoWindow>
        )}

        {outbreaks.map(
          (marker) =>
            showOutbreakMarkers && (
              <MapOutbreakMarker
                key={marker._id}
                visible={showOutbreakMarkers}
                {...marker}
              />
            )
        )}

        <MapHeatLayer />
      </GoogleMap>
    </>
  );
};

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
    setGlobalMap: (map) => dispatch(setGlobalMap(map)),
    dispatch,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withGoogleMaps(MapContainer));
