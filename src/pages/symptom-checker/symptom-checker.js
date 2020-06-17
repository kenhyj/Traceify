import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import {Send, Refresh} from '@material-ui/icons';
import { submitSymptoms } from '../../redux/actions/diagnosis-actions';

class SymptomChecker extends React.Component {
    constructor() {
        super();
        this.state = {
            selectedSymptoms: []
        }
    }

    handleChange = symptom => {
        let symptoms = this.state.selectedSymptoms;
        let index = symptoms.indexOf(symptom);

        if (index > -1) {
            symptoms.splice(index, 1);
            this.setState({
                selectedSymptoms: symptoms
            })
        } else
            symptoms.push(symptom)
    };

    retakeTest = event => {};

    //  symptomappeardays = 
    // Symptoms may appear 2-14 days after exposure to the virus. People with these symptoms may have COVID-19: Fever or chills

    typeForm = symptomType => {
        return (        
        <div>
            <FormGroup>
                {symptomType.map(symptom =>
                    <FormControlLabel
                        control={<Checkbox onChange={this.handleChange(symptom)} name={ symptom } />}
                        label={symptom} />)}
            </FormGroup>
        </div>)
    };

    resetPage = () => {
      this.forceUpdate();
    };

    render() {
        return (
            <div>
                This page will determine the level of risk you are at based to COVID 19 based these symptoms and criteria. <br />
                <FormControl>
                    <FormLabel component="symptoms">Please check all the boxes that pertains to you:</FormLabel>
                    {this.typeForm(this.props.common)}
                    {this.typeForm(this.props.rare)}
                    {this.typeForm(this.props.serious)}
                    {this.typeForm(this.props.atrisk)}
                </FormControl><br/>

                <Button type="submit" variant="contained" color="primary" endIcon={<Send/>} onClick={() => this.props.submitSymptoms(this.state.selectedSymptoms)}>Submit</Button>
                {/* TODO: clear button */}
                <Button type="clear" variant="contained" color="secondary" endIcon={<Refresh/>} onClick={() => this.resetPage()}>Retake the checker</Button>

                {/* TODO: SymptomDisclaimer will show results based on points obtained by the forms clicked */}
                <h3>{this.props.diagnosis}</h3>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        common: state.diagnosis.common,
        rare: state.diagnosis.rare,
        serious: state.diagnosis.serious,
        atrisk: state.diagnosis.atrisk,

        diagnosis: state.diagnosis.diagnosis
    };
};

export default connect(mapStateToProps, {submitSymptoms})(SymptomChecker);