import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  pagesBar: {
    backgroundColor: '#ffffff',
    overflowX: 'auto',
    justifyContent: 'space-between',
  },
  pageLink: {
    padding: theme.spacing(2),
    flexShrink: 0,
    textDecoration: 'none',
    minWidth: '4rem',
    alignContent: 'center',
    textAlign: 'center',
  },
  pageLinkFancy: {
    color: '#959c9f',
    textDecoration: 'none',
    textAlign: 'center',
    background:
      'linear-gradient(currentColor, currentColor) bottom / 0 .1em no-repeat',
    transition: '0.5s background-size',
    '&:hover': {
      color: '#2196F3',
      backgroundSize: '100% .1em',
    },
  },
  pageSelected: {
    color: '#2196F3',
    textDecoration: 'none',
    textAlign: 'center',
    background:
      'linear-gradient(currentColor, currentColor) bottom / 0 .1em no-repeat',
    transition: '0.5s background-size',
    backgroundSize: '100% .1em',
  },
}));
