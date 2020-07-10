import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  header: {
    color: 'seconday',
  },
  titleBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor: '#F8F8D6',
    color: '#303f9f',
  },
  title: {
    flex: 1,
  },
  headerButton: {
    color: '#303f9f',
  },
}));