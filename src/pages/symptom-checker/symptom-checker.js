import React from 'react';
// import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';


import SymptomDisclaimer from "./symptom-disclaimer";

class SymptomChecker extends React.Component {
    constructor(){
        super();
        this.state={point: 0};
        // function for calculating
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

    render(){
        return (
            <div>
                This will be main symptom checker component here <br/>
                <SymptomDisclaimer/>
            </div>
        );
    }
}

export default SymptomChecker;