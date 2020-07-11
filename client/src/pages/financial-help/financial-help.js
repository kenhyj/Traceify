import React from 'react';
import { withRouter } from 'react-router-dom';
import Card from '../../components/card/Card-TitleDescButton';
import PageHeading from '../../components/page-heading/PageHeading';
import './financial-help.css';
import { motion } from 'framer-motion';
import { variants, transitions, pageStyle } from '../motion-settings';
import { Grid } from '@material-ui/core';

// TODO: are we going to have a separate component for component headers?

const FinancialHelp = (props) => {
  const helpResources = [
    {
      title: 'Canadian Emergency Response Benefit (CERB)',
      descriptions: [
        'The Canada Emergency Response Benefit (CERB) gives financial support to employed and self-employed Canadians who are directly affected by COVID-19. If you are eligible, you can receive $2,000 for a 4-week period (the same as $500 a week).',
      ],
      url:
        'https://www.canada.ca/en/revenue-agency/services/benefits/apply-for-cerb-with-cra.html',
      id: 0,
    },
    {
      title: 'Canadian Emergency Student Benefit (CESB)',
      descriptions: [
        'The Canada Emergency Student Benefit (CESB) provides financial support to post-secondary students, and recent post-secondary and high school graduates who are unable to find work due to COVID-19.',
      ],
      url:
        'https://www.canada.ca/en/revenue-agency/services/benefits/emergency-student-benefit.html',
      id: 1,
    },
    {
      title: 'B.C. Emergency Benefit for Workers',
      descriptions: [
        'A one-time, tax-free $1,000 payment for B.C. residents whose ability to work has been affected due to COVID-19.',
      ],
      url:
        'https://www2.gov.bc.ca/gov/content/employment-business/covid-19-financial-supports/emergency-benefit-workers',
      id: 2,
    },
  ];

  const heading = 'Financial Help';
  const subheading = (
    <>
      “We know that people are worried about their health, their jobs and their
      financial situations. Our government is doing whatever it takes to protect
      the health and safety of Canadians, and to support workers, families and
      businesses. The Canada Emergency Response Benefit would make sure that
      money gets in the hands of workers as quickly as possible to support them
      in their time of need, and would help businesses keep their employees
      during this difficult period. Canadians can rest assured that the
      government stands ready to take any and all necessary actions as we
      continue to confront these challenging times together.”
      <br />
      <p>- Bill Morneau, Minister of Finance</p>
    </>
  );
  const body = (
    <>
      Check here for the financial help resources. Review Canada's economic plan {' '}
      <a href='https://www.canada.ca/en/department-finance/economic-response-plan.html'>
        here
      </a>
      . Fraud alert: The government will never contact you via text message.
    </>
  );
  const pageHeadingData = { heading, subheading, body };

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
      <div className='financial-help-body'>
        <Grid container justify='center'>
          {helpResources.map((resource) => (
            <Card key={resource.id} {...resource} />
          ))}
        </Grid>
      </div>
    </motion.div>
  );
};

export default withRouter(FinancialHelp);
