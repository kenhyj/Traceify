import React from 'react';
import { connect } from 'react-redux';
import { Marker, InfoWindow } from '@react-google-maps/api';
import { Typography } from '@material-ui/core';
import useStyles from './InfoWindowStyles';
import { setActiveMarker } from '../../redux/actions/map-actions';

const MapMarker = (props) => {
  const { location, _id, title, time, date, clusterer, type } = props;
  const classes = useStyles();
  const formattedDate = date.substring(0, 10);
  const customIcon = {
    path:
      'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z',
    fillColor: '#2196F3',
    fillOpacity: 1,
    scale: 1.5,
    strokeColor: '#FFFFFF',
    strokeWeight: 2,
    strokeOpacity: 0.8,
    // eslint-disable-next-line no-undef
    anchor: new google.maps.Point(13, 17),
  };

  const handleInfoWindowOpen = () => {
    props.dispatch(setActiveMarker(_id));
  };

  const handleInfoWindowClose = () => {
    props.dispatch(setActiveMarker(''));
  };

  return (
    <Marker
      position={location}
      onClick={handleInfoWindowOpen}
      icon={customIcon}
      id={_id}
      clusterer={clusterer}
      title={_id}
      // eslint-disable-next-line no-undef
      animation={google.maps.Animation.DROP}
    >
      {props.mapReducer.activeMarkerId === _id && (
        <InfoWindow
          key={`${_id}_infoWindow`}
          position={location}
          onCloseClick={handleInfoWindowClose}
        >
          <div>
            <Typography className={classes.infoWindowType}>
              {type === 'location' ? 'Possible Exposure' : ''}
            </Typography>
            <Typography
              variant='h6'
              gutterBottom
              className={classes.infoWindowTitle}
            >
              {title}
            </Typography>
            <div style={{ display: 'flex' }}>
              <Typography
                color='textSecondary'
                className={classes.infoWindowLabel}
              >
                Date visited (Y/M/D):
              </Typography>
              <Typography className={classes.infoWindowData}>
                {formattedDate}
              </Typography>
            </div>
            <div style={{ display: 'flex' }}>
              <Typography
                color='textSecondary'
                className={classes.infoWindowLabel}
              >
                Time visited:
              </Typography>
              <Typography className={classes.infoWindowData}>{time}</Typography>
            </div>
          </div>
        </InfoWindow>
      )}
    </Marker>
  );
};

const mapStateToProps = (state) => {
  return {
    mapReducer: state.map,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setActiveMarker: (_id) => dispatch(setActiveMarker(_id)),
    dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MapMarker);
