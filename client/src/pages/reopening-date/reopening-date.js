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

const bc = {
  province: 'British Columbia',
  abbr: 'BC',
  current_stage: 3,
  phases: [
    {
      phase: 1,
      restrictions: {
        gathering: 'Ban mass gathering of more than 50 people',
        essential_services: 'Essential services are allowed to operate',
        restaurants: 'Closed dine-in service at bars and restaurants',
        'non-essential':
          'Closed non-essential personal services, such as spas, tattoo parlours, and hair and nail salons',
        child_care: 'Reduced in-classroom learning and child care',
        health_care:
          'Restricted visitors to health care and assisted living facilities to protect some of our most vulnerable people \n Postponed non-urgent and elective surgeries while maintaining urgent and emergency procedures',
        parks_and_camping:
          'Closed all B.C. provincial parks, including overnight camping',
        air_travels:
          'Banned the entry of foreign nationals by air travel into Canada. \n Closed the Canada-U.S. border to all non-essential traffic \n Emergency order under the federal Quarantine Act requires any person entering Canada by air, sea or land to self-isolate for 14 days \n Required travellers to develop and stick to a 14-day isolation plan when arriving in B.C. from abroad',
      },
    },
    {
      phase: 2,
      restrictions: {
        Child_care_and_day_camps:
          'Overnight camps for children and youth are not allowed to operate.',
        Gyms_and_recreation_centres:
          'Plexiglass barriers or 2 m of space between equipment to maintain physical distancing. \n Handwashing policies and disinfecting products for hands and fitness equipment. \n Regular cleaning and capacity limits in locker rooms, showers, washrooms, saunas and steam rooms. \n Group classes can operate if 2 m of physical distance can be maintained.',
        tanning_services:
          'Capacity limits on sunbed rooms. \n Personal sanitation procedures and/or the use of non-medical masks. \n Asking clients to bring their own goggles or use a single-use item.',
        'Hairdressers,_barbers,_nail_salons,_aestheticians,_and_body_artists':
          'Plexiglass barriers or 2 m of space between workstations to maintain physical distancing. \n Requiring appointments or limiting walk-in clients. \n Asking clients to attend appointments alone when possible. \n Depending on the service you are receiving, you may be required to wear a mask and/or follow other personal sanitation procedures. \n Enhanced cleaning protocols for workers, including sanitation of tools, and the preference for single-use items when possible.',
        'Industrial_camps,_farm_workers,_natural_resource_sector_camps,_and_silviculture_workers':
          'Maintaining 2 m of physical distance from other workers, avoid sharing spaces. \n Self-monitor for symptoms of illness and COVID-19. \n Follow workplace and employer protocols.',
        'In_person_counselling,_psychiatrists,_psychologists,_social workers':
          'Plexiglass barriers and 2 m of physical distance in waiting and reception areas. \n Staggered appointment times. \n Asking clients to arrive no more than five minutes early. \n Asking clients to attend appointments alone when possible. \n If physical distancing is not possible, you may be required to wear a mask.',
        Medical_services:
          'Specifically pertaining to dentistry, physiotherapy, registered massage therapy, chiropractors: \n Plexiglass barriers and 2 m of physical distance in waiting and reception areas. \n Staggered appointment times. \n Asking clients to arrive no more than five minutes early. \n Asking clients to attend appointments alone when possible. \n Enhanced cleaning protocols for offices and workers, including the use of Personal Protective Equipment and hand sanitizer for each client.',
        museums_and_art_galleries:
          'If the facility allows for adequate spacing, group visits or guided tours can take place in groups of 50 people or less. \n Markers on the floor to designate areas and directions to move through the space. \n Paper products will be limited or eliminated, such as tickets and visitor guides. \n High-touch displays may be closed or use a physical barrier. \n Hand sanitizer made available throughout the space.',
        libraries:
          'Markers on the floor to designate areas and directions to move through the space. \n Computer terminals, tables and chairs spaced 2m apart. \n Offering programs like story time or workshops digitally. \n Plexiglass barriers installed at information and loan counters.',
        office_based_worksites:
          'Start and end times may be staggered to allow for physical distancing at entry and exit doors, on elevators, and in stairwells. \n Workstation layouts may be rearranged to provide 2 m of physical distance. \n Kitchen, break room or bathroom spaces may restrict the number of people allowed at one time. \n You may be encouraged to bring your own food, dishes and utensils, and limit sharing food and using communal equipment. \n Remote work and online meetings may be preferred. \n Stay home and do not go to work if you feel sick.',
        'Parks,_beaches,_outdoor_spaces':
          'Maintain 2 m of physical distance from other visitors and park workers. \n Plexiglass barriers at ticket booths and concession stands. \n Parking and bike racks may be limited to control capacity. \n Picnic tables may be limited or spaced out to maintain 2 m of physical distance. \n Change rooms and washrooms will have capacity limits and will be disinfected regularly. \n Handwashing policies and sanitizer products may be in place',
        Real_estate:
          'Viewings may be conducted by appointment only. \n Maintain physical distance and avoid shaking hands. \n The number of people who may view a property in one day may be limited. \n Handwashing policies and soap or sanitizer products may be in place. \n Virtual services are preferred and technology may be used for correspondence, drafting written agreements, and obtaining digital signatures.',
        home_inspectors:
          'Inspectors may conduct a pre-screening assessment before entering a property. \n Inspectors are encouraged to work alone. \n Owners may be asked to prepare the property, providing clear and unobstructed access to windows, heating equipment, water heater, electrical panel, and attic. \n Items used during the inspection will be disposed, such as wipes and gloves. \n Payment for services and inspection reports may be handled digitally.',
        restaurants:
          'Guests can dine in groups, up to six people. \n Guests must maintain a 2 m distance from other tables and other groups, including bar and patio seating. \n Capacity may be limited to accommodate physical distancing. \n If a restaurant, cafe or pub holds an event, no more than 50 people can attend \n',
        'Retail_stores,_shopping malls,_farmers_markets,_and_food_banks':
          'Check with the business you plan to visit to review their safety protocols and arrive prepared. \n Layouts may be rearranged, including markers on the floor to designate areas and directions to move through the space \n Separate entrances for customers entering and leaving the store. \n Customers may be asked to wait in line before entering. \n Fitting rooms may be closed or capacity reduced. \n Plexiglass barriers and hand sanitizing stations may be in place. \n If the store allows for the use of reusable bags, customers may be asked to pack the bags themselves.',
      },
    },
    {
      phase: 3,
      restrictions: {
        Overnight_camping:
          'The 2020 season booking window has been reduced to two months in advance of an arrival date, on a rolling window. \n Preferential access to camping will be given to B.C. residents. \n Non-B.C. residents with existing reservations should request a refund. Any reservations made by non-B.C. residents after May 25, 2020 will be cancelled without refund. \n Not all parks and campgrounds are open. Check the BC Parks website for closures.',
        'Hotel,_motels,_RV_parks,_cabins,_resorts,_hostels,_lodges,_and_backcountry_operators':
          'Maintain 2 m of physical distance from workers and guests when possible. \n Layouts may be rearranged, including markers on the floor to designate areas and directions to move through spaces. \n On-site pools, hot tubs, gym facilities, and play areas may have restricted capacity and sanitization protocols. \n When staying in a hostel or shared accommodation, beds will be 2 m apart, arranged head-to-toe.',
        'K-12_in_person_classes,_2020-2021_school_year':
          'On May 15, Premier Horgan and Minister Fleming announced that parents had the choice to send their children back to school on a gradual and part-time basis, beginning June 1, 2020. \n This gradual return allows school districts, teachers, students, parents and support staff to practice and prepare for the 2020/2021 school year. \n A return to full-time in-class learning will happen in September 2020 as part of Phase 3, if it’s safe to do so.',
        Long_term_care_facilities_and_seniors_assisted_living_residences:
          'For the month of July, residents will be able to visit with one designated family member or friend. \n You will be able to visit with your family member or friend at their residence once that location has developed the required plan to ensure your safety as well as that of the resident and supporting staff. \n All visits must be booked in advance to allow for them to be conducted safely. \n Visits are not allowed if there is an active COVID-19 outbreak at the residence. \n You will not be able to come and visit if you or the resident you are visiting are sick or have any COVID-19 symptoms. \n All visitors will be screened for signs and symptoms of illness, including COVID-19, prior to every visit. \n All visits will take place in specific "visiting areas," which will be organized by each residence. \n When you visit you will need to bring a mask and wear it for the duration of your visit.',
        Motion_picture_and_television_production:
          'Staggering work schedules to reduce the number of workers present at one time. \n Limiting or restricting visitors to set. \n Eliminating open calls for performers and assigning arrival times. \n Offering pre-packaged or wrapped meals and snacks at craft services. \n Assigning individual hairstylists and makeup artists to one performer at a time. \n Reducing the number of cast and crew at filming areas and video village.',
        Post_secondary_in_person_classes_2020_2021_academic_year:
          'The post-secondary sector is developing broad health and safety guidelines. \n Each institution will then develop their plans for program delivery, taking into account the health and well-being of students, staff and faculty',
      },
    },
    {
      phase: 4,
      restrictions: {
        Conventions:
          'can operate if at least one of three factors are met: \n Wide vaccination. \n Community immunity. \n Broad successful treatments.',
        Live_audience_professional_sports:
          'can operate if at least one of three factors are met: \n Wide vaccination. \n Community immunity. \n Broad successful treatments.',
        Concerts:
          'can operate if at least one of three factors are met: \n Wide vaccination. \n Community immunity. \n Broad successful treatments.',
        International_tourism:
          'can operate if at least one of three factors are met: \n Wide vaccination. \n Community immunity. \n Broad successful treatments.',
      },
    },
  ],
  more:
    'https://www2.gov.bc.ca/gov/content/safety/emergency-preparedness-response-recovery/covid-19-provincial-support/bc-restart-plan',
};

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
        {obj.province} is currently in Stage {obj.current_stage}
      </h1>
      <table id='provtable'>
        <tr>
          <th>Service</th>
          <th>Detail and restrictions for stage ... </th>
        </tr>
        {renderTableData(obj.phases[current_phase].restrictions)}
      </table>
      <b>
        Additional information is located{' '}
        <a href={obj.more} target='_blank'>
          here.
        </a>
      </b>
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
          <td>{x.replace(/_/gi, ' ').replace(/\n/g, '<br />')}</td>
          <td>{mesage[1]}</td>
        </tr>
      );
    }
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
      Each province and territory have several phases or stages that consist of
      unique policies.
      <br />
      As the COVID-19 cases improves, the province/territory will transition
      into the next phase.
      <br />
      eg. 1 goes to 2 and 2 goes to 3, etc.
      <br />
      However, if the COVID-19 cases worsens, it is possible to regress to a
      previous phase.
      <br />
      eg. 2 reverts to 1.
      <br />
      Each of these phases are flexible to change according to the COVID-19
      climate. Only the Canadian province British Columbia has been updated.
      <br />
      If there is a service you do not see, try checking the previous stages.
      <br />
      There are additional information listed at the button of the table.
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
