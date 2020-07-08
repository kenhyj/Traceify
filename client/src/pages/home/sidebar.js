import React, { Component } from 'react';
import { Chip } from '@material-ui/core/';
import { connect } from 'react-redux';
import { showHeatLayer, showMarkers } from '../../redux/actions/map-actions';

class Sidebar extends Component {
    render() {
        const toggleHeat = () => {
            this.props.dispatch(showHeatLayer());
        };

        const toggleMarkers = () => {
            this.props.dispatch(showMarkers());
        };

        return (
            <div>
                <Chip label="Heat Map" onClick={toggleHeat}></Chip>
                <Chip label="Markers" onClick={toggleMarkers}></Chip>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        map: state.map,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        showHeatLayer: () => dispatch(showHeatLayer()),
        showMarkers: () => dispatch(showMarkers()),
        dispatch,
    };
};

const ConnectedSidebar = connect(
    mapStateToProps,
    mapDispatchToProps
)(Sidebar);

export default ConnectedSidebar;