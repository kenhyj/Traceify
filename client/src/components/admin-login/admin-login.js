import React from 'react';
import { connect } from 'react-redux';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Button, makeStyles } from '@material-ui/core';
import { login, logout } from '../../redux/actions/website-actions';

const CLIENT_ID =
  '214796866260-6c8clqh189ckf5i0rgb9td99pvul0r59.apps.googleusercontent.com';

const AdminLogin = (props) => {
  const login = (response) => {
    if (response.wc.access_token) {
      axios
        .get(`/api/admins/${response.profileObj.email}`)
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

  const adminStyles = makeStyles(() => ({
    btnAuth: {
      fontFamily: 'Open Sans, sans-serif',
      fontWeight: '700',
      backgroundColor: '#2196F3',
      color: '#ffffff',
      display: 'inline-flex',
      alignItems: 'center',
      boxShadow:
        'rgba(0, 0, 0, 0.24) 0px 2px 2px 0px, rgba(0, 0, 0, 0.24) 0px 0px 1px 0px',
      padding: '0px',
      borderRadius: '3',
      border: '1px solid transparent',
      '&:hover, &.Mui-focusVisible': {
        backgroundColor: '#2196F3',
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
  const history = useHistory();

  return (
    <div>
      {props.isLoggedIn ? (
        <GoogleLogout
          clientId={CLIENT_ID}
          buttonText='Logout'
          onLogoutSuccess={() => {
            props.logout();
            history.push('/home');
          }}
          onFailure={handleLogoutFailure}
          icon={false}
          render={(renderProps) => (
            <Button className={classes.btnAuth} onClick={renderProps.onClick}>
              <span className={classes.btnAuthSpan}>Logout</span>
            </Button>
          )}
        />
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
            <Button className={classes.btnAuth} onClick={renderProps.onClick}>
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
