import React from 'react';
// import Home from "./pages/home/home";
// import Header from "./components/header/header";
// import PagesBar from "./components/header/PagesBar"

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
                {/* <Header  title="Covid 19 - Traceify"/>
                <PagesBar/> */}
                <SymptomDisclaimer/>
            </div>
        );
    }
}

export default SymptomChecker;