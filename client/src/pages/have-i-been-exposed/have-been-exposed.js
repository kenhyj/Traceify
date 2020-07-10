/* eslint-disable */
import 'date-fns';
import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import {
    Typography,
    Toolbar,
    Button,
    Table,
    TableBody,
    TableCell,
    TableRow,
    TableHead,
    TableContainer,
    Dialog,
    Container,
} from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RowComponent from './row-component';
import PublishIcon from '@material-ui/icons/Publish';
import Result from './result';
import './have-been-exposed.css';
import PageHeader from "../../components/page-header/page-header";
import Instruction from "../../components/instruction/instruction";
import { motion } from 'framer-motion';
import { variants, transitions, pageStyle } from '../motion-settings';
import PageHeading from '../../components/page-heading/PageHeading';


// from material ui-- need to customize
const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        fontSize: 18,
    },
    body: {
        fontSize: 18,
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
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        textAlign: 'center'
    },
}));

const heading = 'Have I Been Exposed?';
const subheading = (
  <>Wondering if you've been exposed? You can check it here.</>
);
const body = (
  <>
    <p>
        Enter the date and the places you have visited to check whether your paths crossed with any of the positive patients anonymously. We won't collect
      your data.
    </p>
  </>
);

const pageHeadingData = { heading, subheading, body };


const HaveI = () => {
    const fields = useSelector(state => state.timeAndLoc)
    const dispatch = useDispatch();
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleSubmit = () => {
        setOpen(true);
    }

    const handleClose = ()=>{
        setOpen(false);
    }
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
      <div>
        <Container fixed>
            <Toolbar>
                <Button
                    className="buttonz"
                    variant="outlined"
                    color="inherit"
                    onClick={() => dispatch({ type: 'ADD_ROW' })}
                    endIcon={<AddCircleOutlineIcon />}>
                    Add</Button>
                <Typography variant="h6" className={classes.title}>
                    Enter the places you went to
                    </Typography>
                <Button variant="outlined" className="buttonz"
                    color="inherit"
                    onClick={handleSubmit}
                    endIcon={<PublishIcon />}>Submit</Button>
            </Toolbar>

            <br />
            <TableContainer>
                <Table aria-label='customized table' className={classes.table}>
                    <TableHead>
                        <StyledTableRow>
                            <StyledTableCell align='center'>
                                Date
                            </StyledTableCell>
                            <StyledTableCell align='center'>Location</StyledTableCell>
                            <StyledTableCell align='center'>Location</StyledTableCell>
                            <StyledTableCell align='center'>Location</StyledTableCell>
                            <StyledTableCell></StyledTableCell>
                        </StyledTableRow>
                    </TableHead>
                    <TableBody>
                        {fields.map((field, idx) => {
                            return (
                                <RowComponent key={`${field}-${idx}`} fieldKey={idx} />
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <Dialog
                open={open}
                onClose={handleClose}
            ><Result/></Dialog>
        </Container>
        </div>
    </motion.div>
    );
};

export default withRouter(HaveI);
