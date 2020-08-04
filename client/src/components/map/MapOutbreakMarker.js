import React, { useState } from 'react';
import { Marker, InfoWindow } from '@react-google-maps/api';
import virusImg from '../../assets/virus.svg';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  infoWindowTitle: {
    textAlign: 'center',
    color: '#2196F3',
  },
  infoWindowLabel: {
    marginRight: '10px',
  },
  infoWindowType: {
    fontSize: '12px',
    textAlign: 'center',
  },
}));

const MapOutbreakMarker = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { location, _id, title, date, type } = props;
  const formattedDate = date.substring(0, 10);
  const classes = useStyles();

  const handleToggleOpen = () => {
    setIsOpen(true);
  };

  const handleToggleClose = () => {
    setIsOpen(false);
  };

  return (
    <Marker
      position={location}
      onClick={handleToggleOpen}
      icon={virusImg}
      id={_id}
    >
      {isOpen && (
        <InfoWindow
          key={`${_id}_infoWindow`}
          position={location}
          onCloseClick={handleToggleClose}
        >
          <div>
            <Typography className={classes.infoWindowType}>
              {type === 'outbreak' ? 'Outbreak' : ''}
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

export default MapOutbreakMarker;
