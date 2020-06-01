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
                    <Route exact path='/home'>
                        <Typography variant="h3">
                            Home
                        </Typography>
                    </Route>
                    <Route exact path='/checker'>
                        <Typography variant="h3" gutterBottom>
                            Sympton checker
                        </Typography>
                    </Route>
                    <Route exact path='/haveI'>
                        <Typography variant="h3" gutterBottom>
                            Have I been exposed?
                        </Typography>
                    </Route>
                    <Route exact path='/financial'>
                        <Typography variant="h3" gutterBottom>
                            Financial Help
                        </Typography>
                    </Route>
                    <Route exact path='/reopen'>
                        <Typography variant="h3" gutterBottom>
                            Reopen date
                        </Typography>
                    </Route>
                </Switch>
            </Router>
        </React.Fragment>
    )
}

