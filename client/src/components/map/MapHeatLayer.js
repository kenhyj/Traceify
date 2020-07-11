/* global google */
import React, { Component } from 'react';
import { HeatmapLayer } from '@react-google-maps/api';
import { connect } from 'react-redux';

class MapHeatLayer extends Component {
  render() {
    const { data, showHeatLayer } = this.props.map;
    // console.log(markers);

    return (
      showHeatLayer && (
        <HeatmapLayer
          data={data.map((m) => ({
            location: new google.maps.LatLng(m.location.lat, m.location.lng),
            weight: m.numInfected,
          }))}
          options={
            {radius: 30}
          }
        ></HeatmapLayer>
      )
    );
  }
}

// export default MapHeatLayer;

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
