import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './reopening.css';
import React, { useState } from 'react';
import PageHeading from '../../components/page-heading/PageHeading';
import { motion } from 'framer-motion';
import { variants, transitions, pageStyle } from '../motion-settings';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Typography } from '@material-ui/core';

const pei = {
  province: 'Prince Edward Island',
  abbr: 'PE',
  current_stage: 4,
  phases: [
    {
      phase: 1,
      restrictions: {
        'Angling season and licenses': `Location: Online and private vendors.\n Open May 1. `,
        'Carbon Capture Tree Planting Program':
          'Location: Properities of private woodlot owners. \n Open May 1. ',
        'Forest Enhancement Program':
          'Location: Properities of private woodlot owners. \n Open May 1. ',
        'Protected Areas Program':
          'Locations:183 Upton Road (and virtual meetings). \n Open May 1. ',
        'Watershed Management Program':
          'Locations: 	Watersheds across PEI. \n Open May 1. ',
        'Wildlife Inventory and Monitoring':
          'Locations: Across PEI. \n Open May 1. ',
        'Slemon Park Corporation - On The Fly Retail Store and Postal Outlet':
          'Location: Slemon Park. \n Open May 1. ',
        'Slemon Park Corporation - Residential Leasing, Commercial Leasing, Property Management, and Administration':
          'Location: Slemon Park. \n Open May 1. ',
        "Crown Attorneys' Office - Queens and Kings County":
          'Location: 50 Water Street, Charlottetown. \n Open May 1. ',
        "Crown Attorneys' Office - Prince County":
          'Location: 243 Heather Moyse Drive, Summerside. \n Open May 1. ',
        'PEI Legal Aid Offices':
          'Locations: \n 40 Great George St, Charlottetown. \n 120 Heather Moyse Drive, Summerside. \n Open May 1 by appointment. ',
        'PEI Legal Aid Family Office':
          'Location: 1 Harbourside Access Road, Charlottetown. \n Open May 1 by appointment. ',
        'Feed Lab Services':
          'Location: PEI Analytical Lab Biocommons Park. \n Open May 3. ',
        'Efficiency PEI':
          'Location: 69 Belvedere Avenue, Charlottetown. \n Open May 11. ',
        'Soil Health Lab Services':
          'Location: PEI Analytical Lab Biocommons Park. \n Open May 11. ',
        'Educational Services':
          'Location: Enman Crescent. \n Open May 14 by appointment. ',
        "Access PEI Services (except driver's testing)":
          "Locations: Souris Charlottetown, Summerside, O'Leary. \n Open	May 12.",
        'Educational Assistant Support for Students':
          'Locations: Souris, Morell, Montague, Charlottetown, Kensington, West Prince. \n Open May 14 by appointment. ',
        'Brudenell Golf Course': 'Location: Roseneath. \n Open May 15. ',
        'Links at Crowbush Cove': 'Location: Morell. \n Open May 15. ',
        'Class 7 written exams (previously cancelled)':
          'All open Access PEI locations. \n Open May 18. ',
        'Fish Inspection Services':
          'Inspections occur on wharves/harbours across PEI. \n Open May 18. ',
        'Lobster Resource Monitoring Program':
          'Sampling occurs on PEI commercial fishing vessels \n A portion of the program, the index fishery, will begin the week of May 18 ',
        IWMC:
          'Waste Watch Drop-Off Centers and the East Prince Waste Management Facility will begin to accept household compost, waste and recyclables (disposal fees apply), mattresses/box springs, and recyclables (blue bag #1 and #2) from businesses. \n Open May 19 ',
      },
    },
    {
      phase: 2,
      restrictions: {
        'Municipal advisory services':
          'Location: Aubin Arseneault Building, Charlottetown. \n Some services offered virtually; all other services to begin week of May 22 ',
        'Burning permits': 'Location: online. \n Open May 22',
        'Fire Weather Index': 'Location: online	\n Open May 22',
        'Hunter Safety Practical Testing':
          'Location: 183 Upton Road \n Open May 22 by appointment',
        'Wildlife cards Wildlife permits':
          'Location: 183 Upton Road \n Open	May 22 by appointment',
        'PEI Cannabis stores': 'All locations \n	Open May 22',
        'Dundarave Golf Course': 'Location: Roseneath \n Open	May 22',
        'Maintenance Enforcement Office':
          'Location: Harbourside \n	Open May 22 by appointment',
        'Child Support Guidelines Office':
          'Location: Harbourside \n	Open May 22 by appointment',
        'Family Court Counsellors Office':
          'Location: Harbourside \n	Open May 22 by appointment',
        'Access and Privacy Services Office':
          'Location: Harbourside \n	Open May 22 by appointment',
        'Public Guardian and Public Trustee Office':
          'Location: Harbourside \n	Open May 22 by appointment',
        'Office of the Children’s Lawyer':
          'Location: Harbourside \n	Open May 22 by appointment',
        'Access and Privacy Offices':
          'Location: 1st Sullivan Building, Charlottetown. \n Open	May 25 by appointment',
        'Slemon Park Corporation Cafeteria':
          'Location: Slemon Park \n	Open May 25, for training guests only',
        'PEILCC Liquor sales and services': 'All 17 locations \n	Open May 25',
        'Marriage licences':
          'Location: 126 Douses Road, Montague \n	Open May 25 by appointment only',
        'Change of name':
          'Location: 126 Douses Road, Montague \n	Open May 25 by appointment only',
        'Day programs for people with disabilities (delivered by NGOs and private companies)':
          'Location: Various locations across PEI \n	Open May 25',
        "Educational Services: Registrar's Office":
          'Location: Holman Building, Summerside \n	Open May 25',
        'Educational Services: Finance / Administration':
          'Location: Holman Building, Summerside \n	Open May 25',
        'In-person filing of documents (e.g. Employment Standards Act Complaints, Labour Relations Board applications)':
          'Location: Sherwood Business Center, 2nd Floor. \n	Open May 25',
        'Forest, Fish and Wildlife - Resource Inventory and Mapping Services':
          '183 Upton Road \n	Open May 25',
        'Taxation and Property Records':
          'Location: 1st Floor Shaw S, Charlottetown. \n	Open May 25',
        'Aphid Alert Service':
          'Location: PEI Analytical Lab, Biocommons Park. \n	Open May 25',
        'Driver testing, class 1,2,3,4, 6':
          "Location: Charlottetown, Summerside, O'Leary and Souris \n	Open May 26",
        'Driver improvement programss':
          'All open Access PEI locations \n	Open May 25',
        'Highway Safety Administration': 'Charlottetown \n	Open May 26',
        'Tender opening for building construction projects':
          '1st Floor Jones, Charlottetown \n	First tender closing May 28',
      },
    },
    {
      phase: 3,
      restrictions: {
        Pension_Office_and_Counselling_Service: 'Open June 1',
        PEI_Public_Libraries: 'Open June 1. \n Curbside pickup only.',
        Day_use_provincial_parks: 'Open June 5',
        Novice_driver_course_for_newcomers: 'Open June 6',
        Slemon_Park_Corporation:
          'Open June 6. \n For training and essential services guests only',
        Slemon_Park_Hotel:
          'Open June 6. \n For training and essential services guests only',
        PEI_Public_Libraries: 'Open June 8. \n Curbside pickup only',
        Plant_Health_Lab: 'Open June 8',
        Oyster_Monitoring_program: 'Open June 8',
        PEI_Public_Libraries:
          'Open June 12. \n Curbside pickup only. \n Counter service only',
        Victim_Services_client_meetings: 'Open June 12 by appointment only',
        Probation_Services_client_meetings: 'Open June 12 by appointment only',
        'Youth Justice Services client meetings':
          'Open June 12 by appointment only',
        'One-on one-counselling (sexual deviancy, anger management, mental health counselling, Indigenous supports)':
          'Open June 12',
        'Occupational health and safety inspections':
          'Open June 12 pending risk assessment',
        'WCB occupational therapy visits and vocational rehabilitation':
          'Open June 12 pending risk assessment',
        'WCB client drop-in service': 'Open June 12 pending risk assessment',
        'Visitor Information Centres': 'Open June 12',
        'PEI Liquor Control Commission / PEI Cannabis Management Corporation head office':
          'Open June 15',
        'Island Investment Development Inc. (Office of Immigration)':
          'Open June 15, recommend appointments be booked to allow for screening',
        'Finance PEI':
          'June 15, recommend appointments be booked to allow for screening',
        'Investor / consumer complaints and inquiries': 'Open June 15',
        'JPS licensing, securities, insurance and registry services':
          'Open June 15',
        'Vital Statistics services (Marriage Licenses; Birth & Death Certificates; Change of Name)':
          'Open June 15 \n Recommend appointments be booked to allow for screening',
        'Lobster Resource Monitoring Program':
          '	At-sea sampling (remaining portion of program) to begin week of June 15',
        'PEI Marine Science Organization Inc.':
          '	Research activities can begin week of June 15',
        'Northside Windmill Enhancement Fund': 'Open 	June 15',
        'Driver testing class 5': 'Open	June 15',
        'Class 7 written exams': 'Open June 15',
        'Foreign driver licence': 'Open	June 15',
        'Novice driver course': 'Open June 15',
        'Public safety courses': 'Open June 15',
        'Building and development permits': 'Open June 15',
        'Subdivision applications': 'Open June 15',
        'Boiler inspections': 'Open June 15',
        'Electrical permits and licensing': 'Open June 15',
        'Plumbing permits and licensing': 'Open June 15',
        'LP gas permits and licensing': 'Open June 15',
        'Mechanical contracts': 'Open June 15',
        'Ozone depleting substance licensing': 'Open June 15',
        'Power engineer licensing': 'Open June 15',
        'Underground storage tank': 'Open June 15',
        'Welding/brazer registration and licensing': 'Open June 15',
        'In-person services: Social Assistance': 'Open June 15',
        'In-person services: Seniors Independence Initiative': 'Open June 15',
        'In-person services: AccessAbility supports  (and home visits for clinical assessments)':
          'Open June 15',
        'In-person services: Child Care Subsidy': 'Open June 15',
        'Employment services for social program clients': 'Open June 15',
        'Innovation PEI':
          'Open June 15. \n recommend appointments be booked to allow for screening',
        'PEI Museum and Heritage sites': 'Open June 15',
        'Authentication of documents service': 'Open June 22',
        'Provincial campgrounds': 'Open June 26',
      },
    },
    {
      phase: 4,
      restrictions: {
        Provincial_campgrounds:
          'Sites across PEI. \n Proposed to open June 26 - open to seasonal campers only.',
        PEI_Museum_and_Heritage_sites:
          'Basin Head Fisheries Museum Elmira Railway Museum. \n Proposed to open June 29.',
        Medical_unfit_driver_testing:
          'All open Access PEI locations and residential. \n Proposed to open August 3',
        Safety_courses_public:
          'All open Access PEI locations and residential. \n Proposed to open August 3',
        PEI_Agricultural_Insurance_Corporation_Kensington_Office:
          '7 Gerald McCarville Drive, Kensington \n Open date: To be determined',
        Youth_Justice_Services_client_meetings:
          'Access PEI sites and RCMP / police detachments. \n Open date: To be determined',
      },
    },
  ],
  more:
    'https://www.princeedwardisland.ca/en/information/health-and-wellness/re-openings',
};

