/* eslint-disable */
import 'date-fns';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import React, { useState } from 'react';
import LocationAuto from './auto-complet';
import {
    IconButton,
    TableCell,
    TableRow,
    Table,
    Hidden,
    Collapse,
    Typography,
    Grid,
    TableBody,
    Box,
    Tab,
} from '@material-ui/core';
import { MuiPickersUtilsProvider, KeyboardDatePicker, } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import DeleteIcon from '@material-ui/icons/Delete';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

export default function RowComponent(props) {

    const fields = useSelector(state => state.timeAndLoc);
    const dispatch = useDispatch();

    const key = props.fieldKey;

    const selectedDate = fields[props.fieldKey].date;
    // const [selectedDate, setSelectedDate] = React.useState(new Date('2020-07-01T21:11:54'));
    const [open,setOpen] = useState(false);

    const handleDateChange = (date) => {
        dispatch({ type: 'EDIT_ROW_DATE', idx: props.fieldKey, newDate: date, });
    };

    return (
        <React.Fragment>
        <StyledTableRow>
            <TableCell align="center">
                <IconButton size = 'small' aria-label="delete"
                    onClick={() => dispatch({ type: 'DELETE_ROW', idx: props.fieldKey, })}>
                    <DeleteIcon fontSize="small" />
                </IconButton>
                <Hidden mdUp>
                <IconButton size="small" onClick={() => setOpen(!open)}>
                {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                 </IconButton>
                 </Hidden>
                </TableCell>   
            <TableCell align="center">
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
            <Hidden smDown>
            <TableCell align="center"><LocationAuto locid='0' idx={key} /></TableCell>
            <TableCell align="center"><LocationAuto locid='1' idx={key} /></TableCell>
            <TableCell align="center"><LocationAuto locid='2' idx={key} /></TableCell>
            </Hidden>
        </StyledTableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
        <Hidden mdUp>  
        <Collapse in = {open} timeout = 'auto' unmountOnExit align = 'center'>
         <Typography variant="h6" gutterBottom component="div">
            Locations
          </Typography>
          <Table>
          <TableBody>
          <TableRow><TableCell><LocationAuto locid='0' idx={key} /></TableCell></TableRow>
          <TableRow><TableCell><LocationAuto locid='1' idx={key} /></TableCell></TableRow>
          <TableRow><TableCell><LocationAuto locid='2' idx={key} /></TableCell></TableRow>
          </TableBody>
          </Table>
       
        </Collapse>
        </Hidden>
        </TableCell>
    </React.Fragment>
    );
}