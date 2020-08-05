import React, { useState, useEffect } from 'react';
import { GoogleMap, MarkerClusterer, InfoWindow } from '@react-google-maps/api';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';
import styles from './MapContainer.css';
import MapMarker from '../../../components/map/MapMarker';
import MapOutbreakMarker from '../../../components/map/MapOutbreakMarker';
import MapHeatLayer from '../../../components/map/MapHeatLayer';
import { withGoogleMaps } from './MapHOC';
import {
  fetchLocations,
  setGlobalMap,
  setVisibleMarkers,
  setActiveMarker,
} from '../../../redux/actions/map-actions';
import '../home.css';
import useStyles from './ClusterInfoWindowStyles';

const MapContainer = (props) => {
  const [map, setMap] = useState(null);
  const [zoom, setZoom] = useState(11);
  const [clusterCenter, setClusterCenter] = useState(null);
  const [clusterInfoWindowIsOpen, setClusterInfoWindowOpen] = useState(false);
  const [clusterMarkerData, setClusterMarkerData] = useState([]);
  const [globalMarkers, setGlobalMarkers] = useState([]);
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

  useEffect(() => {
    const newArray = [...data, ...outbreaks];
    setGlobalMarkers(newArray);
  }, [data, outbreaks]);

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

  const onMapIdle = () => {
    const visibleMarkerArray = getVisibleMarkers();
    dispatch(setVisibleMarkers(visibleMarkerArray));
  };

  const handleMapClick = () => {
    setClusterInfoWindowOpen(false);
    dispatch(setActiveMarker(''));
  };

  const getVisibleMarkers = () => {
    const currVisibleMarkers = [];
    const bounds = map.getBounds();
    for (let i = 0; i < globalMarkers.length; i++) {
      const { lat } = globalMarkers[i].location;
      const { lng } = globalMarkers[i].location;
      // eslint-disable-next-line no-undef
      const pos = new google.maps.LatLng(lat, lng);
      if (bounds.contains(pos) === true) {
        const visibleMarker = globalMarkers[i];
        currVisibleMarkers.push(visibleMarker);
      }
    }
    return currVisibleMarkers;
  };

  const createMapMarkerObjects = (clusterer) => {
    const mapMarkers = data.map((marker) => (
      <MapMarker
        key={marker._id}
        clusterer={clusterer}
        isVisible={showMarkers}
        {...marker}
      />
    ));
    return mapMarkers;
  };

  const createClusterInfoWindow = () => {
    return (
      <>
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
        ;
      </>
    );
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
        onIdle={onMapIdle}
        onClick={handleMapClick}
      >
        <MarkerClusterer
          options={clustererOptions}
          minimumClusterSize={2}
          onClick={(cluster) => handleClusterClick(cluster)}
        >
          {(clusterer) => showMarkers && createMapMarkerObjects(clusterer)}
        </MarkerClusterer>

        {showMarkers && clusterInfoWindowIsOpen && createClusterInfoWindow()}

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
    setVisibleMarkers: (markers) => dispatch(setVisibleMarkers(markers)),
    setActiveMarker: (id) => dispatch(setActiveMarker(id)),
    dispatch,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withGoogleMaps(MapContainer));