function renderProvince(obj) {
  if (Object.keys(obj).length !== 0) {
    const current_phase = obj.current_stage - 1;
    return (
      <div>
        <h1
          style={{
            textAlign: 'center',
            fontSize: '1.5em',
            backgroundColor: 'rgb(135, 151, 170)',
          }}
        >
          {obj.province} is currently in Stage {obj.current_stage}
          <br />
        </h1>
        <h2
          style={{
            textAlign: 'center',
            fontSize: 'em',
          }}
        >
          You are looking at details of Stage {obj.current_stage}
        </h2>
        <Table id='provtable'>
          <TableHead>
            <TableRow>
              <TableCell>Service</TableCell>
              <TableCell>
                Detail and Restriction for Stage {current_phase}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {renderTableDataMUI(obj.phases[current_phase].restrictions)}
          </TableBody>
        </Table>
        <b>
          Additional information is located{' '}
          <a href={obj.more} target='_blank'>
            here.
          </a>
        </b>
      </div>
    );
  }
  return <div>Utnapishtim</div>;
}

function renderProvinceTwo(obj, chosenphase) {
  if (Object.keys(obj).length !== 0) {
    if (chosenphase === 1000) {
      return renderProvince(obj);
    }
    const clicked_phase = chosenphase - 1;
    return (
      <div>
        <h1
          style={{
            textAlign: 'center',
            fontSize: '1.5em',
            backgroundColor: 'rgb(135, 151, 170)',
          }}
        >
          {obj.province} is currently in Stage {obj.current_stage}
        </h1>
        <h2
          style={{
            textAlign: 'center',
            fontSize: 'em',
          }}
        >
          You are looking at details of Stage {chosenphase}
        </h2>
        <Table id='provtable'>
          <TableHead>
            <TableRow>
              <TableCell>Service</TableCell>
              <TableCell>
                Detail and Restriction for Stage {chosenphase}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {renderTableDataMUI(obj.phases[clicked_phase].restrictions)}
          </TableBody>
        </Table>
      </div>
    );
  }
  return <div>Utnapishtim</div>;
}

