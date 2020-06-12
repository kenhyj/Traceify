import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button, 
    Table, TableBody, TableCell, TableRow, TableHead, TableContainer } from '@material-ui/core';

const HaveI = () => {
    return (
        <div>
            This should be the Have I been exposed page.
        </div>
    );
};

export default withRouter(HaveI);
