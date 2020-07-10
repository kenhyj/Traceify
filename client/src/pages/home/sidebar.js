import React, { Component } from 'react';
import { Chip } from '@material-ui/core/';
import { connect } from 'react-redux';
import { showHeatLayer, showMarkers } from '../../redux/actions/map-actions';
import './home.css';

class Sidebar extends Component {
  render() {
    const toggleHeat = () => {
      this.props.dispatch(showHeatLayer());
    };

    const toggleMarkers = () => {
      this.props.dispatch(showMarkers());
    };

    return (
      <div className="sidebar">
          <div className="sidebar-chips">
              <h2>Toggle Views</h2>
            <Chip label='Heat Map' onClick={toggleHeat} />
            <Chip label='Markers' onClick={toggleMarkers}></Chip>
          </div>
          <div className="sidebar-legend">
              <h2>Legend</h2>
            one
            two
            heatmap high to low = red to green
          </div>
        
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

const ConnectedSidebar = connect(mapStateToProps, mapDispatchToProps)(Sidebar);

export default ConnectedSidebar;
