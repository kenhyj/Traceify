import React from 'react';
// import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';
import Checkbox from '@material-ui/core/Checkbox';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import { withRouter } from 'react-router-dom';

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
        "loss of taste and or smell",
        "a rash on skin, or discolouration of fingers or toes"
    ];
    serious = [
        "difficulty breathing or shortness of breath",
        "chest pain or pressure",
        "loss of speech or movement"
    ];

    //  symptomappeardays = 
    // Symptoms may appear 2-14 days after exposure to the virus. People with these symptoms may have COVID-19: Fever or chills

    // commonform = (
    //     <div>
    //         {this.common.map(function (object, i) {
    //             return <FormControlLabel
    //                 control={<Checkbox onChange={this.handleChange} name="gilad" />}
    //                 label={this.common[i]}
    //             />;
    //         })}
    //     </div>
    // )

    render() {
        return (
            <div>
                This page will determine level of risks you are at based on these symptoms and criteria. <br />
                {/* <FormControl component="fieldset" className={classes.formControl}> */}
                <FormControl>
                    <FormLabel component="symptoms">Please check all the boxes that pertains to you:</FormLabel>
                    <FormGroup>
                        {/* <FormControlLabel
                            control={<Checkbox checked={gilad} onChange={handleChange} name="gilad" />}
                            label="Gilad Gray"
                        /> */}
                        <FormControlLabel
                            control={<Checkbox onChange={this.handleChange} name="common0" />}
                            label={this.common[0]}
                        />
                        {/* <FormControlLabel
                            control={<Checkbox checked={jason} onChange={handleChange} name="jason" />}
                            label="Jason Killian"
                        /> */}
                        <FormControlLabel
                            control={<Checkbox onChange={this.handleChange} name="common1" />}
                            label={this.common[1]}
                        />
                    </FormGroup>
                    {/* <FormHelperText>Be careful</FormHelperText> */}
                </FormControl>

                <SymptomDisclaimer />
            </div>
        );
    }
}

export default withRouter(SymptomChecker);

// const mapStateToProps = (state) => {
//     return { mssgTable: state.mssgTable };
// }
// const mapDispatchToProps = (dispatch) => {
//     return {
//         addMessage: (messagePayload) => { dispatch({ type: 'ADD_MESSAGE', payload: messagePayload }) },
//     };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(symptom-checker);