function renderTableDataMUI(restrictions) {
  const list = Object.entries(restrictions);
  return list.map((mesage) => {
    for (const x of mesage) {
      return (
        <TableRow>
          <TableCell>
            {x.replace(/_/gi, ' ').replace(/\n/g, '<br />')}
          </TableCell>
          <TableCell>{breaklines(mesage[1])}</TableCell>
        </TableRow>
      );
    }
  });
}

function breaklines(text) {
  {
    const paragraph = text.split('\n');
    return paragraph.map((line) => {
      return (
        <text>
          {line}
          <br />
        </text>
      );
    });
  }
}

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const provterr = [
  { abbr: 'AB', province: 'Alberta' },
  { abbr: 'BC', province: 'British Columbia' },
  { abbr: 'MB', province: 'Manitoba' },
  { abbr: 'NB', province: 'New Brunswick' },
  { abbr: 'NL', province: 'Newfoundland' },
  { abbr: 'NT', province: 'Northwest Territories' },
  { abbr: 'NS', province: 'Nova Scotia' },
  { abbr: 'NU', province: 'Nunavut' },
  { abbr: 'ON', province: 'Ontario' },
  { abbr: 'PE', province: 'Prince Edward Island' },
  { abbr: 'QC', province: 'Quebec' },
  { abbr: 'SK', province: 'Saskatchewan' },
  { abbr: 'YT', province: 'Yukon' },
];
const dropprovmenu = provterr.map((list) => {
  return <MenuItem value={list.abbr}>{list.province}</MenuItem>;
});

