import React from 'react';
import { connect } from 'react-redux';

export class SymptomDisclaimer extends React.Component {
    // constructor() {
    //     super();
    //     this.state = {};
    // }

    render() {
        return (
            <div>
                <br/><br/>
                This will be the disclaimer and results component <br/> <br/>
                {asymptomatic} <br/> 
                {chill} <br/> 
                {emergency} <br/> 
                {complications} <br/>
            </div>
        );
    }
}

const please = (
    <div>
        Currently there is no official treatment or cure for COVID-19. <br />
        Meanwhile, please continue to practice social distancing and wash your hands thoroughly and regularly. <br />
        Avoid large gatherings and limit outside contact to as limited to shopping groceries and essentials. <br />
    </div>);

const asymptomatic = (
        <div>
            You are asymptomatic. <br />
            You may be a virus carrier. <br />
            To be sure that you are virus-free, a COVID testing from a clinic is necessary. <br/>
            {please}
        </div>);

const chill = (
    <div>
        You are exhibiting some of the more common symptoms of someone who has the virus. <br />
        {please}
    </div>);

const emergency = (
    <div>
        You are exhibiting some of the more serious symptoms exhibited by those with the COVID virus <br/>
        {please}
    </div>
);

const complications = (
    <div>
        The COVID-19 has put you at an elevated risk of developing health complications from either your pre-existing disorder or current disorder 
        {please}
    </div>
);

// export default SymptomDisclaimer;

const mapStateToProps = (state) => {
    return { 
        diagnosis: state.diagnosis
    };
}
// const mapDispatchToProps = (dispatch) => {
//     return {
//         choosesymptoms: (symptoms) => { dispatch({ type: 'SELECTED_SYMPTOMS', payload: symptoms }) },
//     };
// };
export default connect(mapStateToProps, null)(SymptomDisclaimer);