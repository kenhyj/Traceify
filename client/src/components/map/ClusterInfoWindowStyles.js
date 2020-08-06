import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  infoWindowTitle: {
    textAlign: 'center',
    color: '#2196F3',
  },
  infoWindowLabel: {
    marginRight: '10px',
  },
  infoWindowType: {
    fontSize: '12px',
    textAlign: 'center',
  },
  infoWindowDataDiv: {
    marginBottom: '5px',
  },
  infoWindowTotal: {
    marginBottom: '10px',
  },
  address: {
    marginBottom: '10px',
  },
}));

export default useStyles;
