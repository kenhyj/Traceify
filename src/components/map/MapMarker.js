import React, { Component } from "react";
import { Marker } from "@react-google-maps/api";
import { connect } from 'react-redux';

class MapMarker extends Component {
    render() {
        const { location } = this.props;

        return (
            <Marker position={location} />
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log('map marker component state: ', ownProps);
    return {
        ownProps
    };
};

const ConnectedMapMarker = connect(mapStateToProps)(MapMarker);

export default ConnectedMapMarker;