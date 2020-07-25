import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import {
  Typography,
  makeStyles,
  IconButton,
  Hidden,
  Drawer,
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import PropTypes from 'prop-types';
import logo from '../../assets/logoresized.svg';
import DropdownMenu from './DropdownMenu';

import PagesBar from './PagesBar';

const useStyles = makeStyles((theme) => ({
  header: {
    color: 'secondary',
    height: '5rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#ffffff',
    // TODO: when scrolling down, make header opacity 60% and make border bottom appear.
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor: '#ffffff',
    width: '100%',
    zIndex: theme.zIndex.drawer + 1,
    position: 'relative',
  },
  pagesBar: {
    justifyContent: 'center',
    zIndex: theme.zIndex.drawer + 1,
    position: 'relative',
  },
  logo: {
    maxHeight: '4rem',
    zIndex: theme.zIndex.drawer + 1,
    position: 'relative',
  },
  logoTypography: {
    justifyContent: 'left',
    [theme.breakpoints.down('sm')]: {
      flexGrow: 1,
    },
    paddingLeft: '2rem',
    zIndex: theme.zIndex.drawer + 1,
    position: 'relative',

  },
  menuButton: {
    justifyContent: 'right',
    paddingRight: '2rem',
    zIndex: theme.zIndex.drawer + 1,
    position: 'relative',
  },
  drawer: {
    flexShrink: 0,
    borderBottom: `1px solid ${theme.palette.divider}`,
    position: 'relative',
  },
}));

export default function HeaderTitle(props) {
  const classes = useStyles();
  const [menuOpen, setMenuOpen] = React.useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className={classes.header}>
        <Typography className={classes.logoTypography} variant='h6'>
          <Link to='/home'>
            <img className={classes.logo} src={logo} alt='Traceify' />
          </Link>
        </Typography>
        <Hidden smDown>
          <PagesBar className={classes.pagesBar} />
        </Hidden>
        <Hidden mdUp>
          <div className={classes.menuButton}>
            <IconButton onClick={toggleMenu}>
              <Menu />
            </IconButton>
          </div>
        </Hidden>
      </div>
      <Hidden mdUp>
        <div className={classes.drawerContainer}>
          <Drawer
            className={classes.drawer}
            anchor='top'
            open={menuOpen}
            variant='persistent'
            onClose={toggleMenu}
            elevation={16}
            ModalProps={{
              keepMounted: true,
            }}
          >
            <span style={{height: '5rem'}} />
            <DropdownMenu toggleMenu={toggleMenu} />
          </Drawer>
        </div>
      </Hidden>
    </>
  );
}
