import React from 'react';
import { connect } from 'react-redux';
import './symptom-checker.css';
import {hideResult} from '../../redux/actions/diagnosis-actions';


export class SymptomDisclaimer extends React.Component {
    
    please = (
        <div>
            <br/>
            Currently there is no official treatment or cure for COVID-19. <br />
            Meanwhile, please continue to practice social distancing and wash your hands thoroughly and regularly. <br />
            Avoid large gatherings and limit outside contact to as limited to shopping groceries and essentials. <br />
            If you are seeing new symptoms or pre-existing symptoms worsen in the next 2-14 days, check the symptom checker or in case of emergency contact your local
            health authorities.
        </div>)

    gimme(simptoms) {
        const asymptomatic = (
            <div className = 'dis-result'>
                You are asymptomatic. <br />
                You may be a virus carrier. <br />
                    To be sure that you are virus-free, a COVID testing from a clinic is necessary. <br />
                {this.please}
            </div>)

        const chill = (
            <div className = 'dis-result'>
                You are exhibiting some of the more common symptoms of someone who has the virus. <br />
                Do not be alarmed. Some of these are commonly seen in colds and flu <br />
                {this.please}
            </div>)

        const interesting = (
            <div className = 'dis-result'>
                You are exhibiting some of the rarest symptoms of someone who has the virus. <br />
            Not many individuals who have contracted COVID 19 exhibits these symptoms<br />
                {this.please}
            </div>)

        const emergency = (
            <div className = 'dis-result'>
                You are exhibiting some of the more serious symptoms exhibited by those with the COVID virus <br />
                {this.please}
            </div>)

        for (let x of simptoms.serious) {
            if (simptoms.symptoms[x]) {
                return emergency;
            }
        }
        for (let y of simptoms.rare) {
            if (simptoms.symptoms[y]) {
                return interesting;
            }
        }
        for (let z of simptoms.common) {
            if (simptoms.symptoms[z]) {
                return chill;
            }
        }
        return asymptomatic;
    }
    atrisque(criteria) {
        const complications = (
            <div className = 'dis-result'>
                The COVID-19 will or has put you at an elevated risk of developing health complications from either your pre-existing disorder or current disorder
            </div>)

        for (let s of criteria.atrisk) {
            if (criteria.symptoms[s]) {
                return complications;
            }
        }
        return null;
    }

    render() {
        return (
            <div className = 'pop-dis'style={{ display: this.props.diagnosis.showResult ? 'block' : 'none' }}>
            <button className = 'dis-button' onClick = {()=>this.props.close()}>X</button>
                {this.atrisque(this.props.diagnosis)} <br/>
                {this.gimme(this.props.diagnosis)} <br/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        diagnosis: state.diagnosis,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        close: () => { dispatch({ type: 'HIDE_RESULT'}) },
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(SymptomDisclaimer);
