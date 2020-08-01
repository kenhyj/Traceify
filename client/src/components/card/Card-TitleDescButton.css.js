import { makeStyles } from '@material-ui/core/styles';

const cardStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '800px',
    [theme.breakpoints.down('md')]: {
      maxWidth: '300px',
    },
    variant: 'outlined',
    margin: 5,
  },
  content: {
    padding: 5,
  },
  contentText: {
    marginTop: '5px',
    fontSize: '0.8rem',
  },
  button: {
    color: 'black',
    size: 'small',
  },
  alert: {
    fontSize: '0.8rem',
  },
}));

export default cardStyles;
