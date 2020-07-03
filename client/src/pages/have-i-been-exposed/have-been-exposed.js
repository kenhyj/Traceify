/* eslint-disable */
import 'date-fns';
import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import {
    Typography,
    IconButton,
    AppBar,
    Toolbar,
    Button,
    Table,
    TableBody,
    TableCell,
    TableRow,
    TableHead,
    TableContainer,
    Paper,
    Container,
} from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RowComponent from './row-component';
import PublishIcon from '@material-ui/icons/Publish';

// from material ui-- need to customize
const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
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

const HaveI = () => {
    const fields = useSelector(state => state.timeAndLoc)
    const dispatch = useDispatch();
    const classes = useStyles();

    return (
        <Container>
            <br />
            <AppBar position="sticky" color='transparent'>
                <Toolbar>
                    <Button
                        variant="outlined"
                        color="inherited"
                        onClick={() => dispatch({ type: 'ADD_ROW' })}
                        endIcon={<AddCircleOutlineIcon />}>
                        Add</Button>
                    <Typography variant="h6" className={classes.title}>
                        Enter the places you went to
                    </Typography>
                    <Button variant="outlined"
                        color="inherited"
                        endIcon={<PublishIcon />}>Submit</Button>
                </Toolbar>
            </AppBar>
            <TableContainer>
                <Table aria-label='customized table'>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>
                                Date
                            </StyledTableCell>
                            <StyledTableCell>Location</StyledTableCell>
                            <StyledTableCell>Location</StyledTableCell>
                            <StyledTableCell>Location</StyledTableCell>
                            <StyledTableCell></StyledTableCell>
                        </TableRow>
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
        </Container>
    );
};

export default withRouter(HaveI);
