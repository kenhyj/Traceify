import React from 'react';
import { connect } from 'react-redux';
import {
  Card,
  CardContent,
  CardActionArea,
  Typography,
  Divider,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { setPanToLocation } from '../../redux/actions/map-actions';

const useStyles = makeStyles((theme) => ({
  card: {
    width: '100%',
    maxWidth: '95%',
    margin: 'auto',
    marginBottom: '8px',
    marginTop: '8px',
    transition: '0.3s',
    boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)',
    '&:hover': {
      boxShadow: '0 16px 70px -12.125px #2196F3',
    },
  },
  title: {
    color: '#2196F3',
  },
  dataLabel: {
    marginRight: '10px',
  },
  divider: {
    marginTop: '5px',
    marginBottom: '5px',
  },
}));

const CardLocationInfo = (props) => {
  const classes = useStyles();
  const formattedDate = props.date.substring(0, 10);

  const handleClick = () => {
    props.dispatch(setPanToLocation(props.location));
  };

  return (
    <Card className={classes.card}>
      <CardActionArea onClick={handleClick} disableRipple>
        <CardContent>
          <Typography variant='caption'>
            {props.type === 'location' ? 'Possible Exposure' : 'Outbreak'}
          </Typography>
          <Typography variant='h6' className={classes.title}>
            {props.title}
          </Typography>
          <Typography color='textSecondary' variant='caption'>
            {props.formattedAddress}
          </Typography>
          <Divider variant='middle' className={classes.divider} />
          <div style={{ display: 'flex' }}>
            <Typography color='textSecondary' className={classes.dataLabel}>
              Date {props.type === 'location' ? 'visited' : 'declared'} (Y/M/D):
            </Typography>
            <Typography className={classes.dataContent}>
              {formattedDate}
            </Typography>
          </div>
          {props.time && (
            <div style={{ display: 'flex' }}>
              <Typography color='textSecondary' className={classes.dataLabel}>
                Time visited:
              </Typography>
              <Typography className={classes.dataContent}>
                {props.time}
              </Typography>
            </div>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

const mapStateToProps = (state) => {
  return {
    mapReducer: state.map,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPanToLocation: (obj) => dispatch(setPanToLocation(obj)),
    dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardLocationInfo);
