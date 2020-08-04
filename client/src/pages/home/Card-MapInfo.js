import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: 'auto',
    maxWidth: '360px',
    marginTop: '5px',
    marginBottom: '5px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  titleLocation: {
    color: '#2196F3',
  },
});

export default function CardMapInfo(props) {
  const classes = useStyles();
  const { title, time, date, city, type } = props;

  const cardTitle = () => {
    switch (type) {
      case 'location':
        return 'Possible Exposure';
      case 'outbreak':
        return 'Outbreak';
      default:
        return '';
    }
  };

  const formattedDate = date.substring(0, 10);

  return (
    <Card className={classes.root} variant='outlined'>
      <CardContent>
        <Typography
          className={classes.title}
          color='textSecondary'
          gutterBottom
        >
          {cardTitle()}
        </Typography>
        <Typography
          className={classes.titleLocation}
          variant='h6'
          component='h2'
        >
          {title}
        </Typography>
        <Typography className={classes.pos} color='textSecondary'>
          {city}
        </Typography>
        <Typography variant='body2' component='p'>
          Date (YYYY-MM-DD): {formattedDate}
        </Typography>
        {time ? (
          <Typography variant='body2' component='p'>
            Time: {time}
          </Typography>
        ) : null}
      </CardContent>
    </Card>
  );
}
