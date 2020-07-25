import React from 'react';
import { makeStyles, Toolbar } from '@material-ui/core';
import { withRouter, Link, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';

const navBarStyles = makeStyles((theme) => ({
    pagesBar: {
        backgroundColor: '#ffffff',
        overflowX: 'auto',
        justifyContent: 'space-between',
    },
    pageLink: {
        padding: theme.spacing(2),
        flexShrink: 0,
        textDecoration: 'none',
        minWidth: '6rem',
        alignContent: 'center',
        textAlign: 'center',
    },
    pageLinkFancy: {
        color: '#959c9f',
        textDecoration: 'none',
        textAlign: 'center',
        background: 'linear-gradient(currentColor, currentColor) bottom / 0 .1em no-repeat',
        transition: '0.5s background-size',
        '&:hover': {
            color: '#00a1c0',
            backgroundSize: '100% .1em',
        },
    },
    pageSelected:{
        color: '#00a1c0',
        textDecoration: 'none',
        textAlign: 'center',
        background: 'linear-gradient(currentColor, currentColor) bottom / 0 .1em no-repeat',
        transition: '0.5s background-size',
        backgroundSize: '100% .1em',
    }
}));

function PagesBar(props) {
    const classes = navBarStyles();
    const location = useLocation();
    const showAdmin = () => {
        if (props.isLoggedIn)
            return (
                <Link to='/admin' className={classes.pageLink}>
                    <span className={location.pathname ==='/admin'?classes.pageSelected:classes.pageLinkFancy}>Admin</span>
                </Link>
            );
    };

    return (
        <React.Fragment>
            <Toolbar component='nav' variant='dense' className={classes.pagesBar}>
                <Link to='/home' className={classes.pageLink}>
                    <span className= {location.pathname ==='/home'?classes.pageSelected:classes.pageLinkFancy}>Home</span>
                </Link>
                <Link to='/symptom-checker' className={classes.pageLink}>
                    <span className= {location.pathname ==='/symptom-checker'?classes.pageSelected:classes.pageLinkFancy}>Symptom Checker</span>
                </Link>
                <Link to='/have-i-been-exposed' className={classes.pageLink}>
                    <span className= {location.pathname ==='/have-i-been-exposed'?classes.pageSelected:classes.pageLinkFancy}>Have I been Exposed?</span>
                </Link>
                <Link to='/reopen' className={classes.pageLink}>
                    <span className= {location.pathname ==='/reopen'?classes.pageSelected:classes.pageLinkFancy}>Reopening</span>
                </Link>
                <Link to='/qna' className={classes.pageLink}>
                    <span className= {location.pathname ==='/qna'?classes.pageSelected:classes.pageLinkFancy}>Q&A</span>
                </Link>
                {showAdmin()}
            </Toolbar>
        </React.Fragment>
    );
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.website.isLoggedIn,
    };
};

export default withRouter(connect(mapStateToProps)(PagesBar));
