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
    return (
      <div>
        <div className='title-container'>
          <h2>
            This page will determine the level of risk you are at based to COVID
            19 based these symptoms and criteria.{' '}
          </h2>
        </div>

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
          <Grid container style={{ width: '30%', marginLeft: '35%' }}>
            <Grid item xs={6} container justify='center'>
              <Button
                type='submit'
                variant='contained'
                color='primary'
                endIcon={<Send />}
                onClick={this.handleSubmit}
              >
                Submit
              </Button>
            </Grid>
            <Grid item xs={6} container justify='center'>
              <Button
                type='clear'
                variant='contained'
                color='secondary'
                endIcon={<Refresh />}
                onClick={this.retakeTest}
              >
                Retake
              </Button>
            </Grid>

            {/* TODO: clear button */}
          </Grid>
        </FormControl>

        {/* TODO: SymptomDisclaimer will show results based on points obtained by the forms clicked */}
        <SymptomDisclaimer />
      </div>
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
