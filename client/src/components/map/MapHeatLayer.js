/* global google */
import React, { Component } from 'react';
import { HeatmapLayer } from "@react-google-maps/api";
import { connect } from 'react-redux';

class MapHeatLayer extends Component {

    render() {
        const { markers, showHeatLayer } = this.props.map; 
        // console.log(markers);

        return (
            showHeatLayer && <HeatmapLayer 
                data={markers.map(m => (
                    { location: new google.maps.LatLng(m.location.lat, m.location.lng), weight: m.numInfected }
                ))}
            >
            </HeatmapLayer>
        );
    }
};

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

const ConnectedMapHeatLayer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MapHeatLayer);

export default ConnectedMapHeatLayer;
