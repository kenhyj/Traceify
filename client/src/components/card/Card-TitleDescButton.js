import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardContent,
  Typography,
  Hidden,
  IconButton,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import cardStyles from './Card-TitleDescButton.css';

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
            <IconButton color= 'inherit' onClick={() => handleClick(url)}>More</IconButton>
          }>{title}
        </Alert>
        {descriptions.map((oneDescription) => {
          return <Typography className={classes.contentText}>{oneDescription}</Typography>;
        })}
      </CardContent>
    </Card>
  );
};

export default CardTitleDescButton;
