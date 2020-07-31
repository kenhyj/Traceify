import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardContent,
  Typography,
  Button,
  Hidden,
  Collapse,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

const cardStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '800px',
    [theme.breakpoints.down('md')]: {
      maxWidth: '300px',
    },
    variant: 'outlined',
    margin: 5,
  },
  content: {
    padding: 5,

  },
  contentText: {
    marginTop: '5px',
    fontSize: '0.8rem',
  },
  button: {
    color: 'inherit',
    size: 'small'
  },
  alert:{
    fontSize:'0.8rem'
  }
}));

const CardTitleDescButton = (props) => {
  const classes = cardStyles();

  const { title, descriptions, id, url, severe } = props;

  const handleClick = () => {
    window.open(url);
  };

  const handleSuggestion = ()=> {
    if(title === 'Suggestions'){
      return (
        <Hidden mdDown>
        {descriptions.map((oneDescription) => {
          return <Typography className={classes.contentText}>{oneDescription}</Typography>;
        })}
        </Hidden>
      )
    }
    else return (descriptions.map((oneDescription) => {
      return <Typography className={classes.contentText}>{oneDescription}</Typography>;
    }));
  }

  return (
    <Card className={classes.root} id={id}>
      <CardContent>
        <Alert className={classes.alert}
          severity={severe}
          action={
            <Button className={classes.button} onClick={() => handleClick(url)}>More</Button>
          }>{title}
        </Alert>
        {handleSuggestion()}
      </CardContent>
    </Card>
  );
};

export default CardTitleDescButton;
