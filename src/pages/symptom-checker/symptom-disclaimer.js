import React from 'react';
import { connect } from 'react-redux';

export class SymptomDisclaimer extends React.Component {
    // constructor() {
    //     super();
    //     this.state = {};
    //     this.gimme = this.gimme.bind(this);
    // }

    render() {
        const gimme = () => {
            const lemmec = this.props.diagnosis;
            for (let d in lemmec.symptoms) {
                for (let x of lemmec.serious) {
                    if (d[x]) {
                        return {emergency};
                    }
                } 
                for (let y of lemmec.rare){
                    if (d[y]) {
                        return {interesting};
                    }
                }
                for (let z of lemmec.common) {
                    if (d[z]) {
                        return {chill};
                    }
                }
            }
            return {asymptomatic};
        };
    
        const atrisk = () => {
            const lemmec = this.props.diagnosis;
            for (let d of lemmec.symptoms) {
                for (let s in lemmec.atrisk) {
                    if (d[s]) {
                        return {complications};
                    }
                }
            }
            return null;
        }

        return (
            <div>
                <br/><br/>
                This will be the disclaimer and results component <br/> <br/>
                {/* {gimme}
                {atrisk} */}
                {asymptomatic}
            </div>
        );
    }
}

const please = (
    <div>
        Currently there is no official treatment or cure for COVID-19. <br />
        Meanwhile, please continue to practice social distancing and wash your hands thoroughly and regularly. <br />
        Avoid large gatherings and limit outside contact to as limited to shopping groceries and essentials. <br />
        If you are seeing new symptpoims or pre-existing symptoms worsen in the next 2-14 days, check the symptom checker or in case of emergency contact your local 
        health authorities.
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
        You are exhibiting some of the more common symptoms of someone who has the virus. <br/>
        Do not be alarmed. Some of these are commonly seen in colds and flu <br />
        {please}
    </div>);

const interesting = (
    <div>
    You are exhibiting some of the rarest symptoms of someone who has the virus. <br/>
    Not many individuals who have contracted COVID 19 exhibits these symptoms<br/>
    {please}
    </div>
);

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

const mapStateToProps = (state) => {
    return { 
        diagnosis: state.diagnosis
    };
};
// const mapDispatchToProps = (dispatch) => {
//     return {
//         choosesymptoms: (symptoms) => { dispatch({ type: 'SELECTED_SYMPTOMS', payload: symptoms }) },
//     };
// };
export default connect(mapStateToProps, null)(SymptomDisclaimer);