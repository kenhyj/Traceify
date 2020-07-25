import React from 'react';
import { Toolbar } from '@material-ui/core';
import { withRouter, Link, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import AdminLogin from '../admin-login/admin-login';
import { useStyles } from './PagesBar.css';

function PagesBar(props) {
  const classes = useStyles();
  const location = useLocation();
  const showAdmin = () => {
    if (props.isLoggedIn)
      return (
        <Link to='/admin' className={classes.pageLink}>
          <span
            className={
              location.pathname === '/admin'
                ? classes.pageSelected
                : classes.pageLinkFancy
            }
          >
            Admin
          </span>
        </Link>
      );
  };

  return (
    <>
      <Toolbar component='nav' variant='dense' className={classes.pagesBar}>
        <Link to='/home' className={classes.pageLink}>
          <span
            className={
              location.pathname === '/home'
                ? classes.pageSelected
                : classes.pageLinkFancy
            }
          >
            Home
          </span>
        </Link>
        <Link to='/symptom-checker' className={classes.pageLink}>
          <span
            className={
              location.pathname === '/symptom-checker'
                ? classes.pageSelected
                : classes.pageLinkFancy
            }
          >
            Symptom Checker
          </span>
        </Link>
        <Link to='/have-i-been-exposed' className={classes.pageLink}>
          <span
            className={
              location.pathname === '/have-i-been-exposed'
                ? classes.pageSelected
                : classes.pageLinkFancy
            }
          >
            Have I been Exposed?
          </span>
        </Link>
        <Link to='/reopen' className={classes.pageLink}>
          <span
            className={
              location.pathname === '/reopen'
                ? classes.pageSelected
                : classes.pageLinkFancy
            }
          >
            Reopening
          </span>
        </Link>
        <Link to='/qna' className={classes.pageLink}>
          <span
            className={
              location.pathname === '/qna'
                ? classes.pageSelected
                : classes.pageLinkFancy
            }
          >
            Q&A
          </span>
        </Link>
        {showAdmin()}
        <AdminLogin />
      </Toolbar>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.website.isLoggedIn,
  };
};

export default withRouter(connect(mapStateToProps)(PagesBar));
