import React, { Component } from "react";
import { Marker, InfoWindow } from "@react-google-maps/api";
import { connect } from "react-redux";
import MapInfoWindow from "../map/MapInfoWindow";
import * as actions from "../../redux/constants/action-types";
import { showInfoWindow } from "../../redux/actions/map-actions";

class MapMarker extends Component {

    constructor(props){
        super(props);
        this.state = {
            isOpen: false
        }
    }

    handleToggleOpen = () => {
        this.setState({
            isOpen: true
        });
    }

    handleToggleClose = () => {
        this.setState({
            isOpen: false
        });
    }

    render() {
        const { location, id, isInfoWindowVisible, title, numInfected } = this.props;

        const handleMarkerClick = () => {
            this.props.dispatch(showInfoWindow(id));
            console.log("clicked marker ", id);
        };

        return (
            <Marker position={location} onClick={() => this.handleToggleOpen()}>
                { this.state.isOpen && (
                    <InfoWindow position={location} onCloseClick={() => this.handleToggleClose()}>
                        <div>
                            <h1>{title}</h1>
                            <p>Number infected: {numInfected}</p>
                        </div>
                    </InfoWindow>
                )}
            </Marker>

        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        ownProps,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        showInfoWindow: (id) => dispatch(showInfoWindow(id)),
        dispatch,
    };
};

const ConnectedMapMarker = connect(
    mapStateToProps,
    mapDispatchToProps
)(MapMarker);

export default ConnectedMapMarker;
