import React from 'react';
import {
  Button,Grid, Checkbox,FormControl,
  FormGroup,FormControlLabel,
} from '@material-ui/core';
import { connect } from 'react-redux';
import { Send } from '@material-ui/icons';
import { motion } from 'framer-motion';
import SymptomDisclaimer from './symptom-disclaimer';
import PageHeading from '../../components/page-heading/PageHeading';
import { variants, transitions, pageStyle } from '../motion-settings';
import Instruction from '../../components/instruction/instruction';

class SymptomChecker extends React.Component {
  constructor() {
    super();
    this.state = { risk: false,width: 0 };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.typeform = this.typeform.bind(this);
    window.addEventListener("resize", this.update);
  }

  componentDidMount() {
    this.update();
  }

  update = () => {
    this.setState({
      width: window.innerWidth,
    });
  };

  handleChange(event) {
    this.props.choosesymptoms({
      [event.target.name]: !!event.target.checked,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const prevState = this.state;
    this.setState({ ...prevState, risk: true, show: true });
    this.props.showResult();
  }

  typeform(symptomtype) {
    return (
      <Grid style={{ margin : '3%', marginLeft: '10%' }}>
        <FormGroup row='true'>
          {symptomtype.map((somesymptoms) => (
            <Grid item xs={6} sm = {4} md ={3} xl = {2}>
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={this.handleChange}
                    name={somesymptoms}
                    color='default'
                  />
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
      <div>Wondering if you should get tested? Discover a treatment plan below.</div>
    );
    const body = (
      <div>
        <p>
          This page will determine the level of risk you are at based to COVID
          19 based these symptoms and criteria.
        </p>
        <p>
          <b>Disclaimer: </b>
          Use this checker at your own discretion.
        </p>
      </div>
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
        <FormControl onSubmit={this.handleSubmit} className='page-content'>
          <Instruction
            text='Please check all the boxes below that applies to you:'
            width='50%'
          />
          {this.typeform(this.props.diagnosis.atrisk.sort())}
          <Instruction
            text="Please check all the boxes below that you've experienced recently
                        eg.last 2-14 days:"
            width='50%'
          />
          {this.typeform(
            []
              .concat(
                this.props.diagnosis.common,
                this.props.diagnosis.rare,
                this.props.diagnosis.serious
              )
              .sort()
          )}
          <Grid container style={{ width: '200px', marginLeft : `${this.state.width*0.5 - 100}px`}}>
            <Grid container justify='center'>
              <Button
                type='submit'
                variant='contained'
                endIcon={<Send />}
                onClick={this.handleSubmit}
                className='button'
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </FormControl>
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
