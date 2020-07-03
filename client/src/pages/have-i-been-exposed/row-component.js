/* eslint-disable */
import 'date-fns';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import React, { useState } from 'react';
import LocationAuto from './auto-complet';
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
import { MuiPickersUtilsProvider, KeyboardDatePicker, } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import DeleteIcon from '@material-ui/icons/Delete';

export default function RowComponent(props){
    const fields = useSelector(state => state.timeAndLoc)
    const dispatch = useDispatch();

    const key = props.key;

    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <TableRow>
            <TableCell>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Date picker inline"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </MuiPickersUtilsProvider></TableCell>
            <TableCell><LocationAuto/></TableCell>
            <TableCell>2</TableCell>
            <TableCell>3</TableCell>
            <TableCell>
                <IconButton aria-label="delete" 
                onClick = {()=>dispatch({type:'DELETE_ROW',idx:{key},})}>
                    <DeleteIcon fontSize="small" />
                </IconButton></TableCell>
        </TableRow>
    );
}