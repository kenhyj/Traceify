import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    width: '100%',
    maxWidth: '330px',
    margin: 'auto',
    marginBottom: '10px',
    transition: '0.3s',
    boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)',
    '&:hover': {
      boxShadow: '0 16px 70px -12.125px rgba(0,0,0,0.3)',
    },
  },
  title: {
    color: '#2196F3',
  },
  dataLabel: {
    marginRight: '10px',
  },
}));

const CardLocationInfo = (props) => {
  const classes = useStyles();
  const formattedDate = props.date.substring(0, 10);

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant='caption'>
          {props.type === 'location' ? 'Possible Exposure' : 'Outbreak'}
        </Typography>
        <Typography variant='h6' gutterBottom className={classes.title}>
          {props.title}
        </Typography>
        <div style={{ display: 'flex' }}>
          <Typography color='textSecondary' className={classes.dataLabel}>
            Date visited (Y/M/D):
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
    </Card>
  );
};

export default CardLocationInfo;
