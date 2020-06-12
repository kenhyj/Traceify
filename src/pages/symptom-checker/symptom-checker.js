import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import {Send, Refresh} from '@material-ui/icons';

import SymptomDisclaimer from "./symptom-disclaimer";

class SymptomChecker extends React.Component {
    constructor() {
        super();
        // this.state = {risk:false};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.typeform = this.typeform.bind(this);
        this.retakeTest = this.retakeTest.bind(this);
    }

    handleChange(event) {
        this.props.choosesymptoms(
            // Fixme: the reducer only shows the previous change, not the current change.
            {[event.target.name]: (event.target.checked)? true : false}
            // {[event.target.name]: !event.target.checked}
        );
        console.log("this.props.diagnosis ");
        console.log(this.props.diagnosis);
    }
    handleSubmit(event) {
        console.log("Submitting diagnosis...");
        event.preventDefault();
        console.log("this.props.diagnosis ");
        console.log(this.props.diagnosis);
        // this.setState({...this.state, risk: true});
        // Todo:
        // use action to submit points to symptom-disclaimer
    }

    retakeTest(event) {}

    //  symptomappeardays = 
    // Symptoms may appear 2-14 days after exposure to the virus. People with these symptoms may have COVID-19: Fever or chills

    typeform(symptomtype) {
        return (        
        <div>
            <FormGroup>
                {symptomtype.map(somesymptoms =>
                    <FormControlLabel
                        control={<Checkbox onChange={this.handleChange} name={ somesymptoms } />}
                        label={somesymptoms} />)}
            </FormGroup>
        </div>)
    }

    render() {
        return (
            <div>
                This page will determine the level of risk you are at based to COVID 19 based these symptoms and criteria. <br />
                <FormControl onSubmit={this.handleSubmit}>
                    <FormLabel component="symptoms">Please check all the boxes that pertains to you:</FormLabel>
                    {this.typeform(this.props.diagnosis.common)}
                    {this.typeform(this.props.diagnosis.rare)}
                    {this.typeform(this.props.diagnosis.serious)}
                    {this.typeform(this.props.diagnosis.atrisk)}
                    
                </FormControl><br/>
                <Button type="submit" variant="contained" color="primary" endIcon={<Send/>} onClick={this.handleSubmit}>Submit</Button>
                {/* TODO: clear button */}
                <Button type="clear" variant="contained" color="secondary" endIcon={<Refresh/> }>Retake the checker</Button> 
                {/* TODO: SymptomDisclaimer will show results based on points obtained by the forms clicked */}
               <SymptomDisclaimer/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { 
        diagnosis: state.diagnosis
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        choosesymptoms: (symptoms) => { dispatch({ type: 'SELECTED_SYMPTOMS', payload: symptoms }) },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(SymptomChecker);