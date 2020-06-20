/* global google */
import React, { Component } from 'react';
import { HeatmapLayer } from "@react-google-maps/api";
import { connect } from 'react-redux';
// const google = window.google;

const initialHeatLocations = [
    new google.maps.LatLng(49.2589731,-123.0389234),
];

class MapHeatLayer extends Component {
    render() {
        // console.log(this.props.heatData);
        return (
            <HeatmapLayer data={initialHeatLocations}></HeatmapLayer>
        );
    }
}

export default MapHeatLayer;

// const mapStateToProps = (state, ownProps) => {
//     return {
//         map: state.map,
//     };
// };

// const mapDispatchToProps = (dispatch) => {
//     return {
//         dispatch,
//     };
// };

// const ConnectedMapHeatLayer = connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(MapHeatLayer);

// export default ConnectedMapHeatLayer;
