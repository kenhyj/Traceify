import React from 'react';
import './header.css';
import { Button, Toolbar, Typography, makeStyles } from '@material-ui/core';
import LocalHospitalIco from '@material-ui/icons/LocalHospital';
import GitHubIcon from '@material-ui/icons/GitHub';
import PropTypes from 'prop-types';
import logo from '../../assets/logoresized.svg';
import { Link } from 'react-router-dom';
import AdminLogin from '../admin-login/admin-login';
import PagesBar from './PagesBar';
import { Pages } from '@material-ui/icons';

// import Home from '../../pages/home/home';

const useStyles = makeStyles((theme) => ({
  header: {
    color: 'secondary',
    height: '5rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#ffffff',
    // padding: '1rem',
    // TODO: when scrolling down, make header opacity 60% and make border bottom appear.
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  titleBar: {
    // borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor: '#FFFFFF',
    color: '#303f9f',
  },
  pagesBar: {
  },
  adminLogin: {
    justifyContent: 'right',
  },
  title: {
    flex: 1,
  },
  headerButton: {
    color: '#303f9f',
  },
  logo: {
    maxHeight: '4rem',
  }
}));

export default function HeaderTitle(props) {
  const classes = useStyles();
  // const { title } = props;
  return (
    <div className={classes.header}>
      <Toolbar className={classes.titleBar}>
        <Typography align='center' className={classes.title} variant='h4'>
          {/* {title}                 */}
          <Link to='/home'>
            <img className={classes.logo} src={logo} alt='traceifylogo' />
          </Link>
        </Typography>
      </Toolbar>
      <PagesBar className={classes.pagesBar} />
      <AdminLogin className={classes.adminLogin} />
    </div>
  );
}

HeaderTitle.propTypes = {
  title: PropTypes.string,
};
