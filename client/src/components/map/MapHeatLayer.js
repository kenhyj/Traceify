/* global google */
import React from 'react';
import { HeatmapLayer } from '@react-google-maps/api';
import { connect } from 'react-redux';

function MapHeatLayer(props) {
  const { data, showHeatLayer } = props.map;

  return (
    showHeatLayer && (
      <HeatmapLayer
        data={data.map((m) => ({
          location: new google.maps.LatLng(m.location.lat, m.location.lng),
          weight: m.numInfected,
        }))}
        options={{ radius: 30 }}
      />
    )
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    map: state.map,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MapHeatLayer);