const phasesmenu = (region) => {
  const retphase = [];
  if (Object.keys(region).length > 0) {
    for (const x of region.phases) {
      retphase.push(x.phase);
    }
  }
  return retphase;
};

function dropphasemenu(region) {
  if (Object.keys(region).length > 0) {
    return phasesmenu(region)
      .sort()
      .map((service) => {
        return <MenuItem value={service}>{service}</MenuItem>;
      });
  }
  return <MenuItem />;
}

const heading = 'Reopening Dates';
const subheading = <p></p>;
const body = (
  <>
    <b>Disclaimer</b>
    <br />
    Each province and territory have several phases or stages that consist of
    unique policies.
    <br />
    As the COVID-19 cases improves, the province/territory will transition into
    the next phase.
    <br />
    eg. 1 goes to 2 and 2 goes to 3, etc.
    <br />
    However, if the COVID-19 cases worsens, it is possible to regress to a
    previous phase.
    <br />
    eg. 2 reverts to 1.
    <br />
    Each of these phases are flexible to change according to the COVID-19
    climate. Ontario, Quebec, Nunvaut, New Brunswick, Manitoba are not updated.
    <br />
    If there is a service you do not see, try checking the previous stages.
    <br />
    There are additional information listed at the button of the table.
    <br />
    Please call the specific store location of interest to enquire about
    operating hours. Their hours may have adjusted. They could be closed for
    safety.
  </>
);
const pageHeadingData = { heading, subheading, body };

function Reopen() {
  const [prov, setProvince] = useState({});
  const [phase, setPhase] = useState(1000);
  const classes = useStyles();
  const axiosgetreopenlist = (target) => {
    axios
      .get('http://localhost:7000/reopenings/getprovince/'.concat(target))
      .then((res) => {
        setPhase(res.data[0].current_stage);
        setProvince(res.data[0]);
      })
      .catch((err) => {
        console.log('failed to get desired reopen detail. Error: ', err);
      });
  };
  const handleProvinceChange = (event) => {
    axiosgetreopenlist(event.target.value);
  };
  const handlePhaseChange = (event) => {
    setPhase(event.target.value);
  };
  const droprender = (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id='province-select-label'>Prov/Terr</InputLabel>
        <Select
          labelId='province-select-label'
          id='service-select-label'
          onChange={handleProvinceChange}
        >
          {dropprovmenu}
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id='service-select-label'>Phases/Stages</InputLabel>
        <Select
          labelId='phases-select-label'
          id='phases-select-label'
          onChange={handlePhaseChange}
          defaultValue={phase}
        >
          {dropphasemenu(prov)}
        </Select>
      </FormControl>
      {renderProvinceTwo(prov, phase)}
    </div>
  );
  return (
    <motion.div
      exit='out'
      animate='in'
      initial='initial'
      variants={variants}
      transition={transitions}
      style={pageStyle}
    >
      <div>
        <PageHeading data={pageHeadingData} />
      </div>
      <div>
        {droprender}
        <br />
      </div>
    </motion.div>
  );
}

export default withRouter(Reopen);
