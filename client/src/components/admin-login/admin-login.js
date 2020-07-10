import React from 'react';
import { connect } from 'react-redux';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { useHistory } from "react-router-dom";
import { login, logout } from '../../redux/actions/website-actions';
import axios from 'axios';
import { Button, makeStyles } from '@material-ui/core';

const CLIENT_ID =
  '319564492744-lpvaf4jeab014b5rrh21qv0ak1aab997.apps.googleusercontent.com';

const AdminLogin = (props) => {
  const login = (response) => {
    if (response.wc.access_token) {
      axios
        .get(`/admins/${response.profileObj.email}`)
        .then(() =>
          props.login(response.wc.access_token, response.profileObj.name)
        )
        .catch(() => handleLoginFailure());
    }
  };

  const handleLoginFailure = () => {
    alert('Failed to log in');
  };

  const handleLogoutFailure = () => {
    alert('Failed to log out');
  };

  const adminStyles = makeStyles((theme) => ({
    btnAuth: {
      fontFamily: 'Open Sans, sans-serif',
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
    btnAuthSpan: {
      padding: '10px',
    },
  }));

  const classes = adminStyles();

  return (
    <div>
      {props.isLoggedIn ? (
        <GoogleLogout
          clientId={CLIENT_ID}
          buttonText='Logout'
          onLogoutSuccess={props.logout}
          onFailure={handleLogoutFailure}
          icon={false}
          render={(renderProps) => (
            <Button
              className={classes.btnAuth}
              onClick={renderProps.onClick}
            >
              <span className={classes.btnAuthSpan}>Logout</span>
            </Button>
          )}
        ></GoogleLogout>
      ) : (
        <GoogleLogin
          clientId={CLIENT_ID}
          buttonText='Admin Login'
          onSuccess={login}
          onFailure={handleLoginFailure}
          cookiePolicy={'single_host_origin'}
          responseType='code,token'
          icon={false}
          render={(renderProps) => (
            <Button
              className={classes.btnAuth}
              onClick={renderProps.onClick}
            >
              <span className={classes.btnAuthSpan}>Admin Login</span>
            </Button>
          )}
        />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.website.isLoggedIn,
  };
};

export default connect(mapStateToProps, { login, logout })(AdminLogin);
