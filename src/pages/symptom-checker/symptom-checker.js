import React from 'react';
// import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';
import Checkbox from '@material-ui/core/Checkbox';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Button } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import SymptomDisclaimer from "./symptom-disclaimer";

class SymptomChecker extends React.Component {
    constructor() {
        super();
        // this.state = { point: 0 };
        // function for calculating
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.typeform = this.typeform.bind(this);
    }

    handleChange(event) {
        // TBA
    }
    handleSubmit(event) {
        // TBA
        event.preventDefault();
        // this.props.diagnosisReducer(
        //     {
        //     }
        // );
        // use action to submit points to symptom-disclaimer
    }

    common = [
        "fever",
        "dry cough",
        "tiredness"
    ];
    rare = [
        "aches and pains",
        "sore throat",
        "diarrhea",
        "conjunctivitis",
        "headache",
        "loss of taste",
        "loss of smell",
        "a rash on skin",
        "discolouration of fingers or toes"
    ];
    serious = [
        "difficulty breathing or shortness of breath",
        "chest pain or pressure",
        "loss of speech",
        "loss of movement"
    ];

    //  symptomappeardays = 
    // Symptoms may appear 2-14 days after exposure to the virus. People with these symptoms may have COVID-19: Fever or chills

    typeform(symptomtype) {
        return (        
        <div>
            <FormGroup>
                {symptomtype.map(somesymptoms =>
                    <FormControlLabel
                        control={<Checkbox onChange={this.handleChange} name={"symptom" + { somesymptoms }} />}
                        label={somesymptoms} />)}
            </FormGroup>
        </div>)
    }
    commonform = (
        this.typeform(this.common)
    );
    rareform = (
        this.typeform(this.rare)
    );
    seriousform = (
        this.typeform(this.serious)
    );

    render() {
        return (
            <div>
                This page will determine level of risks you are at based on these symptoms and criteria. <br />
                {/* <FormControl component="fieldset" className={classes.formControl}> */}
                <FormControl>
                    <FormLabel component="symptoms">Please check all the boxes that pertains to you:</FormLabel>
                    {console.log("Hello facebsdfasdf")}
                    {console.log(this.props.diagnosis)}
                    {this.commonform}
                    {this.rareform}
                    {this.seriousform}
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
        choosesymptoms: (symptoms) => { dispatch({ type: 'SELECTED_SYMPTOMS', symptompayload: symptoms }) },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(SymptomChecker);