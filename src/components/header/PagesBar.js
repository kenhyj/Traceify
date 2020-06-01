import React from 'react';
import {
    makeStyles,
    Toolbar,
    Typography,
} from '@material-ui/core';
import {
    BrowserRouter as Router,
    Switch, Route, Link
} from "react-router-dom";

const pages = [
    { page: 'Home', url: '/home' },
    { page: 'Sympton Checker', url: '/checker' },
    { page: 'Have I been Exposed?', url: '/haveI' },
    { page: 'Financial Help', url: '/financial' },
    { page: 'Reopening date', url: '/reopen' }
];

const navBarStyles = makeStyles((theme) => ({
    pagesBar: {
        backgroundColor: '#303f9f',
        overflowX: 'auto',
        justifyContent: 'space-between',
    },
    pageLink: {
        padding: theme.spacing(0.5),
        flexShrink: 0,
        textDecoration: 'none',
        color: 'white',
        '&:hover': {
            color: 'tomato'
        }
    }
}));

export default function PagesBar() {
    const classes = navBarStyles();

    return (
        <React.Fragment>
            <Router>
                <Toolbar component="nav" variant="dense" className={classes.pagesBar}>
                    {pages.map((section) => (
                        <Link
                            key={section.page}
                            to={section.url}
                            className={classes.pageLink}
                        >
                            {section.page}
                        </Link>
                    ))}
                </Toolbar>
                <Switch>
                <Route exact path ='/'>
                <Typography variant="h3">
                            Thank you page
                        </Typography>
                </Route>
                {pages.map((section) => (
                    <Route exact path ={section.url}>
                    <Typography variant="h3">
                            {section.page}
                        </Typography>
                    </Route>
                ))}
                   
                </Switch>
            </Router>
        </React.Fragment>
    )
}

