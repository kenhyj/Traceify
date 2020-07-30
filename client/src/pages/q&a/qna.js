import React from 'react';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { motion } from 'framer-motion';
import { variants, transitions, pageStyle } from '../motion-settings';
import './qna.css';
import PageHeading from '../../components/page-heading/PageHeading';
import PageHeader from '../../components/page-header/page-header';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    outlineStyle: 'solid',
    outlineWidth: '1px',
    outlineColor: '#BEBEBE',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: 'bold',
  },
}));

const QnA = () => {
  const classes = useStyles();
  const heading = 'Q&A';
  const subheading = (
    <>
      <p>
        “We know that people are worried about their health, their jobs and
        their financial situations. Our government is doing whatever it takes to
        protect the health and safety of Canadians, and to support workers,
        families and businesses. The Canada Emergency Response Benefit would
        make sure that money gets in the hands of workers as quickly as possible
        to support them in their time of need, and would help businesses keep
        their employees during this difficult period. Canadians can rest assured
        that the government stands ready to take any and all necessary actions
        as we continue to confront these challenging times together.”
      </p>
      <br />
      <p>- Bill Morneau, Minister of Finance</p>
    </>
  );
  const body = (
    <>
      Check here for frequently asked questions. Review Canada's economic plan{' '}
      <a
        target='_blank'
        href='https://www.canada.ca/en/department-finance/economic-response-plan.html'
        rel='noopener noreferrer'
      >
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
      <div className='wrapper'>
        <PageHeader text='ABOUT' />
        <br />
        <br />
        <div className={classes.root}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <Typography className={classes.heading}>
                What is this website for?
              </Typography>
            </AccordionSummary>
            <AccordionDetails style={{ padding: '5%' }}>
              <Typography>
                This is a contact tracing website for Vancouver built by a group
                of UBC CS students.
                <br />
                Please look at our youtube video of a brief summary.
                <br />
                <iframe
                  title='traceifyutube'
                  width='560'
                  height='315'
                  src='https://www.youtube.com/embed/8TWWVOtbVD8'
                  frameBorder='0'
                  allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                  allowFullscreen
                />
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel2a-content'
              id='panel2a-header'
            >
              <Typography className={classes.heading}>
                Description of each page
              </Typography>
            </AccordionSummary>
            <AccordionDetails style={{ padding: '5%' }}>
              <Typography>
                Home: A map that shows the locations that a positive patient
                visited
                <br />
                Symptom Checker: A quiz that assess your risk to COVID-19
                <br />
                blah blah blah
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel3a-content'
              id='panel3a-header'
            >
              <Typography className={classes.heading}>
                Are all the information up-to-date?
              </Typography>
            </AccordionSummary>
            <AccordionDetails style={{ padding: '5%' }}>
              <Typography>
                Unfortunately no. Vancouver does not provide any open-source
                dataset on COVID patients. The data shown on this map is solely
                deduced from available news articles. Reopening dates is not up
                to date either. There is not a readily available API for each
                province province or territory. However, we try our best to
                catch up with latest updates and make changes to our database.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>

      <div className='wrapper'>
        <PageHeader text='FINANCIAL HELP' />
        <br />
        <br />
        <div className={classes.root}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <Typography className={classes.heading}>
                Canadian Emergency Response Benefit (CERB)
              </Typography>
            </AccordionSummary>
            <AccordionDetails style={{ padding: '5%' }}>
              <Typography className='typography'>
                The Canada Emergency Response Benefit (CERB) gives financial
                support to employed and self-employed Canadians who are directly
                affected by COVID-19. If you are eligible, you can receive
                $2,000 for a 4-week period (the same as $500 a week).
              </Typography>
              <button
                className='link-button'
                onClick={() =>
                  window.open(
                    'https://www.canada.ca/en/revenue-agency/services/benefits/apply-for-cerb-with-cra.html',
                    '_blank'
                  )
                }
              >
                FIND OUT MORE
              </button>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel2a-content'
              id='panel2a-header'
            >
              <Typography className={classes.heading}>
                Canadian Emergency Student Benefit (CESB)
              </Typography>
            </AccordionSummary>
            <AccordionDetails style={{ padding: '5%' }}>
              <Typography className='typography'>
                The Canada Emergency Student Benefit (CESB) provides financial
                support to post-secondary students, and recent post-secondary
                and high school graduates who are unable to find work due to
                COVID-19.
              </Typography>
              <button
                className='link-button'
                onClick={() =>
                  window.open(
                    'https://www.canada.ca/en/revenue-agency/services/benefits/emergency-student-benefit.html',
                    '_blank'
                  )
                }
              >
                FIND OUT MORE
              </button>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel3a-content'
              id='panel3a-header'
            >
              <Typography className={classes.heading}>
                B.C. Emergency Benefit for Workers
              </Typography>
            </AccordionSummary>
            <AccordionDetails style={{ padding: '5%' }}>
              <Typography className='typography'>
                A one-time, tax-free $1,000 payment for B.C. residents whose
                ability to work has been affected due to COVID-19.
              </Typography>
              <button
                className='link-button'
                onClick={() =>
                  window.open(
                    'https://www2.gov.bc.ca/gov/content/employment-business/covid-19-financial-supports/emergency-benefit-workers',
                    '_blank'
                  )
                }
              >
                FIND OUT MORE
              </button>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>

      <div className='wrapper'>
        <PageHeader text='OTHER USEFUL WEBSITES' />
        <br />
        <br />
        <div className={classes.root}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <Typography className={classes.heading}>
                Location of COVID-19 Testing Centres
              </Typography>
            </AccordionSummary>
            <AccordionDetails style={{ padding: '5%' }}>
              <Typography className='typography'>
                An official government website that shows you the
                locations/details of the COVID-19 testing centres in BC.
              </Typography>
              <button
                className='link-button'
                onClick={() =>
                  window.open(
                    'https://experience.arcgis.com/experience/3862560c5a41418e9d78f4f81688e9d0',
                    '_blank'
                  )
                }
              >
                FIND OUT MORE
              </button>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel2a-content'
              id='panel2a-header'
            >
              <Typography className={classes.heading}>
                Wait Time of Hospitals
              </Typography>
            </AccordionSummary>
            <AccordionDetails style={{ padding: '5%' }}>
              <Typography className='typography'>
                An official website hosted by Vancouver Coastal Health that
                lists the wait times for hospitals located in Vancouver,
                Richmond and North Shore.
              </Typography>
              <button
                className='link-button'
                onClick={() =>
                  window.open(
                    'http://www.edwaittimes.ca/WaitTimes.aspx',
                    '_blank'
                  )
                }
              >
                FIND OUT MORE
              </button>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel3a-content'
              id='panel3a-header'
            >
              <Typography className={classes.heading}>
                B.C. COVID-19 Dashboard
              </Typography>
            </AccordionSummary>
            <AccordionDetails style={{ padding: '5%' }}>
              <Typography className='typography'>
                An official government website that summarizes current COVID-19
                situation in British Columbia. The dashboard is updated Monday
                to Friday at 5 p.m.
              </Typography>
              <button
                className='link-button'
                onClick={() =>
                  window.open(
                    'https://experience.arcgis.com/experience/a6f23959a8b14bfa989e3cda29297ded',
                    '_blank'
                  )
                }
              >
                FIND OUT MORE
              </button>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>

      <br />
      <br />
      <br />
    </motion.div>
  );
};

export default withRouter(QnA);
