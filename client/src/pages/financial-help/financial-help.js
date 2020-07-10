import React from 'react';
import { withRouter } from 'react-router-dom';
import Card from '../../components/card/Card-TitleDescButton';
import PageHeading from '../../components/page-heading/PageHeading';
import './financial-help.css';

// TODO: are we going to have a separate component for component headers?

const FinancialHelp = (props) => {
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

    const heading = "Financial Help";
    const subheading = 
        <>
            “We know that people are worried about their health, their jobs and their financial situations. Our government is doing whatever it takes to protect the health and safety of Canadians, and to support workers, families and businesses. The Canada Emergency Response Benefit would make sure that money gets in the hands of workers as quickly as possible to support them in their time of need, and would help businesses keep their employees during this difficult period. Canadians can rest assured that the government stands ready to take any and all necessary actions as we continue to confront these challenging times together.”
            <br />
            <p>- Bill Morneau, Minister of Finance</p>
        </>;
    const body = "Check here for the financial help resources."
    const pageHeadingData = {heading, subheading, body};
    
    return (
        <div>
            <div>
                <PageHeading data={pageHeadingData} />
            </div>
            <div className='financial-help-body'>
                {helpResources.map(resource => 
                    <Card key={resource.id} {...resource} />
                )}
            </div>
        </div>
    );
};

export default withRouter(FinancialHelp);
