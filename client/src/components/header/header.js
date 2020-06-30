import React from 'react';
import './header.css';
import {
    Button,
    Toolbar,
    Typography,
    makeStyles,
} from '@material-ui/core';
import LocalHospitalIco from '@material-ui/icons/LocalHospital';
import GitHubIcon from '@material-ui/icons/GitHub';
import PropTypes from 'prop-types';
import logo from '../../assets/logoresized.svg';
import { Link } from "react-router-dom";
import AdminLogin from '../admin-login/admin-login';

// import Home from '../../pages/home/home';

const useStyles = makeStyles((theme) => ({
    header: {
        color: 'seconday',
    },
    titleBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        backgroundColor: '#F8F8D6',
        color: '#303f9f',
    },
    title: {
        flex: 1,
    },
    headerButton: {
        color: '#303f9f'
    }
}));

export default function HeaderTitle(props) {
    const classes = useStyles();
    // const { title } = props;
    return (
        <div className = {classes.headerContainer}>
            <Toolbar className={classes.titleBar}>
                <Typography
                    align="center"
                    className={classes.title}
                    variant="h4"
                >
                    {/* {title}                 */}
                    <Link to="/home"><img src={logo} alt="traceifylogo" /></Link>
                </Typography>
                <AdminLogin/>
            </Toolbar>

        </div>
    );
}

HeaderTitle.propTypes = {
    title: PropTypes.string,
};