import 'date-fns';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import {
  Typography,
  Toolbar,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
  TableContainer,
  Dialog,
  Grid,
  Container,
  Hidden,
  IconButton,
} from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Send from '@material-ui/icons/Send';
import axios from 'axios/index';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Alert from '@material-ui/lab/Alert';
import './have-been-exposed.css';
import { motion } from 'framer-motion';
import RowComponent from '../../components/have-i-table/row-component';
import { variants, transitions, pageStyle } from '../motion-settings';
import PageHeading from '../../components/page-heading/PageHeading';

const StyledTableCell = withStyles(() => ({
  head: {
    backgroundColor: '#2196F3',
    fontSize: 18,
    padding: '8px',
    color: 'white',
  },
  body: {
    fontSize: 16,
    padding: '5px',
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
  },
  container: {
    maxWidth: theme.breakpoints.values.sm,
    [theme.breakpoints.up('md')]: {
      maxWidth: theme.breakpoints.values.md,
    },
  },
}));

const heading = 'Have I Been Exposed?';
const subheading = (
  <>
    <p>Wondering if you have been exposed? You can check it here.</p>
  </>
);
const body = (
  <div>
    <p>
      Enter the date and the places you have visited to check whether your paths
      crossed with any of the positive patients anonymously. We won&#39;t
      collect your data.
    </p>
  </div>
);

const pageHeadingData = { heading, subheading, body };

const HaveI = () => {
  const fields = useSelector((state) => state.timeAndLoc);
  const dispatch = useDispatch();
  const classes = useStyles();

  const [al, setAl] = React.useState('error');
  const [text, setText] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [result, setResult] = React.useState([]);

  const setAlert = (num) => {
    if (num > 4) {
      setAl('error');
      setText('You are at risk for being exposed');
    } else if (num > 0) {
      setAl('warning');
      setText('You may be at risk for being exposed');
    } else {
      setAl('success');
      setText('You are safe.');
    }
  };

  const handleSubmit = async () => {
    const places = [];
    for (let i = 0; i < fields.length; i++) {
      const oneRow = fields[i];
      const oneDate = oneRow.date.toISOString();
      const oneResult = await axios.put('/api/expose', {
        date: oneDate,
        locations: oneRow.locations,
      });
      oneResult.data.map((onePlace) => places.push(onePlace));
    }
    setResult(places);
    setAlert(places.length);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <motion.div
      exit='out'
      animate='in'
      initial='initial'
      variants={variants}
      transition={transitions}
      style={pageStyle}
    >
      <div>
        <PageHeading data={pageHeadingData} />
      </div>
      <Container className={classes.container}>
        <Toolbar>
          <Grid container item xs={2} justify='center'>
            <IconButton
              variant='outlined'
              color='inherit'
              onClick={() => dispatch({ type: 'ADD_ROW' })}
            >
              Add
              <AddCircleOutlineIcon style={{ padding: '0 0 0 10px' }} />
            </IconButton>
          </Grid>
          <Grid item xs={8}>
            <Typography variant='h6' className={classes.title}>
              Enter the places you went to
            </Typography>
          </Grid>

          <Grid container item xs={2} justify='center'>
            <IconButton
              color='inherit'
              variant='outlined'
              onClick={handleSubmit}
            >
              Submit
              <Send style={{ padding: '0 0 0 10px' }} />
            </IconButton>
          </Grid>
        </Toolbar>
        <TableContainer>
          <Table aria-label='customized table' className={classes.table}>
            <Hidden smDown>
              <TableHead>
                <StyledTableRow>
                  <StyledTableCell></StyledTableCell>
                  <StyledTableCell align='center'>Date</StyledTableCell>
                  <StyledTableCell align='center'>Location</StyledTableCell>
                  <StyledTableCell align='center'>Location</StyledTableCell>
                  <StyledTableCell align='center'>Location</StyledTableCell>
                </StyledTableRow>
              </TableHead>
            </Hidden>
            <TableBody>
              {fields.map((field, idx) => {
                return (
                  <RowComponent
                    key={`${field}-${idx}`}
                    fieldKey={idx}
                    field={field}
                  />
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>

        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>
            <Alert severity={al}>{text}</Alert>
          </DialogTitle>
          {result.map((one, index) => {
            return (
              <DialogContent key={one.date + index}>
                <DialogContentText>
                  You visited {one.place} on {one.date}
                </DialogContentText>
              </DialogContent>
            );
          })}
        </Dialog>
        <br />
        <br />
      </Container>
    </motion.div>
  );
};

export default withRouter(HaveI);
