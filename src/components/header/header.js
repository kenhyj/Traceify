import React from 'react';
import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemText,
    Avatar,
    Divider,
    List,
    Typography,
    Box
} from '@material-ui/core';

import {
    ArrowBack,
    AssignmentInd,
    Home,
    Apps,
    ContactMail
} from '@material-ui/icons';

const Header = () => {
    return (
        <Box componnet='header' display = "flex">
            <AppBar position="static" >
                <Toolbar>
                    <IconButton>
                        <ArrowBack style = {{color:"white"}}/>
                    </IconButton>
                    <IconButton>
                    <Typography style = {{color:"white"}} >Home</Typography>
                    </IconButton>
                    <IconButton>
                    <Typography style = {{color:"white"}} >Symptom Checker</Typography>
                    </IconButton>
                    <IconButton>
                    <Typography style = {{color:"white"}} >Have I been Exposed?</Typography>
                    </IconButton>
                    <IconButton>
                    <Typography style = {{color:"white"}} >Financial Help</Typography>
                    </IconButton>
                    <IconButton>
                    <Typography style = {{color:"white"}} >Reopening Date</Typography>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;
