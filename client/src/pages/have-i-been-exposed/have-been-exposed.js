import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button, 
    Table, TableBody, TableCell, TableRow, TableHead, TableContainer } from '@material-ui/core';
import PageHeading from '../../components/page-heading/PageHeading';

const heading = "Have I Been Exposed?";
    const subheading = 
        <>
            Wondering if you've been exposed? You can check it here.
        </>;
    const body = 
      <>
        <p>Check if you've been exposed to the virus anonymously. We won't collect your data.</p>
      </>
      
    const pageHeadingData = {heading, subheading, body};

const HaveI = () => {
    return (
        <div>
            <div>
                <PageHeading data={pageHeadingData} />
            </div>
            <div>
            </div>
        </div>
    );
};

export default withRouter(HaveI);
