import React, { useState, useEffect } from 'react';
import { GoogleMap, MarkerClusterer, InfoWindow } from '@react-google-maps/api';
import { connect } from 'react-redux';
import styles from './MapContainer.css';
import MapMarker from '../../../components/map/MapMarker';
import MapOutbreakMarker from '../../../components/map/MapOutbreakMarker';
import MapHeatLayer from '../../../components/map/MapHeatLayer';
import { withGoogleMaps } from './MapHOC';
import { fetchLocations } from '../../../redux/actions/map-actions';
import '../home.css';

const MapContainer = (props) => {
  const [map, setMap] = useState(null);
  const [zoom, setZoom] = useState(11);
  const [clusterCenter, setClusterCenter] = useState(null);
  const [clusterInfoWindowIsOpen, setClusterInfoWindowOpen] = useState(false);
  const [clusterMarkerData, setClusterMarkerData] = useState([]);
  const { data, outbreaks, dispatch } = props;
  const { showMarkers, showOutbreakMarkers } = props.mapReducer;
  const clustererOptions = {
    imagePath:
      'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m',
  };

  useEffect(() => {
    dispatch(fetchLocations());
  }, []);

  const handleClusterClick = (cluster) => {
    const markers = cluster.getMarkers();
    console.log(markers);
    const markerTitleIdArray = [];
    const markerDataArray = [];
    for (const m of markers) {
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
  };

  const handleZoomChange = () => {
    if (map !== null) {
      setZoom(map.getZoom());
    }
  };

  return (
    <>
      <GoogleMap
        onLoad={(currentMap) => {
          handleMapLoad(currentMap);
        }}
        mapContainerStyle={styles.mapContainerStyle}
        center={styles.center}
        zoom={zoom}
        options={{ styles: styles.mapStyle }}
        onZoomChanged={() => {
          handleZoomChange();
        }}
      >
        {showMarkers && (
          <MarkerClusterer
            options={clustererOptions}
            minimumClusterSize={2}
            onClick={(cluster) => handleClusterClick(cluster)}
          >
            {(clusterer) =>
              data.map((marker) => (
                <MapMarker key={marker._id} clusterer={clusterer} {...marker} />
              ))
            }
          </MarkerClusterer>
        )}

        {clusterInfoWindowIsOpen && (
          <InfoWindow
            key={`${clusterCenter.toString()}_cluster`}
            position={clusterCenter}
            onCloseClick={() => setClusterInfoWindowOpen(false)}
          >
            <div style={{ whiteSpace: 'pre' }}>
              <h1>{clusterMarkerData[0].title}</h1>
              Total possible exposures: {clusterMarkerData.length}
              {'\n'}
              {clusterMarkerData.map((markerData) => (
                <p key={`${markerData._id}_infoWindow_p`}>
                  Time visited: {markerData.time}
                  {'\n'}
                  Date visited (Y/M/D): {markerData.date.substring(0, 10)}
                </p>
              ))}
            </div>
          </InfoWindow>
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
    dispatch,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withGoogleMaps(MapContainer));
