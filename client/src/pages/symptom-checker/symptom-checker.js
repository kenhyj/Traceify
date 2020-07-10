import React from 'react';
import {
  Button,
  Grid,
  Checkbox,
  FormLabel,
  FormControl,
  FormGroup,
  FormControlLabel,
} from '@material-ui/core';
import { connect } from 'react-redux';
import { Send, Refresh } from '@material-ui/icons';
import './symptom-checker.css';
import SymptomDisclaimer from './symptom-disclaimer';
import PageHeading from '../../components/page-heading/PageHeading';
import { motion } from 'framer-motion';
import { variants, transitions, pageStyle } from '../motion-settings';
import PageHeader from "../../components/page-header/page-header";
import Instruction from "../../components/instruction/instruction";

class SymptomChecker extends React.Component {
  constructor() {
    super();
    this.state = { risk: false };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.typeform = this.typeform.bind(this);
    this.retakeTest = this.retakeTest.bind(this);
  }

  handleChange(event) {
    this.props.choosesymptoms({
      [event.target.name]: !!event.target.checked,
    });
    // console.log({[event.target.name]: !event.target.checked})
    // console.log("this.props.diagnosis ");
    // console.log(this.props.diagnosis);
  }

  handleSubmit(event) {
    // console.log('Submitting diagnosis...');
    event.preventDefault();
    // console.log('this.props.diagnosis ');
    // console.log(this.props.diagnosis);
    this.setState({ ...this.state, risk: true, show: true });
    this.props.showResult();
    // console.log(this.props.diagnosis);
  }

  retakeTest(event) {
    this.setState({ ...this.state, risk: false });
    // this.disclaimer = <SymptomDisclaimer />;
  }

  //  symptomappeardays =
  // Symptoms may appear 2-14 days after exposure to the virus. People with these symptoms may have COVID-19: Fever or chills

  typeform(symptomtype) {
    return (
      <Grid style={{ margin: '1%' }}>
        <FormGroup row='true'>
          {symptomtype.map((somesymptoms) => (
            <Grid item xs={3}>
              <FormControlLabel
                control={
                  <Checkbox onChange={this.handleChange} name={somesymptoms} />
                }
                label={somesymptoms}
              />
            </Grid>
          ))}
        </FormGroup>
      </Grid>
    );
  }

  render() {
    const heading = 'Symptom Checker';
    const subheading = (
      <>Wondering if you should get tested? Discover a treatment plan below.</>
    );
    const body = (
      <>
        <p>
          This page will determine the level of risk you are at based to COVID
          19 based these symptoms and criteria.{' '}
        </p>
        <p>Disclaimer: Use this checker at your own discretion.</p>
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
          */}
          <FormControl onSubmit={this.handleSubmit}>
          <FormLabel className='formLabel' component='symptoms'>
            Please check all the boxes below that applies to you:
          </FormLabel>
          {this.typeform(this.props.diagnosis.atrisk.sort())}
          <br />
          <FormLabel className='formLabel' component='symptoms'>
            Please check all the boxes below that you've experienced recently
            eg.last 2-14 days:
          </FormLabel>
          {this.typeform(
            this.props.diagnosis.common
              .concat(
                this.props.diagnosis.rare.concat(this.props.diagnosis.serious)
              )
              .sort()
          )}
          <br/><br/>
          <Grid container style={{ width: '30%', marginLeft: '35%' }}>
            <Grid item xs={6} container justify='center'>
              <Button
                type='submit'
                variant='contained'
                endIcon={<Send />}
                onClick={this.handleSubmit}
                className="button"
              >
                Submit
              </Button>
            </Grid>
            <Grid item xs={6} container justify='center'>
              <Button
                type='clear'
                variant='contained'
                endIcon={<Refresh />}
                onClick={this.retakeTest}
                className="button"
              >
                Retake
              </Button>
            </Grid>

            {/* TODO: clear button */}
          </Grid>
        </FormControl>

        {/* TODO: SymptomDisclaimer will show results based on points obtained by the forms clicked */}
        <SymptomDisclaimer />
      </motion.div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    diagnosis: state.diagnosis,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    choosesymptoms: (symptoms) => {
      dispatch({ type: 'SELECTED_SYMPTOMS', payload: symptoms });
    },
    showResult: () => {
      dispatch({ type: 'GENERATE_RESULT' });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SymptomChecker);
