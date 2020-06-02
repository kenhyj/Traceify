import React from 'react';

export class SymptomDisclaimer extends React.Component {
    constructor() {
        super();
        this.state = {};

    }

    render() {
        return (
            <div>
                This will be the disclaimer and results component <br />
                {asymptomatic};
                {emergency};
            </div>
        );
    }
}

const please = (
    <div>
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

export default SymptomDisclaimer;