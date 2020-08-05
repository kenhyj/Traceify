import React, { forwardRef } from 'react';
import { useLoadScript } from '@react-google-maps/api';
import { CircularProgress, Typography } from '@material-ui/core';

const API_KEY = `${process.env.REACT_APP_GOOGLE_API_KEY}`;

const googlemapsLibraries = ['drawing', 'visualization', 'places'];
export function withGoogleMaps(Component) {
  return forwardRef((props, ref) => {
    const { isLoaded } = useLoadScript({
      googleMapsApiKey: API_KEY,
      libraries: googlemapsLibraries,
    });
    if (isLoaded) {
      return <Component {...props} ref={ref} />;
    }
    return (
      <div
        style={{
          display: 'flex',
          alignContent: 'center',
          justifyContent: 'center',
        }}
      >
        <CircularProgress style={{ color: '#e2f2ff' }} />
        <br />
        <Typography variant='h5' style={{ color: '#f2f4f7' }}>
          Loading map...
        </Typography>
      </div>
    );
  });
}
