import React from 'react';
import { Link } from 'react-router-dom';
import {
  Typography,
  IconButton,
  Hidden,
  Drawer,
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import logo from '../../assets/logoresized.svg';
import DropdownMenu from './DropdownMenu';
import PagesBar from './PagesBar';
import { useStyles } from './header.css';

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
