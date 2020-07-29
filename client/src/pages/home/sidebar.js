import React from 'react';
import {
  Chip,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import { connect } from 'react-redux';
import {
  showHeatLayer,
  showMarkers,
  showOutbreakMarkers,
} from '../../redux/actions/map-actions';
import InformationList from './InformationList';
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
              <HeatmapGradient />
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
                  <Grid item xs={6}>
                    <OutbreakIcon />
                  </Grid>
                  <Grid item xs={6}>
                    <div>Outbreak</div>
                  </Grid>
                  <Grid item xs={6}>
                    <DataMarker />
                  </Grid>
                  <Grid item xs={6}>
                    <div>Data Point</div>
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
            <Chip
              // className={showMarkers ? classes.chipSelected : classes.chip}
              clickable
              label='All Data Points'
              onClick={toggleMarkers}
            />
            <Chip
              // className={showHeatLayer ? classes.chipSelected : classes.chip}
              label='Heat Map'
              onClick={toggleHeat}
            />
            <Chip
              // className={showOutbreakMarkers ? classes.chipSelected : classes.chip}
              label='Outbreaks'
              onClick={toggleOutbreakMarkers}
            />
          </div>
        </AccordionDetails>
      </Accordion>
      {/* <InformationList></InformationList> */}
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
