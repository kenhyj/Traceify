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
  btn: {
    fontWeight: '700',
    backgroundColor: '#00a1c0',
    color: '#ffffff',
    display: 'inline-flex',
    alignItems: 'center',
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 2px 2px 0px, rgba(0, 0, 0, 0.24) 0px 0px 1px 0px',
    padding: '0px',
    borderRadius: '3',
    border: '1px solid transparent',
    '&:hover, &.Mui-focusVisible': {
      backgroundColor: '#00a1c0',
      opacity: '0.7',
      cursor: 'pointer',
      transition: '0.7s',
    },
  },
  btnSpan: {
    padding: '0.5rem',
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
        <Button className={classes.btn} onClick={handleClick}>
          <span className={classes.btnSpan}>Find out more</span>
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardTitleDescButton;
