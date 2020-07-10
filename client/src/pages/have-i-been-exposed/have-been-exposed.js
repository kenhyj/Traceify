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
import axios from "axios/index";
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Alert from '@material-ui/lab/Alert';

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

const HaveI = () => {
    const fields = useSelector(state => state.timeAndLoc)
    const dispatch = useDispatch();
    const classes = useStyles();

    const [al,setAl] = React.useState("error");
    const [text,setText] = React.useState("");
    const [open, setOpen] = React.useState(false);
    const [result, setResult] = React.useState([]);

    const setAlert = (num)=>{
        if(num > 5) {
            setAl('error');
            setText("You are at risk for being exposed");
        }
        else if (num>0) {
            setAl('warning');
            setText("You may be at risk for being exposed");
        } 
        else {
            setAl('success');
            setText("You are safe.");
        }
    }

    const handleSubmit = async () => {
        let places = [];
        console.log(fields);
        for (let i = 0; i < fields.length; i++) {
            let oneRow = fields[i];
            console.log(oneRow);
            let oneDate = oneRow.date.toISOString();
            let oneResult = await axios.put('/expose', { date: oneDate, locations: oneRow.locations });
            console.log(oneResult);
            oneResult.data.map((onePlace) => places.push(onePlace));
        }
        
        console.log(places);
        setResult(places);
        setAlert(places.length);
        setOpen(true);
    }


    const handleClose = () => {

        setOpen(false);

    }
    return (
        <Container fixed>
            <br />
            <Toolbar>
                <Button
                    variant="outlined"
                    color="inherit"
                    onClick={() => dispatch({ type: 'ADD_ROW' })}
                    endIcon={<AddCircleOutlineIcon />}>
                    Add</Button>
                <Typography variant="h6" className={classes.title}>
                    Enter the places you went to
                    </Typography>
                <Button variant="outlined"
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
            >
            
            <DialogTitle><Alert severity={al}>{text}</Alert></DialogTitle>
                {result.map((one,index) => {
                    return (
                        <DialogContent key = {one.date + index}>
                            <DialogContentText>
                                You visited {one.place} on {one.date}
                            </DialogContentText>
                        </DialogContent>
                    )
                })}
            </Dialog>
        </Container>
    );
};

export default withRouter(HaveI);
