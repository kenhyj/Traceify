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

    const [open, setOpen] = React.useState(false);

    const handleSubmit = async() => {
        let places = [];
        console.log(fields);
        for(let i = 0; i< fields.length;i++){
            let oneRow = fields[i];
            console.log(oneRow);
            let oneDate = oneRow.date.toISOString();
            let oneResult = await axios.post('/expose',{date:oneDate,locations:oneRow.locations});
            console.log(oneResult);
            oneResult.data.map((onePlace)=>places.push(onePlace));
        }
        setOpen(true);
        console.log(places);
        
    }
   
    const handleClose = ()=>{
       
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
            ><Result/></Dialog>
        </Container>
    );
};

export default withRouter(HaveI);
