import React from 'react';
import { connect } from 'react-redux';
import { Marker, InfoWindow } from '@react-google-maps/api';
import virusImg from '../../assets/virus.svg';
import { Typography } from '@material-ui/core';
import useStyles from './InfoWindowStyles';
import { setActiveMarker } from '../../redux/actions/map-actions';

const MapOutbreakMarker = (props) => {
  const { location, _id, title, date, type, formattedAddress } = props;
  const formattedDate = date.substring(0, 10);
  const classes = useStyles();

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
      icon={virusImg}
      id={_id}
    >
      {props.mapReducer.activeMarkerId === _id && (
        <InfoWindow
          key={`${_id}_infoWindow`}
          position={location}
          onCloseClick={handleInfoWindowClose}
        >
          <div>
            <Typography className={classes.infoWindowType}>
              {type === 'outbreak' ? 'Outbreak' : ''}
            </Typography>
            <Typography variant='h6' className={classes.infoWindowTitle}>
              {title}
            </Typography>
            <Typography
              color='textSecondary'
              variant='caption'
              className={classes.address}
            >
              {formattedAddress}
            </Typography>
            <div style={{ display: 'flex' }}>
              <Typography
                color='textSecondary'
                className={classes.infoWindowLabel}
              >
                Date declared (Y/M/D):
              </Typography>
              <Typography className={classes.infoWindowData}>
                {formattedDate}
              </Typography>
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

export default connect(mapStateToProps, mapDispatchToProps)(MapOutbreakMarker);
