import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    maxWidth: 800, // TODO: make responsive
    variant: 'outlined',
    margin: 10,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 700,
  },
});
