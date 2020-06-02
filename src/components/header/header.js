import React from 'react';
import './header.css';
import {
    Button,
    Toolbar,
    Typography,
    makeStyles,
    AppBar
} from '@material-ui/core';
import LocalHospitalIco from '@material-ui/icons/LocalHospital';
import GitHubIcon from '@material-ui/icons/GitHub';
import PropTypes from 'prop-types';
import logo from '../../components/traceifylogo.png';
import Home from '../../pages/home/home';

const useStyles = makeStyles((theme) => ({
    header: {
        color: 'seconday'
    },
    titleBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        backgroundColor : '#F8F8D6',
        color : '#303f9f'
    },
    title: {
        flex: 1,
    },
    headerButton: {
        color: '#303f9f'
    }
}));

export default function Header(props) {
    const classes = useStyles();
    const { title } = props;
    return (
        <div>
            <Toolbar className={classes.titleBar}>
                <Button
                    variant="contained"
                    size="small"
                    endIcon={<GitHubIcon />}
                    href="https://github.com/kenhyj/Traceify"
                    className={classes.headerButton}
                >Github Link</Button>
                <Typography
                    align="center"
                    className={classes.title}
                    variant="h4"
                >{title}</Typography>
                <img src={logo} alt="traceifylogo" z-index="0" onClick={Home}></img> {/* TODO: I cannot find out how to make it go home upon clicking the image */}
                <Button
                    variant="contained"
                    size="small"
                    endIcon={<LocalHospitalIco />}
                    className={classes.headerButton}>
                    Admin Login in
                    </Button>
            </Toolbar>
            
            </div>
    );
}

Header.propTypes = {
    title: PropTypes.string,
};