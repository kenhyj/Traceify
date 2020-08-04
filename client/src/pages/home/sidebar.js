import React from 'react';
import {
  Chip,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@material-ui/core';
import { ExpandMore, Room } from '@material-ui/icons';
import { connect } from 'react-redux';
import {
  showHeatLayer,
  showMarkers,
  showOutbreakMarkers,
} from '../../redux/actions/map-actions';
import './home.css';
import { ReactComponent as HeatmapGradient } from '../../assets/heatmap-gradient.svg';
import { ReactComponent as HeatmapGradientSmall } from '../../assets/heatmap-gradient-small.svg';
import { ReactComponent as OutbreakIcon } from '../../assets/virus.svg';

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
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />} id='accordion-1'>
          <Typography>Legend</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className='sidebar-legend'>
            <div className='sidebar-legend-heatmap'>
              <p>
                <b>Heatmap</b>
              </p>
              {props.windowSize.width >= 401 ? (
                <HeatmapGradient />
              ) : (
                <HeatmapGradientSmall />
              )}
              <div className='sidebar-legend-heatmap-words'>
                <div className='sidebar-legend-heatmap-low'>low</div>
                <div className='sidebar-legend-heatmap-high'>high</div>
              </div>
            </div>
            <div className='sidebar-legend-markers'>
              <p>
                <b>Markers</b>
              </p>
              <div>
                <Grid container spacing={2}>
                  <Grid item xs={2}>
                    <OutbreakIcon />
                  </Grid>
                  <Grid item xs={10}>
                    <div>Outbreak</div>
                  </Grid>
                  <Grid item xs={2}>
                    <Room style={{ color: '#2196F3' }} />
                  </Grid>
                  <Grid item xs={10}>
                    <div>Possible exposure</div>
                  </Grid>
                </Grid>
              </div>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />} id='accordion-2'>
          <Typography>Filters</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className='sidebar-chips'>
            <Chip label='All Possible Exposures' onClick={toggleMarkers} />
            <Chip label='Heat Map' onClick={toggleHeat} />
            <Chip label='Outbreaks' onClick={toggleOutbreakMarkers} />
          </div>
        </AccordionDetails>
      </Accordion>
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
