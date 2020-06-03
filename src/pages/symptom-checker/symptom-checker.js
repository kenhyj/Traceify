import React from 'react';
// import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';
import Checkbox from '@material-ui/core/Checkbox';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';

import SymptomDisclaimer from "./symptom-disclaimer";

class SymptomChecker extends React.Component {
    constructor() {
        super();
        this.state = { point: 0 };
        // function for calculating
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        // TBA
    }
    handleSubmit(event) {
        // TBA
        event.preventDefault();
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

    commonform = (
        <div>
            {this.common.map(commonsymptoms =>
                <FormControlLabel
                    control={<Checkbox onChange={this.handleChange} name={"symptom" + { commonsymptoms }} />}
                    label={commonsymptoms} />)}
        </div>
    );

    rareform = (
        <div>
            {this.rare.map(raresymptoms =>
                <FormControlLabel
                    control={<Checkbox onChange={this.handleChange} name={"symptom" + { raresymptoms }} />}
                    label={raresymptoms} />)}
        </div>
    );
    seriousform = (
        <div>
            {this.serious.map(serioussymptoms =>
                <FormControlLabel
                    control={<Checkbox onChange={this.handleChange} name={"symptom" + { serioussymptoms }} />}
                    label={serioussymptoms} />)}
        </div>
    );

    render() {
        return (
            <div>
                This page will determine level of risks you are at based on these symptoms and criteria. <br />
                {/* <FormControl component="fieldset" className={classes.formControl}> */}
                <FormControl>
                    <FormLabel component="symptoms">Please check all the boxes that pertains to you:</FormLabel>
                    <FormGroup>
                        {/* <FormControlLabel
                            control={<Checkbox onChange={this.handleChange} name="common0" />}
                            label={this.common[0]}
                        />
                        <FormControlLabel
                            control={<Checkbox onChange={this.handleChange} name="common1" />}
                            label={this.common[1]}
                        /> */}
                        {this.commonform}
                        {this.rareform}
                        {this.seriousform}
                    </FormGroup>
                    {/* <FormHelperText>Be careful</FormHelperText> */}
                </FormControl>

                <SymptomDisclaimer />
            </div>
        );
    }
}

export default SymptomChecker;

// const mapStateToProps = (state) => {
//     return { mssgTable: state.mssgTable };
// }
// const mapDispatchToProps = (dispatch) => {
//     return {
//         addMessage: (messagePayload) => { dispatch({ type: 'ADD_MESSAGE', payload: messagePayload }) },
//     };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(symptom-checker);