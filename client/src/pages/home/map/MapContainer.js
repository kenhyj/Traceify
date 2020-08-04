import React, { useState, useEffect } from 'react';
import { GoogleMap, MarkerClusterer, InfoWindow } from '@react-google-maps/api';
import { connect } from 'react-redux';
import styles from './MapContainer.css';
import MapMarker from '../../../components/map/MapMarker';
import MapOutbreakMarker from '../../../components/map/MapOutbreakMarker';
import MapHeatLayer from '../../../components/map/MapHeatLayer';
import { withGoogleMaps } from './MapHOC';
import {
  fetchLocations,
  setGlobalMap,
  setVisibleMarkers,
} from '../../../redux/actions/map-actions';
import '../home.css';

const MapContainer = (props) => {
  const [map, setMap] = useState(null);
  const [zoom, setZoom] = useState(11);
  const [clusterCenter, setClusterCenter] = useState(null);
  const [clusterInfoWindowIsOpen, setClusterInfoWindowOpen] = useState(false);
  const [clusterMarkerData, setClusterMarkerData] = useState([]);
  const { data, outbreaks, dispatch } = props;
  const { showMarkers, showOutbreakMarkers, globalMarkers } = props.mapReducer;
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

  const handleMapLoad = async (currentMap) => {
    const mapIsInitialized = await dispatchMapInit(currentMap);
    mapIsInitialized && makeVisibleMarkersArray();
  };

  const dispatchMapInit = (currMap) => {
    setMap(currMap);
    dispatch(setGlobalMap(currMap));
    return map ? true : false;
  };

  const handleZoomChange = () => {
    if (map) {
      setZoom(map.getZoom());
    }
  };

  const onMapIdle = () => {
    if (map) {
      makeVisibleMarkersArray();
    }
  };

  const makeVisibleMarkersArray = () => {
    let visibleMarkers = [];
    const bounds = map.getBounds();
    for (let i = 0; i < globalMarkers.length; i++) {
      const { lat } = globalMarkers[i].props.location;
      const { lng } = globalMarkers[i].props.location;
      // eslint-disable-next-line no-undef
      const pos = new google.maps.LatLng(lat, lng);
      if (bounds.contains(pos) === true) {
        let visibleMarker;
        if (globalMarkers[i].props.type === 'location') {
          visibleMarker = data.find((element) => {
            return globalMarkers[i].props._id === element._id;
          });
        } else if (globalMarkers[i].props.type === 'outbreak') {
          visibleMarker = outbreaks.find((element) => {
            return globalMarkers[i].props._id === element._id;
          });
        }
        if (visibleMarker !== undefined) {
          visibleMarkers.push(visibleMarker);
        }
      }
    }
    dispatch(setVisibleMarkers(visibleMarkers));
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
            <div style={{ whiteSpace: 'pre' }}>
              <h1>{clusterMarkerData[0].title}</h1>
              Total possible exposures: {clusterMarkerData.length}
              {'\n'}
              {clusterMarkerData.map((markerData) => (
                <p key={`${markerData._id}_infoWindow_p`}>
                  Date visited (Y/M/D): {markerData.date.substring(0, 10)}
                  {'\n'}
                  Time visited: {markerData.time}
                </p>
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
    setVisibleMarkers: (markers) => dispatch(setVisibleMarkers(markers)),
    dispatch,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withGoogleMaps(MapContainer));
