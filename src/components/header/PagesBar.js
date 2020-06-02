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

import Home from '../../pages/home/home';
import SymptomChecker from '../../pages/symptom-checker/symptom-checker';
import HaveI from '../../pages/have-i-been-exposed/have-been-exposed';
import FinancialHelp from '../../pages/financial-help/financial-help';
import ThankPage from '../../pages/ThankPage';


const pages = [
    { page: 'Home', url: '/home', to: Home },
    { page: 'Symptom Checker', url: '/checker', to: SymptomChecker },
    { page: 'Have I been Exposed?', url: '/haveI', to: HaveI },
    { page: 'Financial Help', url: '/financial', to: FinancialHelp },
    { page: 'Reopening date', url: '/reopen', to: ThankPage } // TODO: make a reopen page?
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
                {/* <Switch>
                    <Route exact path='/'>
                        <Typography variant="h3">
                            Thank you page
                        </Typography>
                    </Route>
                    {pages.map((section) => (
                        <Route exact path={section.url} component={section.to}>
                            <Typography variant="h3">
                                {section.page}<br />
                                {section.url}
                            </Typography>
                        </Route>
                    ))}

                </Switch> */}

                    {pages.map((section) => (
                        <Route exact path={section.url} component={section.to}>
                            {/* <Typography variant="h3">
                                {section.page}<br />
                                {section.url}
                            </Typography> */}
                        </Route>
                    ))}
                
            </Router>
        </React.Fragment>
    )
}

