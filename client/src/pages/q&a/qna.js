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
      <p>Check here for frequently asked questions.</p>
    </>
  );
  const body = (
    <>Fraud alert: The government will never contact you via text message.</>
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
            <AccordionDetails>
              <Typography
                style={{ padding: '5%', textAlign: 'center', width: '100%' }}
              >
                This is a contact tracing website for Vancouver built by a group
                of UBC CS students.
                <br />
                <br />- Intro Clip of Traceify -
                <div className='video_wrapper'>
                  <iframe
                    title='traceifyutube'
                    src='https://www.youtube.com/embed/8TWWVOtbVD8'
                    frameBorder='0'
                    allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                    allowFullscreen
                    style={{ width: '100%' }}
                  />
                </div>
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
                Symptom Checker - How accurate is this?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                style={{ padding: '5%', textAlign: 'center', width: '100%' }}
              >
                The symptoms that you see are taken from the list of symptoms
                recorded by the Centre for Disease Control (CDC).
                <br />
                We cannot claim any liabilities or damages from the results of
                this quiz.
                <br />
                COVID-19 RNA testing or antibody testing is the most reliable to
                test presence of COVID-19.
                <br />
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel2b-content'
              id='panel2b-header'
            >
              <Typography className={classes.heading}>
                Reopening - Can we regress back a phase?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                style={{ padding: '5%', textAlign: 'center', width: '100%' }}
              >
                Yes.
                <br />
                If the number COVID-19 positive population exceeds a certain
                threshold (each provincial territorial government will have
                different threshold), the phases can regress back a phase or
                multiple phases.
                <br />
                Other conditions may also regress the phase. It is possible that
                despite an overall regressing COVID-19 positive population, if a
                certain group such as elderlies or children have increased
                number of COVID-19 afflicted, then a phase can be regressed or a
                new phase with more restrictions can be imposed.
                <br />
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
            <AccordionDetails>
              <Typography
                style={{ padding: '5%', textAlign: 'center', width: '100%' }}
              >
                Unfortunately, no.
                <br />
                However, we try our best to catch up with the latest updates and
                make changes to our database.
                <br />
                <br />
                Vancouver does not provide any open-source dataset on COVID
                patients. The data shown on this map is solely deduced from
                available news articles. Reopening is not up to date either.
                There is not a readily available API or database from the
                government or medical organization of each province or
                territory.
                <br />
                <br />
                UPDATE:
                <br />
                Vancouver Coastal Health started to release public exposure
                information recently. Traceify will use these data as well as
                news articles to populate the database with real dataset.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel4a-content'
              id='panel4a-header'
            >
              <Typography className={classes.heading}>
                Is there a cure for COVID-19?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                style={{ padding: '5%', textAlign: 'center', width: '100%' }}
              >
                While there are some drugs that have shown some positive
                results, the Centre for Disease Control (CDC) or World Health
                Organization (WHO) have yet to formally approve any drugs or
                vaccines. Please be assured that this is a global crisis and
                every single nation and its people work hard to develop a
                treatment.
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
                What is an outbreak?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                style={{ padding: '5%', textAlign: 'center', width: '100%' }}
              >
                Outbreaks occur when infected people, including patients, staff,
                volunteers, contracted workers and visitors, come to our
                hospitals and others become infected. The medical health officer
                determines when an outbreak will be declared.
                <br />
                Generally, an outbreak is declared if three or more cases
                involving patients and/or staff occur within a designated time
                frame and in a specific area or unit. For C. difficile, an
                outbreak is declared when the number of cases increases above
                what is normally experienced.
                <br />
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
                What is a potential exposure?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                style={{ padding: '5%', textAlign: 'center', width: '100%' }}
              >
                As a precaution, health authorities update this data with the
                locations and times of known possible exposures to COVID-19 to
                the public in our region. The possible exposures listed on this
                site are believed to be low risk but, out of an abundance of
                caution, Public Health asks anyone who may have visited any of
                the locations listed on the specified dates and times to monitor
                themselves for symptoms. There is no known risk to anyone who
                attended any listed locations outside of the specified dates and
                times. If people remain healthy and do not develop symptoms,
                there is no need to self-isolate and people can continue with
                their usual daily activities. If you develop any symptoms of
                COVID-19, please seek testing and then self-isolate. Please call
                ahead and wear a mask when seeking testing.
                <br />
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
                type='button'
                className='link-button'
                onClick={() =>
                  window.open(
                    'https://www.canada.ca/en/revenue-agency/services/benefits/apply-for-cerb-with-cra.html',
                    '_blank'
                  )
                }
              >
                MORE
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
                type='button'
                className='link-button'
                onClick={() =>
                  window.open(
                    'https://www.canada.ca/en/revenue-agency/services/benefits/emergency-student-benefit.html',
                    '_blank'
                  )
                }
              >
                MORE
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
                type='button'
                className='link-button'
                onClick={() =>
                  window.open(
                    'https://www2.gov.bc.ca/gov/content/employment-business/covid-19-financial-supports/emergency-benefit-workers',
                    '_blank'
                  )
                }
              >
                MORE
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
                type='button'
                className='link-button'
                onClick={() =>
                  window.open(
                    'https://experience.arcgis.com/experience/3862560c5a41418e9d78f4f81688e9d0',
                    '_blank'
                  )
                }
              >
                MORE
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
                type='button'
                className='link-button'
                onClick={() =>
                  window.open(
                    'http://www.edwaittimes.ca/WaitTimes.aspx',
                    '_blank'
                  )
                }
              >
                MORE
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
                type='button'
                className='link-button'
                onClick={() =>
                  window.open(
                    'https://experience.arcgis.com/experience/a6f23959a8b14bfa989e3cda29297ded',
                    '_blank'
                  )
                }
              >
                MORE
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
