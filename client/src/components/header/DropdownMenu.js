import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link, useLocation } from 'react-router-dom';
import {
  Drawer,
  List,
  ListItem,
  makeStyles,
  useTheme,
} from '@material-ui/core';
import AdminLogin from '../admin-login/admin-login';
import DropdownMenuLink from './DropdownMenuLink';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#ffffff',
  },
}));

function DropdownMenu(props) {
  const classes = useStyles();
  const theme = useTheme();
  const { toggleMenu } = props;
  const showAdmin = () => {
    if (props.isLoggedIn)
      return (
        <DropdownMenuLink to='/admin' key='listitem-admin' primary='Admin' onClick={toggleMenu} />
      );
  };

  const drawer = (
    <div>
      <List>
        <DropdownMenuLink to='/home' key='listitem-home' primary='Home' onClick={toggleMenu} />
        <DropdownMenuLink
          to='/symptom-checker'
          key='listitem-symptom-checker'
          primary='Symptom Checker'
          onClick={toggleMenu}
        />
        <DropdownMenuLink
          to='/have-i-been-exposed'
          key='listitem-have-i-been-exposed'
          primary='Have I Been Exposed?'
          onClick={toggleMenu}
        />
        <DropdownMenuLink
          to='/reopen'
          key='listitem-reopening'
          primary='Reopening'
          onClick={toggleMenu}
        />
        <DropdownMenuLink to='/qna' key='listitem-qna' primary='Q&A' onClick={toggleMenu} />
        {showAdmin()}
        <ListItem>
          <AdminLogin />
        </ListItem>
      </List>
    </div>
  );

  return <>{drawer}</>;
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.website.isLoggedIn,
  };
};

export default withRouter(connect(mapStateToProps)(DropdownMenu));
