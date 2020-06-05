import React from 'react';
import { withRouter } from 'react-router-dom';
import FinancialHelpCard from './financial-help-card';

// TODO: are we going to have a separate component for component headers?

const FinancialHelp = () => {
    const helpResources = [
        {
            title: "Canadian Emergency Response Benefit",
            description: "The benefit provided by the Canadian Federal Government for those affected by COVID-19.",
            url: "https://www.canada.ca/en/revenue-agency/services/benefits/apply-for-cerb-with-cra.html",
            id: 0
        },
    ];

    return (
        <div>
            <div>
                <h2>Financial Help Resources</h2>
            </div>
            <div>
            {helpResources.map(resource => 
                <FinancialHelpCard key={resource.id} {...resource} />
            )}
            </div>
        </div>
    );
};

export default withRouter(FinancialHelp);
