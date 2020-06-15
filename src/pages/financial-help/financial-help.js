import React from 'react';
import { withRouter } from 'react-router-dom';
import Card from '../../components/card/Card-TitleDescButtonn';

// TODO: are we going to have a separate component for component headers?

const FinancialHelp = () => {
    const helpResources = [
        {
            title: "Canadian Emergency Response Benefit (CERB)",
            description: "The benefit provided by the Canadian Federal Government for those affected by COVID-19.",
            url: "https://www.canada.ca/en/revenue-agency/services/benefits/apply-for-cerb-with-cra.html",
            id: 0
        },
        {
            title: "Canadian Emergency Student Benefit (CESB)",
            description: "The Canada Emergency Student Benefit (CESB) provides financial support to post-secondary students, and recent post-secondary and high school graduates who are unable to find work due to COVID-19.",
            url: "https://www.canada.ca/en/revenue-agency/services/benefits/emergency-student-benefit.html",
            id: 1
        },
    ];

    return (
        <div>
            <div>
                <h2>Financial Help Resources</h2>
            </div>
            <div>
            {helpResources.map(resource => 
                <Card key={resource.id} {...resource} />
            )}
            </div>
        </div>
    );
};

export default withRouter(FinancialHelp);
