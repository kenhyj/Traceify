import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import {Send} from '@material-ui/icons';

import SymptomDisclaimer from "./symptom-disclaimer";

class SymptomChecker extends React.Component {
    constructor() {
        super();
        // this.state = { point: 0 };
        // this.state = {};
        // function for calculating
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.typeform = this.typeform.bind(this);
    }

    handleChange(event) {
        this.props.choosesymptoms(
            // Fixme: the reducer only shows the previous change, not the current change
            {[event.target.name]: (event.target.checked)? true : false}
            // {[event.target.name]: !event.target.checked}
        );
        console.log("this.props.diagnosis ");
        console.log(this.props.diagnosis);
    }
    handleSubmit(event) {
        console.log("Submitting diagnosis...");
        event.preventDefault();
        // Todo:
        // use action to submit points to symptom-disclaimer
    }

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
                This page will determine level of risks you are at based on these symptoms and criteria. <br />
                {/* <FormControl component="fieldset" className={classes.formControl}> */}
                <FormControl onSubmit={this.handleSubmit}>
                    <FormLabel component="symptoms">Please check all the boxes that pertains to you:</FormLabel>
                    {this.typeform(this.props.diagnosis.common)}
                    {this.typeform(this.props.diagnosis.rare)}
                    {this.typeform(this.props.diagnosis.serious)}
                    <Button type="submit" variant="contained" color="primary" endIcon={<Send/>} onClick={this.handleSubmit}>Submit</Button>
                </FormControl>
                {/* TODO: SymptomDisclaimer will show results based on points obtained by the forms clicked */}
                <SymptomDisclaimer />
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