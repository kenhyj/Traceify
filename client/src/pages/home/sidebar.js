import React, { Component } from 'react';
import { Chip, Grid, Paper } from '@material-ui/core';
import { connect } from 'react-redux';
import {
  showHeatLayer,
  showMarkers,
  showOutbreakMarkers,
} from '../../redux/actions/map-actions';
import './home.css';
import { ReactComponent as HeatmapGradient } from '../../assets/heatmap-gradient.svg';
import { ReactComponent as OutbreakIcon } from '../../assets/virus.svg';
import { ReactComponent as DataMarker } from '../../assets/blue-pin.svg';

const Sidebar = (props) => {
  const toggleHeat = () => {
    props.dispatch(showHeatLayer());
  };

  const toggleMarkers = () => {
    props.dispatch(showMarkers());
  };

  const toggleOutbreakMarkers = () => {
    props.dispatch(showOutbreakMarkers());
  };

  return (
    <div className='sidebar'>
      <div className='sidebar-chips'>
      <div className='sidebar-title'>Toggle Views</div>
        <Chip label='All Data Points' onClick={toggleMarkers} />
        <Chip label='Heat Map' onClick={toggleHeat} />
        <Chip label='Outbreaks' onClick={toggleOutbreakMarkers} />
      </div>
      <div className='sidebar-legend'>
        <div className='sidebar-title'>Legend</div>
        <div className='sidebar-legend-heatmap'>
          <p><b>Heatmap</b></p>
          <HeatmapGradient />
          <div className='sidebar-legend-heatmap-words'>
            <div className='sidebar-legend-heatmap-low'>low</div>
            <div className='sidebar-legend-heatmap-high'>high</div>
          </div>
        </div>
        <div className='sidebar-legend-markers'>
          <p><b>Markers</b></p>
          <div>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <OutbreakIcon />
              </Grid>
              <Grid item xs={6}>
                <div>
                  Outbreak
                </div>
              </Grid>
              <Grid item xs={6}>
                <DataMarker />
              </Grid>
              <Grid item xs={6}>
                <div>
                  Data Point
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    map: state.map,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showHeatLayer: () => dispatch(showHeatLayer()),
    showMarkers: () => dispatch(showMarkers()),
    showOutbreakMarkers: () => dispatch(showOutbreakMarkers()),
    dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
