db = db.getSiblingDB('traceify');
db.reopening.drop();
db.reopening.insertMany([
  {
    province: 'Newfoundland',
    abbr: 'NL',
  },
  {
    province: 'Prince Edward Island',
    abbr: 'PE',
  },
  {
    province: 'Nova Scotia',
    abbr: 'NS',
  },
  {
    province: 'New Brunswick',
    abbr: 'NB',
  },
  {
    province: 'Quebec',
    abbr: 'QC',
  },
  {
    province: 'Ontario',
    abbr: 'ON',
    current_stage: 2,
    phases: [{ phase: 1 }, { phase: 2 }, { phase: 3 }],
    more: 'https://www.ontario.ca/page/reopening-ontario',
  },
  {
    province: 'Manitoba',
    abbr: 'MB',
    current_stage: 3,
    phases: [{ phase: 1 }, { phase: 2 }, { phase: 3 }],
    more: 'https://www.gov.mb.ca/covid19/restoring/index.html',
  },
  {
    province: 'Saskatchewan',
    abbr: 'SK',
    current_stage: 3,
    phases: [
      {
        phase: 1,
        restrictions:
        {
            medical_services: 'opening previously restricted medical services',
            parks: 'opening of golf courses, parks and campgrounds.',
            golf: 'opening of golf courses, parks and campgrounds.',
            camp: 'opening of golf courses, parks and campgrounds.' 
        },
      },
      { 
        phase: 2, 
        restrictions: 
        {
          retail:'retail and select personal care services.' 
        }
      },
      {
        phase: 3,
        restrictions: {
          restaurants: 'opening restaurants and licensed establishments',
          gyms: 'opening gyms and fitness centres',
          child_care: 'opening child care facilities',
          personal_care: 're-opening remaining personal care services',
          places_of_worship: 're-opening places of worship',
          gatherings: 'Indoor public and private gatherings to 15 people. Outdoor gatherings to 30 people.',
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
        restrictions: 
        {
          plans: 'Consider lifting long-term restrictions.'
        } },
    ],
    more:
      'https://www.saskatchewan.ca/government/health-care-administration-and-provider-resources/treatment-procedures-and-guidelines/emerging-public-health-issues/2019-novel-coronavirus/re-open-saskatchewan-plan/phases-of-re-open-saskatchewan',
  },
  {
    province: 'Alberta',
    abbr: 'AB',
    current_stage: 2,
    more: 'https://www.alberta.ca/guidance-documents.aspx',
  },
  {
    province: 'British Columbia',
    abbr: 'BC',
    current_stage: 3,
    phases: [
      {
        phase: 1,
        restrictions: 
        {
          gathering: 'Ban mass gathering of more than 50 people',
          essential_services: 'Essential services were allowed to operate',
          'Closed dine-in service at bars and restaurants, and non-essential personal services, such as spas, tattoo parlours, and hair and nail salons',
          child_care: 'Reduced in-classroom learning and child care',
          'Required travellers to develop and stick to a 14-day isolation plan when arriving in B.C. from abroad',
          'Restricted visitors to health care and assisted living facilities to protect some of our most vulnerable people',
          'Postponed non-urgent and elective surgeries while maintaining urgent and emergency procedures',
          parks_and_camping: 'Closed all B.C. provincial parks, including overnight camping',
          air_travels: 'Banned the entry of foreign nationals by air travel into Canada. \n Closed the Canada-U.S. border to all non-essential traffic \n Emergency order under the federal Quarantine Act requires any person entering Canada by air, sea or land to self-isolate for 14 days',
      },
    },
      {
        phase: 2,
        restrictions: {
          Child_care_and_day_camps: 'Overnight camps for children and youth are not allowed to operate.',
          Gyms, yoga and dance studios, recreation centres, and tanning services: ,
          Hairdressers, barbers, nail salons, aestheticians, and body artists: ,
          Industrial camps, farm workers, natural resource sector camps, and silviculture workers: ,
          In-person counselling, psychiatrists, psychologists, social workers, and counsellors: ,
          Medical services including dentistry, physiotherapy, registered massage therapy, chiropractors: ,
          Museums, art galleries, and libraries: ,
          Office-based worksites: , 
          Parks, beaches, and outdoor spaces: ,
          Real estate professionals and home inspectors: ,
          Restaurants, cafes, pubs, and breweries: , 
          Retail stores, shopping malls, farmers markets, and food banks: , 
        },
      },
      {
        phase: 3,
        restrictions: {
          BC Parks overnight camping : , 
          Hotel, motels, RV parks, cabins, resorts, hostels, lodges, and backcountry operators: , 
          K-12 in-person classes, 2020/2021 school year: , 
          Long-term care facilities (residential) and seniors assisted living residences: , 
          Motion picture and television production: , 
          Post-secondary in-person classes_2020-2021_academic year: , 
        },
      },
      {
        phase: 4,
        restrictions: [
          'Conventions',
          'Live audience professional sports',
          'Concerts',
          'International tourism',
        ],
      },
    ],
    more:
      'https://www2.gov.bc.ca/gov/content/safety/emergency-preparedness-response-recovery/covid-19-provincial-support/bc-restart-plan',
  },
  {
    province: 'Yukon',
    abbr: 'YT',
    current_stage: 2,
    more:
      'https://yukon.ca/en/health-and-wellness/covid-19-information/latest-updates-covid-19/current-covid-19-situation',
  },
  {
    province: 'Northwest Territories',
    abbr: 'NT',
  },
  {
    province: 'Nunavut',
    abbr: 'NU',
  },
]);
