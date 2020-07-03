/* eslint-disable */
import 'date-fns';
import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import {
    IconButton,
    AppBar,
    Form,
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
import { MuiPickersUtilsProvider,KeyboardDatePicker, } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import DeleteIcon from '@material-ui/icons/Delete';
import RowComponent from './row-component';

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



const HaveI = () => {
    const fields = useSelector(state => state.timeAndLoc)
    const dispatch = useDispatch();

    return (
        <Container>
            <AppBar position='sticky'>
                <h1>Enter places you went</h1>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => dispatch({type:'ADD_ROW'})}
                    endIcon={<AddCircleOutlineIcon />}>
                    Add</Button>
            </AppBar>
            <br />
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
                                <RowComponent key = {`${field}-${idx}`} fieldKey={idx}/>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default withRouter(HaveI);
