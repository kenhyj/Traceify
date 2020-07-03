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
    
    const fields = useSelector(state => state.timeAndLoc);
    const dispatch = useDispatch();

    console.log(fields);
    const key = props.fieldKey;

    const selectedDate = fields[props.fieldKey].date;
    // const [selectedDate, setSelectedDate] = React.useState(new Date('2020-07-01T21:11:54'));


    const handleDateChange = (date) => {
        dispatch({type:'EDIT_ROW_DATE',idx:props.fieldKey,newDate:date,});
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
            <TableCell><LocationAuto locid = '1' idx = {key}/></TableCell>
            <TableCell><LocationAuto locid = '2' idx = {key}/></TableCell>
            <TableCell><LocationAuto locid = '3' idx = {key}/></TableCell>
            <TableCell>
                <IconButton aria-label="delete" 
                onClick = {()=>dispatch({type:'DELETE_ROW',idx:props.fieldKey,})}>
                    <DeleteIcon fontSize="small" />
                </IconButton></TableCell>
        </TableRow>
    );
}