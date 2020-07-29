import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
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
