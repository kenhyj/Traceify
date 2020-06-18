import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
<<<<<<< HEAD
import { Send, Refresh } from '@material-ui/icons';

import SymptomDisclaimer from "./symptom-disclaimer";
=======
import {Send, Refresh} from '@material-ui/icons';
import { submitSymptoms } from '../../redux/actions/diagnosis-actions';
>>>>>>> origin/mandy

class SymptomChecker extends React.Component {
    constructor() {
        super();
<<<<<<< HEAD
        this.state = { risk: false };
        this.disclaimer = null;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.typeform = this.typeform.bind(this);
        this.retakeTest = this.retakeTest.bind(this);
    }

    handleChange(event) {
        this.props.choosesymptoms(
            { [event.target.name]: (event.target.checked) ? true : false }
            // {[event.target.name]: !event.target.checked}
        );
        // console.log("this.props.diagnosis ");
        // console.log(this.props.diagnosis);
    }
    handleSubmit(event) {
        console.log("Submitting diagnosis...");
        event.preventDefault();
        console.log("this.props.diagnosis ");
        console.log(this.props.diagnosis);
        this.setState({ ...this.state, risk: true });
        // this.disclaimer = <SymptomDisclaimer />;
        // Todo:
        // use action to submit points to symptom-disclaimer
    }

    retakeTest(event) {
        this.setState({ ...this.state, risk: false });
        // this.disclaimer = <SymptomDisclaimer />;
    }
=======
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
>>>>>>> origin/mandy

    //  symptomappeardays = 
    // Symptoms may appear 2-14 days after exposure to the virus. People with these symptoms may have COVID-19: Fever or chills

<<<<<<< HEAD
    typeform(symptomtype) {
        return (
            <div>
                <FormGroup>
                    {symptomtype.map(somesymptoms =>
                        <FormControlLabel
                            control={<Checkbox onChange={this.handleChange} name={somesymptoms} />}
                            label={somesymptoms} />)}
                </FormGroup>
            </div>)
    }
=======
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
>>>>>>> origin/mandy

    render() {
        switch (this.state.risk) {
            case true:
                this.disclaimer = <SymptomDisclaimer />
                break;
            default:
                this.disclaimer = null
                break;
        }

        return (
            <div>
<<<<<<< HEAD
                This page will determine the level of risk you are at based to COVID 19 based these symptoms and criteria. <br /><br />
                <FormControl onSubmit={this.handleSubmit}>
                    <FormLabel component="symptoms">Please check all the boxes below that applies to you:</FormLabel>
                    {this.typeform(this.props.diagnosis.atrisk.sort())}
                    <br />
                    <FormLabel component="symptoms">Please check all the boxes below that you've experienced recently eg.last 2-14 days:</FormLabel>
                    {this.typeform(this.props.diagnosis.common.concat(this.props.diagnosis.rare.concat(this.props.diagnosis.serious)).sort())}

                </FormControl><br />
                <Button type="submit" variant="contained" color="primary" endIcon={<Send />} onClick={this.handleSubmit}>Submit</Button>
                {/* TODO: clear button */}
                <Button type="clear" variant="contained" color="secondary" endIcon={<Refresh />} onClick={this.retakeTest}>Retake the checker</Button>
                {/* TODO: SymptomDisclaimer will show results based on points obtained by the forms clicked */}
                {this.disclaimer}
=======
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
>>>>>>> origin/mandy
            </div>
        );
    }
}

const mapStateToProps = (state) => {
<<<<<<< HEAD
    return {
        diagnosis: state.diagnosis
    };
}
const mapDispatchToProps = (dispatch) => {
=======
>>>>>>> origin/mandy
    return {
        common: state.diagnosis.common,
        rare: state.diagnosis.rare,
        serious: state.diagnosis.serious,
        atrisk: state.diagnosis.atrisk,

        diagnosis: state.diagnosis.diagnosis
    };
};

export default connect(mapStateToProps, {submitSymptoms})(SymptomChecker);