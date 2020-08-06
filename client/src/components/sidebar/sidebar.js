import React from 'react';
import {
  Chip,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@material-ui/core';
import { ExpandMore, Room, Done } from '@material-ui/icons';
import { connect } from 'react-redux';
import {
  toggleHeatLayer,
  toggleMarkers,
  toggleOutbreakMarkers,
} from '../../redux/actions/map-actions';
import '../../pages/home/home.css';
import { ReactComponent as HeatmapGradient } from '../../assets/heatmap-gradient.svg';
import { ReactComponent as HeatmapGradientSmall } from '../../assets/heatmap-gradient-small.svg';
import { ReactComponent as OutbreakIcon } from '../../assets/virus.svg';
import MapCardList from './MapCardList';
import useStyles from './Sidebar.css';

const Sidebar = (props) => {
  const { showHeatLayer, showMarkers, showOutbreakMarkers } = props.mapReducer;
  const classes = useStyles();
  const toggleHeatView = () => {
    props.dispatch(toggleHeatLayer());
  };

  const toggleMarkersView = () => {
    props.dispatch(toggleMarkers());
  };

  const toggleOutbreakMarkersView = () => {
    props.dispatch(toggleOutbreakMarkers());
  };

  const makeAccordion1 = () => {
    return (
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
    );
  };

  const makeAccordion2 = () => {
    return (
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />} id='accordion-2'>
          <Typography>Filters</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className='sidebar-chips'>
            <Chip
              icon={showMarkers ? <Done style={{ fill: '#2196F3' }} /> : null}
              variant='outlined'
              className={classes.chip}
              label='Possible Exposures'
              onClick={toggleMarkersView}
            />
            <Chip
              icon={showHeatLayer ? <Done style={{ fill: '#2196F3' }} /> : null}
              variant='outlined'
              className={classes.chip}
              label='Heat Map'
              onClick={toggleHeatView}
            />
            <Chip
              icon={
                showOutbreakMarkers ? (
                  <Done style={{ fill: '#2196F3' }} />
                ) : null
              }
              variant='outlined'
              className={classes.chip}
              label='Outbreaks'
              onClick={toggleOutbreakMarkersView}
            />
          </div>
        </AccordionDetails>
      </Accordion>
    );
  };

  return (
    <div className='sidebar'>
      <div className='sidebar-accordion'>
        {makeAccordion1()}
        {makeAccordion2()}
      </div>
      <div className='sidebar-card-list'>
        <MapCardList windowSize={props.windowSize} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    mapReducer: state.map,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showHeatLayer: () => dispatch(toggleHeatLayer()),
    showMarkers: () => dispatch(toggleMarkers()),
    showOutbreakMarkers: () => dispatch(toggleOutbreakMarkers()),
    dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
