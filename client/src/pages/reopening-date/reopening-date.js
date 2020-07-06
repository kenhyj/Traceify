import React from 'react';
import { withRouter } from 'react-router-dom';
// import { connect } from 'react-redux';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './reopening.css';

const saskatchewan = {
  province: 'Saskatchewan',
  abbr: 'SK',
  current_stage: 3,
  phases: [
    {
      phase: 1,
      restrictions: {
        medical_services: 'opening previously restricted medical services',
        parks: 'opening of golf courses, parks and campgrounds.',
        golf: 'opening of golf courses, parks and campgrounds.',
        camp: 'opening of golf courses, parks and campgrounds.',
      },
    },
    {
      phase: 2,
      restrictions: {
        retail: 'retail and select personal care services.',
      },
    },
    {
      phase: 3,
      restrictions: {
        restaurants: 'opening restaurants and licensed establishments',
        gyms: 'opening gyms and fitness centres',
        child_care: 'opening child care facilities',
        personal_care: 're-opening remaining personal care services',
        places_of_worship: 're-opening places of worship',
        gatherings:
          'Indoor public and private gatherings to 15 people. Outdoor gatherings to 30 people.',
      },
    },
    {
      phase: 4,
      restrictions: {
        recreation: 'opening indoor and outdoor recreation facilities',
        gathering: 'indoor public and private gatherings to 30 people.',
      },
    },
    {
      phase: 5,
      restrictions: {
        plans: 'Consider lifting long-term restrictions.',
      },
    },
  ],
  more:
    'https://www.saskatchewan.ca/government/health-care-administration-and-provider-resources/treatment-procedures-and-guidelines/emerging-public-health-issues/2019-novel-coronavirus/re-open-saskatchewan-plan/phases-of-re-open-saskatchewan',
};

function renderProvince(obj) {
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
        {obj.province} Current Stage: {obj.current_stage}
      </h1>
      <table id='provtable'>
        <tr>
          <th>Service</th>
          <th>Detail and restrictions</th>
        </tr>
        {renderTableData(obj.phases[current_phase].restrictions)}
      </table>
    </div>
  );
}

function renderTableData(restrictions) {
  const list = Object.entries(restrictions);
  // console.log('list, ', list);
  return list.map((mesage) => {
    for (const x of mesage) {
      // TODO: render the table
      console.log('mesage', mesage);
      return (
        <tr>
          <td>{x.replace(/_/gi, ' ')}</td>
          <td>{mesage[1]}</td>
        </tr>
      );
    }
  });
}

function renderrestrictionszero(restrictions) {
  if (typeof restrictions === 'object') {
    for (const [key, value] of Object.entries(restrictions)) {
      console.log(`${key}: ${value}`);
      // TODO: render the table
    }
  }
  return null;
}

function renderTableDatazero(list) {
  return list.map((mesage) => {
    const { province, current_stage, longitude } = mesage; // destructuring
    return (
      <tr>
        <td>{province}</td>
        <td>{current_stage}</td>
        <td>{longitude}</td>
      </tr>
    );
  });
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
  'Newfoundland',
  'Prince Edward Island',
  'Nova Scotia',
  'New Brunswick',
  'Quebec',
  'Ontario',
  'Manitoba',
  'Saskatchewan',
  'Alberta',
  'British Columbia',
  'Yukon',
  'Northwest Territories',
  'Nunavut',
].sort();
const dropprovmenu = provterr.map((province) => {
  return <MenuItem value={province}>{province}</MenuItem>;
});

// const phasesmenu = [1, 2, 3, 4].sort();

const phasesmenu = () => {
  const retphase = [];
  for (const x of saskatchewan.phases) {
    retphase.push(x.phase);
  }
  return retphase;
};

const dropphasemenu = phasesmenu()
  .sort()
  .map((service) => {
    return <MenuItem value={service}>{service}</MenuItem>;
  });

function Reopen() {
  // BC : https://www2.gov.bc.ca/gov/content/safety/emergency-preparedness-response-recovery/covid-19-provincial-support/bc-restart-plan
  // ON : https://www.ontario.ca/page/reopening-ontario
  // AB : https://www.alberta.ca/guidance-documents.aspx
  // YT: https://yukon.ca/en/health-and-wellness/covid-19-information/latest-updates-covid-19/current-covid-19-situation
  // SK: https://www.saskatchewan.ca/government/health-care-administration-and-provider-resources/treatment-procedures-and-guidelines/emerging-public-health-issues/2019-novel-coronavirus/re-open-saskatchewan-plan/phases-of-re-open-saskatchewan
  // MB: https://www.gov.mb.ca/covid19/restoring/future-phases.html
  const classes = useStyles();
  const handleChange = (event) => {
    // [event.target.name]: event.target.value;
  };
  const droprender = (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id='province-select-label'>Prov/Terr</InputLabel>
        <Select
          labelId='province-select-label'
          id='service-select-label'
          // value={age}
          onChange={handleChange}
        >
          {dropprovmenu}
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id='service-select-label'>Phases/Stages</InputLabel>
        <Select
          labelId='phases-select-label'
          id='phases-select-label'
          // value={age}
          onChange={handleChange}
        >
          {dropphasemenu}
        </Select>
      </FormControl>
      {renderProvince(saskatchewan)}
    </div>
  );
  return (
    <div>
      <h1 style={{ fontSize: '2.5em', textAlign: 'center' }}>Reopening</h1>
      <b>Disclaimer</b>
      :
      <br />
      Each province and territory have several phases that consist of unique
      policies.
      <br />
      As the COVID-19 cases improves, the province/territory will transition
      into the next phase.
      <br />
      However, if the COVID-19 cases worsens, it is possible to regress to a
      previous phase.
      <br />
      Each of these phases are flexible to change according to the COVID-19
      climate. Only the Canadian province British Columbia has been updated.
      <br />
      Please call the specific store location of interest to enquire about
      operating hours. Their hours may have adjusted. They could be closed for
      safety.
      <br />
      {droprender}
      <br />
    </div>
  );
}

export default withRouter(Reopen);
