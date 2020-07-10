import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
  TableContainer,
} from '@material-ui/core';
import PageHeading from '../../components/page-heading/PageHeading';
import { motion } from 'framer-motion';
import { variants, transitions, pageStyle } from '../motion-settings';

const heading = 'Have I Been Exposed?';
const subheading = (
  <>Wondering if you've been exposed? You can check it here.</>
);
const body = (
  <>
    <p>
      Check if you've been exposed to the virus anonymously. We won't collect
      your data.
    </p>
  </>
);

const pageHeadingData = { heading, subheading, body };

const HaveI = () => {
  return (
    <motion.div
      exit='out'
      animate='in'
      initial='initial'
      variants={variants}
      transition={transitions}
      style={pageStyle}
    >
      <div>
        <PageHeading data={pageHeadingData} />
      </div>
      <div></div>
    </motion.div>
  );
};

export default withRouter(HaveI);
