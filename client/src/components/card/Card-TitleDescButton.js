import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@material-ui/core';

const cardStyles = makeStyles({
  root: {
    maxWidth: 800, // TODO: make responsive
    variant: 'outlined',
    margin: 10,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 700,
  },
});

const CardTitleDescButton = (props) => {
  const classes = cardStyles();

  const { title, descriptions, id, url } = props;

  const handleClick = () => {
    window.open(url);
  };

  return (
    <Card className={classes.root} id={id}>
      <CardContent>
        <Typography className={classes.title}>{title}</Typography>
        {descriptions.map((oneDescription) => {
          return <Typography>{oneDescription}</Typography>;
        })}
      </CardContent>
      <CardActions>
        <Button size="large" onClick={handleClick}>
          Find out more
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardTitleDescButton;
