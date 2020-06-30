import React from 'react';
import { makeStyles, Toolbar } from '@material-ui/core';
import { withRouter, Link } from "react-router-dom";
import {connect} from "react-redux";
import AdminPage from "../../pages/admin-page/admin-page";

const navBarStyles = makeStyles((theme) => ({
    pagesBar: {
        backgroundColor: '#000000',
        overflowX: 'auto',
        justifyContent: 'space-between',
    },
    pageLink: {
        padding: theme.spacing(0.5),
        flexShrink: 0,
        textDecoration: 'none',
        color: '#FFFFFF',
        '&:hover': {
            color: 'tomato'
        }
    }
}));

function PagesBar(props) {
    const classes = navBarStyles();

    const showAdmin = () => {
        if (props.isLoggedIn)
            return <Link to='/admin' className={classes.pageLink}>Admin</Link>
    };

    return (
        <React.Fragment>
                <Toolbar component="nav" variant="dense" className={classes.pagesBar}>
                    <Link to='/home' className={classes.pageLink}>Home</Link>
                    <Link to='/symptom-checker' className={classes.pageLink}>Symptom Checker</Link>
                    <Link to='/have-i-been-exposed' className={classes.pageLink}>Have I been Exposed?</Link>
                    <Link to='/financial-help' className={classes.pageLink}>Financial Help</Link>
                    <Link to='/reopen' className={classes.pageLink}>Reopening Date</Link>
                    {showAdmin()}
                </Toolbar>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.website.isLoggedIn
    };
};

export default withRouter(connect(mapStateToProps)(PagesBar));
