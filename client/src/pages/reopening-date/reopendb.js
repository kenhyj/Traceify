db = db.getSiblingDB('traceify');
db.reopenings.drop();
db.reopenings.insertMany([
  {
    province: 'Newfoundland',
    abbr: 'NL',
    current_stage: 3,
    phases: [
      {
        phase: 1,
        restrictions: {
          'lifting long-term public health measures':
            'evaluation of transmission patterns of COVID-19 \n\
        availability of an effective vaccine and/or treatment \n\
        and a strong public health system. ',
        },
      },
      {
        phase: 2,
        restrictions: {
          Public_Spaces_and_Gatherings:
            'Gatherings at funerals, burials and weddings are expanded to 50 people as long as physical distancing can be maintained. Wakes remain prohibited. \n\
        Outdoor gatherings of up to 50 people are permitted as long as physical distancing can be maintained. \n\
        Places of worship are permitted to resume operations with restrictions.',
          Recreational_Activities:
            'Gyms and fitness facilities are permitted to open, with restrictions. \n\
          Arenas can open, with restrictions. \n\
          Indoor pools can open, however some restrictions apply. \n\
          Overnight camping is permitted in all forms, including tenting. \n\
          Playground equipment can be used.',
          Health_care_services:
            'Regional health authorities will continue to allow some health care services to resume. \n\
          Further expansion of visitation in health care to be determined.',
          Businesses_and_Services:
            'Bars and lounges are permitted to open with reduced occupancy. \n\
          Indoor entertainment facilities can reopen with reduced occupancy (e.g. bingo halls, cinemas). \n\
          Performance spaces can reopen with reduced occupancy.',
        },
      },
      {
        phase: 3,
        restrictions: {
          Public_Spaces_and_Gatherings:
            'Gatherings at funerals, burials and weddings are expanded to 20 people as long as physical distancing can be maintained. \n\
            Visitations are permitted, with restrictions. Wakes remain prohibited. \n\
            Outdoor gatherings of up to 20 people are permitted as long as physical distancing can be maintained.',
          Recreational_Activities:
            'Campsites are permitted to open for limited overnight camping, with restrictions. \n\
            Summer day camps can operate, with restrictions. \n\
            Medium-risk outdoor recreational activities can resume (e.g., sports). Spectators must maintain physical distancing. \n\
            Outdoor pools can operate with a limited number of people. \n\
            Large playgrounds in municipal parks must not be used. \n\
            Gym and fitness facilities, yoga studios, tennis and squash facilities, arenas, dance studios and performance spaces remain closed. \n\
            Outdoor activities, including walking, hiking, or riding your bike, are encouraged as long as physical distancing can be maintained and you are not required to self-isolate for any reason.',
          Health_care_services:
            'Private health care clinics can reopen in accordance with guidelines. \n\
            Regional health authorities will continue to allow some health care services to resume. \n\
            Visitation in health care is expanded. \n\
            Orders for long term care, personal care homes, and assisted living facilities remain in place.',
          Businesses_and_Services:
            'Retail stores, including those in shopping malls, can open with restrictions. \n\
            Retail stores are permitted to sell scratch and break open lotto tickets in store. \n\
            Personal service establishments, including spas, esthetic services, hair salons, body piercing, tattooing and tanning salons, can open in accordance with guidelines. \n\
            Animal grooming facilities can resume operations. \n\
            Further expansion of daycare operations. \n\
            Restaurants can re-open at reduced occupancy; buffets remain prohibited. \n\
            Bars, lounges and cinemas remain closed.',
        },
      },
      {
        phase: 4,
        restrictions: {
          Public_Spaces_and_Gatherings:
            'Gatherings at funerals, burials and weddings are restricted to no more than 10 people, as long as physical distancing can be maintained. \n\
            Visitations and wakes remain prohibited.',
          Recreational_Activities:
            'Recreational angling and hunting are permitted. \n\
            Golf courses can open with restrictions in place. \n\
            Municipal parks are open. \n\
            Playground equipment in municipal parks is not to be used. \n\
            Campsites remain closed. \n\
            Gym and fitness facilities, yoga studios, tennis and squash facilities, arenas, dance studios and performance spaces remain closed. \n\
            Outdoor activities, including walking, hiking, or riding your bike, are encouraged as long as physical distancing can be maintained and you are not required to self-isolate for any reason.',
          Health_care_services:
            'Regional health authorities will begin to allow some health care services to resume. \n\
            Private health care clinics are closed, except those of physicians and nurse practitioners. Closed clinics can offer urgent and emergent care, and virtual options can be offered for non-urgent care. \n\
            All visitor restrictions in health care remain in place. \n\
            Orders for long term care, personal care homes, and assisted living facilities remain in place.',
          Businesses_and_Services:
            'Limited expansion of child care services. \n\
            Professional services such as accounting firms, law firms, and financial services can offer in-person services. Work from home policies are encouraged, where possible. \n\
            In-person worker and workplace safety training will be permitted (e.g. Standard First Aid, Basic Safety Training, food safety, etc.). \n\
            Gardening centres can open for in-person sales and service. \n\
            Landscaping and lawn care services can operate. \n\
            Animal daycares can resume operations. \n\
            Retail stores that do not offer essential services, bars and lounges, cinemas, and personal service establishments remain closed. \n\
            Restaurants remain closed for in-person dining.',
        },
      },
      {
        phase: 5,
        restrictions: {
          Public_Spaces_and_Gatherings:
            'Gatherings of more than 5 people are prohibited. \n\
            Funerals, wakes and visitations are prohibited. \n\
            Burials and weddings are limited to no more than 5 people, including the officiant.',
          Recreational_Activities:
            'Campsites in municipal and privately owned parks are closed. \n\
            Playground equipment in municipal parks are closed. \n\
            Gym and fitness facilities are closed, including yoga studios, tennis and squash facilities, and arenas. \n\
            Dance studios and performance spaces are closed. \n\
            Outdoor activities, including walking, hiking, or riding your bike, are encouraged as long as physical distancing can be maintained and you are not required to self-isolate for any reason.',
          Health_care_services:
            'Private health care clinics are closed, except those of physicians and nurse practitioners. Closed clinics can offer urgent and emergent care, and virtual options can be offered for non-urgent care. \n\
            Visitor restrictions in health care are in place. \n\
            Orders for long term care, personal care homes, and assisted living facilities are in place. \n\
            Regional health authorities have postponed or cancelled some health care services.',
          Businesses_and_Services:
            'Retail stores that do not provide services essential to life, health or personal safety of individuals and animals are closed to in-person service, but can offer online/telephone sales with delivery or curbside pick-up options. \n\
            Retail stores that are permitted to remain open are not permitted to sell scratch or break open lotto tickets in store. \n\
            Restaurants are closed for in-person dining (take-out, delivery and drive-thru options are still permitted). \n\
            Bars and lounges are closed. \n\
            Cinemas are closed. \n\
            Personal service establishments, including spas, esthetic services, hair salons, body piercing, tattooing and tanning salons, are closed.',
        },
      },
    ],
    more: 'https://www.gov.nl.ca/covid-19/alert-system/',
  },
  {
    province: 'Prince Edward Island',
    abbr: 'PE',
    current_stage: 4,
    phases: [
      {
        phase: 1,
        restrictions: {
          'Angling season and licenses':
            'Location: Online and private vendors. \n Open May 1. ',
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
          Probation_Services_client_meetings:
            'Open June 12 by appointment only',
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
  },
  {
    province: 'Nova Scotia',
    abbr: 'NS',
    current_stage: 10,
    phases: [
      {
        phase: 1,
        restrictions: {
          Parks: 'Provincial and municipal parks can reopen',
          Trails: 'can reopen',
          Gardens:
            'Community gardens can reopen. \n Garden centres, nurseries and similar businesses can open',
          Camping:
            'Private campgrounds can open for seasonal lot renters (renters with fixed RVs) that don’t require the use of onsite amenities like washroom facilities, store, restaurant, activity center, playground and picnic tables',
          Fishing: 'Sportfishing from shore or boat is permitted',
          Cottages:
            'Residents can use their cottages, with their family or household unit',
          Sails_and_Boats:
            'Sailing and boating clubs can open to allow people to prepare their boats for the season (food service in marinas is limited to takeout)',
          Golf:
            'Golf courses can begin maintenance work to prepare for the season.\n Golf driving ranges can reopen, including those on golf courses',
          Religious_services: 'Drive-in religious services are allowed',
          School:
            'School grounds and sports fields can reopen (children’s playgrounds remain closed)',
        },
        date: 'May 1, 2020',
      },
      {
        phase: 2,
        restrictions: {
          Gathering:
            'Family household bubbles are permitted and exempt from the gathering limit and social distancing',
        },
        date: 'May 15, 2020',
      },
      {
        phase: 3,
        restrictions: {
          Golf: 'Golf courses can reopen',
          Beaches: 'Provincial and municipal beaches can reopen',
          Outdoor_sports_facilities:
            'Outdoor sports facilities for archery, equestrian, golf, paddling, sailing, boating and tennis are permitted to open (no organized sports, classes, lessons, coaching, competitions, tournaments or practices at facilities)',
          Fishing:
            'Sportfishing from provincial and municipal beaches is permitted',
          Gathering:
            'social gatherings outside your family household bubble are permitted (you need to follow social distancing guidelines and gathering restrictions)',
        },
        date: 'May 16, 2020',
      },
      {
        phase: 4,
        restrictions: {
          Gatheirng: 'Gathering limit is no more than 10 people',
          Weddings:
            'weddings and funerals is no more than 10 people indoors or 15 people outdoors (excluding the person conducting the ceremony)',
          Funerals:
            'weddings and funerals is no more than 10 people indoors or 15 people outdoors (excluding the person conducting the ceremony)',
          Camping:
            'Privately operated campgrounds can open for seasonal lot renters (renters with fixed RVs) and temporary campers.',
          Sport_training: 'Sport training is permitted',
          Pools: 'Pools can begin maintenance work to prepare for the season',
          Summer_camps: 'Overnight summer camps are cancelled for 2020',
        },
        date: 'May 29, 2020',
      },
      {
        phase: 5,
        restrictions: {
          Casino:
            'Casino Nova Scotia (Halifax and Sydney) can reopen if they follow the Health Protection Act Order and their sector-specific plan.',
          Business_owners:
            'Business owners can operate video lottery terminals (VLTs) if they follow the Health Protection Act Order and their sector-specific plan.',
          Restaurants:
            'Restaurants can reopen for table service (dine-in) if they follow the Health Protection Act Order and their sector-specific plan.',
          Liquor:
            'Liquor licensed (drinking) establishments (like bars, wineries, distillery tasting rooms and craft taprooms) can reopen if they follow the Health Protection Act Order and their sector-specific plan.',
          'Personal services (hair salons, barber shops, spas, nail salons and body art establishments)':
            'can reopen if they follow the Health Protection Act Order and their sector-specific plans.',
          'Fitness establishments (gyms, yoga studios and climbing facilities)':
            'can reopen if they follow the Health Protection Act Order and their sector-specific plans.',
          'Self-regulated health professions':
            'They can provide in-person or virtual care services if they follow the Health Protection Act Order and their sector-specific plans.',
          'Unregulated (non-regulated) health professions':
            'They can provide in-person or virtual care services if they follow the Health Protection Act Order and their sector-specific plans.',
          Animal_care:
            'Veterinarians can reopen for in-person care to animals if they follow the Health Protection Act Order and their sector-specific plan.',
          Camping:
            'Privately operated campgrounds can open for all types of campers if they follow the Health Protection Act Order and their sector-specific plan.',
          Graduation:
            'Outdoor community celebration of graduates are allowed in June 2020 if they follow the Health Protection Act Order and meet all required conditions.',
        },
        date: 'June 5, 2020',
      },
      {
        phase: 6,
        restrictions: {
          Summer_day_camps:
            'can open with up to 10 people in each individual camp group within the summer day camp if they follow the Health Protection Act Order and their sector-specific plans. \n Sector-specific plans should follow guidance from Public Health.',
        },
        date: 'June 12, 2020',
      },
      {
        phase: 7,
        restrictions: {
          Camping: 'Provincial campgrounds open at a reduced capacity',
          'Family daycare homes under a family home daycare agency (licensed childcare providers)':
            'They can reopen if they follow the Health Protection Act Order and their sector-specific plan. \n The sector-specific plan should follow guidance from Public Health.',
          'Daycare facilities (licensed daycare facilities)':
            'They can reopen if they follow the Health Protection Act Order and their sector-specific plan. The sector-specific plan should follow guidance from Public Health.',
          Long_term_care_facilities:
            'Outdoor visits can resume at long-term care facilities if visitors stay two metres (6 feet) away from residents and staff.',
        },
        date: 'June 15, 2020',
      },
      {
        phase: 8,
        restrictions: {
          Outdoor_playgrounds: 'can reopen',
          'Family household bubbles':
            '10-person gathering limit without social distancing. \n Individuals may gather together in close social groups of up to 10 persons per group without adhering to the physical distancing requirements of two metres or six feet',
          Gathering:
            'Gathering limit increased to 50 people for indoor and outdoor gatherings with social distancing',
        },
        date: 'June 18, 2020',
      },
      {
        phase: 9,
        restrictions: {
          Camping:
            'Privately operated campgrounds can operate at 100% capacity if they follow the Health Protection Act Order and their sector-specific plan.',
          Pools:
            'Public pools can reopen if they follow the Health Protection Act Order and the Nova Scotia Lifesaving Society plan for change rooms and washrooms. \n\
          Public pools must meet all conditions in the Health Protection Act Order, including: \n\
          maintaining a minimum physical distance of 2 metres (6 feet) for lane swimming and aquafit classes \n\
          allowing 1 or more groups of 10 for other activities based on pool size',
          Restaurnts:
            'Restaurants can reopen table service (dine-in) if they follow the Health Protection Act Order and their sector-specific plan. Restaurants can continue to offer take-out and delivery service.\n See the sector-specific plan for the Restaurant Association of Nova Scotia. \n Restaurants must meet all conditions in the Health Protection Act Order, including: \n Maintaining a minimum physical distance of 2 metres (6 feet) or a physical barrier between tables, booths and single seats \n Not exceeding 100% of the restaurant’s capacity \n Not permitting any single group within the restaurant to exceed 10 people. \n Stopping service by midnight \n closing by 1am',
          Liquor:
            'Liquor licensed (drinking) establishments (like bars, wineries, distillery tasting rooms and craft taprooms) can reopen if they follow the Health Protection Act Order and their sector-specific plan. \n Liquor licensed (drinking) establishments must meet all conditions in the Health Protection Act Order, including: \n Maintaining a minimum physical distance of 2 metres (6 feet) or a physical barrier between tables, booths and single seats \n Not exceeding 100% of the establishment’s capacity. \n Not permitting any single group within the establishment to exceed 10 people. \n Providing food and alcohol for in-seat service only, delivered to the table by staff, and ensuring food and alcohol is kept at the table. \n Ensuring patrons comply with physical distancing requirements \n Stopping service by midnight. \n Closing by 1am',
        },
        date: 'June 26, 2020',
      },
      {
        phase: 10,
        restrictions: {
          Travel:
            'Travel within Nova Scotia, New Brunswick, Prince Edward Island and Newfoundland and Labrador is permitted without the requirement to self-isolate for Atlantic Canadian residents (Atlantic travel bubble)',
          'Social events, faith gatherings, weddings, funerals, and arts and culture events':
            'If any of these are run by a recognized business or organization can have 250 people outdoors or 50% of the venue’s capacity to a maximum of 200 indoors',
        },
        date: 'July 3, 2020',
      },
    ],
    more: 'https://novascotia.ca/coronavirus/restriction-updates/',
  },
  {
    province: 'New Brunswick',
    abbr: 'NB',
    current_stage: 1,
    phases: [{ phase: 1, restrictions: {} }],
    more: '',
  },
  {
    province: 'Quebec',
    abbr: 'QC',
    current_stage: 1,
    phases: [{ phase: 1, restrictions: {} }],
    more: '',
  },
  {
    province: 'Ontario',
    abbr: 'ON',
    current_stage: 2,
    phases: [
      {
        phase: 1,
        restrictions: {},
      },
      {
        phase: 2,
        restrictions: {},
      },
      {
        phase: 3,
        restrictions: {
          Workplace:
            'Reopening most remaining workplaces and community spaces, while carefully and gradually lifting restrictions.',
          Community_spaces:
            'Reopening most remaining workplaces and community spaces, while carefully and gradually lifting restrictions.',
          Gathering: 'Large public gatherings will continue to be restricted.',
        },
      },
    ],
    more: 'https://www.ontario.ca/page/reopening-ontario',
  },
  {
    province: 'Manitoba',
    abbr: 'MB',
    current_stage: 3,
    phases: [
      {
        phase: 1,
        restrictions: {
          public_gathering:
            'Public gatherings such as social gatherings, worship, weddings and funerals will continue to be restricted to 10 persons. \n If virus activity remains low, we will give serious consideration in mid-May to easing the restrictions on group size',
          government_offices:
            'Government offices continue to be safe and, unless otherwise determined by management, remain open to staff.',
          'Restart of non-urgent surgery and diagnostic procedures':
            'On April 24, health officials moved to restart elective surgeries and other non-emergent health services. ',
          'therapeutic or health care businesses':
            'Effective May 4. Businesses may open and are required to limit occupancy to 50 per cent of normal business levels or one person per 10 square metres, whichever is lower. \n  Businesses may continue to provide goods by delivery or pick-up that have been ordered online, by telephone or other remote means. \n Refer to page 22 of the "Restoring Safe Services Phase 1" for detailed guidelines.',
          retail:
            'Effective May 4. Businesses may open and are required to limit occupancy to 50 per cent of normal business levels or one person per 10 square metres, whichever is lower. \n  Businesses may continue to provide goods by delivery or pick-up that have been ordered online, by telephone or other remote means. \n Refer to page 23 of the "Restoring Safe Services Phase 1" for detailed guidelines',
          restaurant:
            'Effective May 4.  Businesses may open and are required to limit occupancy to 50 per cent of normal business levels or one person per 10 square metres, whichever is lower. \n  Businesses may continue to provide goods by delivery or pick-up that have been ordered online, by telephone or other remote means.\n Refer to page 24 of the "Restoring Safe Services Phase 1" for detailed guidelines',
          barbers_and_hair_stylists:
            'Effective May 4.  Services will be limited to hair washes, cuts, colouring and styling. No other personal services will be allowed. \n Businesses may open and are required to limit occupancy to 50 per cent of normal business levels or one person per 10 square metres, whichever is lower. \n  Businesses may continue to provide goods by delivery or pick-up that have been ordered online, by telephone or other remote means.\n Refer to page 25 of the "Restoring Safe Services Phase 1" for detailed guidelines',
          'Museums, galleries, libraries':
            'Effective May 4, museums, galleries and libraries may reopen if the organization can maintain an occupancy level to allow staff and customers to maintain a physical distance of at least two metres, except for brief exchanges \n Refer to page 26 of the "Restoring Safe Services Phase 1" for detailed guidelines"',
          'Outdoor recreation facilities and golf courses':
            'Effective May 4, playgrounds, skate parks, golf courses, tennis courts, driving ranges, marinas, drive-in movie theatres and other similar recreation facilities may reopen if people maintain a distance of at least two metres, except for brief exchanges. \n All businesses will be required to limit occupancy to 50 per cent of normal business levels or one person per 10 square metres, whichever is lower \n Refer to page 27 of the "Restoring Safe Services Phase 1" for detailed guidelines',
          'Parks, campgrounds, yurts and vacation cabins':
            'Effective May 4, parks, campgrounds, yurts and vacation cabins may open if people maintain a distance of at least two metres, except for brief exchanges. \n Refer to page 28 of the "Restoring Safe Services Phase 1" for detailed guidelines',
          day_camps:
            'Day camps may operate if they maintain occupancy and activity levels that allow people to maintain a physical distance of at least two metres, except for brief exchanges. The maximum number of children per site is 16. \n Overnight camps are not permitted. \n Refer to page 29 of the "Restoring Safe Services Phase 1" for detailed guidelines ',
          enforcement:
            'Officials will continue with the system of escalating enforcement, including education, warnings and tickets',
        },
      },
      { phase: 2, restrictions: {} },
      {
        phase: 3,
        restrictions: {
          gathering:
            ' Indoor gathering limits are increased to up to 50 and outdoor gathering limits are increased to up to 100 people',
          travel:
            'Residents of Western Canada and Northwestern Ontario do not need to self-isolate for 14 days when entering Manitoba. Otherwise, 14 days of self isolation is mandatory',
          professional_sports_team:
            'People employed by or affiliated with a professional sports team based in Manitoba may enter Manitoba without self-isolating for 14 days if they are not displaying any symptoms of COVID-19.',
          personal_services:
            'further opening will be considered in the coming weeks of June 30, 2020',
          gyms_and_recreation_facilities:
            'further opening will be considered in the coming weeks of June 30, 2020',
          'Visits in personal care and long term care settings':
            'The health system will continue to review visitation policies and processes to ensure the safety of residents in these facilities. Changes may be made to further ease visitation restrictions in the coming weeks of June 30, 2020',
          travel:
            'Public health officials may consider extending self-isolation exemptions to people returning to Canada – if they have self-isolated outside of Manitoba,',
          casino:
            'The opening of casinos will be considered in the coming weeks of June 30, 2020.',
          'gathering, events, and peforming art venus':
            'There will be no large gatherings or events until at least September 2020',
          camps:
            'No overnight camps will be permitted in the foreseeable future',
        },
      },
      {
        phase: 4,
        restrictions: {
          personal_services:
            'Further opening of these businesses, including manicurists and pedicurists, tattoo parlours, estheticians, cosmetologists, electrologists and tanning parlours, will be considered in the coming weeks.',
          gyms_and_recreation_facilities:
            'Further opening of public/private indoor and outdoor swimming pools (private residential pools are not restricted), spas, fitness clubs and gyms will be considered in the coming weeks.',
          Performance_and_Movie_Theatres:
            'Stage performance and movie theatres may provide plans that address physical distancing and control of areas where patrons may congregate between shows, performances or acts of a play, along with similar scenarios.',
          'Visits In Personal Care and Long-Term Care Settings':
            'The health system will continue to review visitation policies and processes to ensure the safety of residents in these facilities. Changes may be made to further ease visitation restrictions in the coming weeks.',
          Travel:
            'Public health officials may consider extending self-isolation exemptions to people returning to Canada - if they have self-isolated outside of Manitoba, in accordance with the federal Quarantine Act upon their return to the country. In addition, exemptions to self-isolation requirements from other low-risk jurisdictions will be considered going forward.',
          Casino:
            'The opening of casinos will be considered in the coming weeks.',
          Gathering:
            'There will be no large gatherings or events until at least September 2020.',
          Camping:
            'No overnight camps will be permitted in the foreseeable future, as it may be difficult to maintain public health requirements for ongoing physical distancing.',
        },
      },
    ],
    more: 'https://www.gov.mb.ca/covid19/restoring/index.html',
  },
  {
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
  },
  {
    province: 'Alberta',
    abbr: 'AB',
    current_stage: 2,
    phases: [
      {
        phase: 1,
        restrictions: {
          'Campgrounds (private/municipal)': 'Open June 30',
          'Day camps': 'Open June 22',
          'Daycare & out of school care': 'Open June 11',
          'Disability service providers': 'Open June 8',
          'Dog parks': 'Open June 18',
          "Farmers' markets": 'Open June 18',
          'Food processing facilities': 'Open June 18',
          'Funeral homes': 'Open June 18',
          'Golf course and driving range operators': 'Open June 18',
          'Gondolas, trams and chairlifts': 'Open June 18',
          'Graduation ceremonies': 'Open June 30',
          'Grocery stores': 'Open June 30',
          'Health non-essential services':
            'Record of decision of the Chief Medical Officer of Health amending a previous order (CMOH Order 07-2020) and allowing for the resumption of non-essential health services to Albertans. \n This order is under conditions outlined in Appendix A, Workplace Guidance for Community Health Care Settings. \n Effective June 12, 2020, this order was rescinded by CMOH Order 25-2020.',
          'Hotels, motels, bed and breakfast, and vacation rentals':
            'Open June 30',
          'Hunting and fishing lodges, camps and outfitters': 'Open June 30',
          'Industrial work camps': 'Open June 5',
          'Interpretive attractions': 'Open June 18',
          'Malls and shopping centres': 'June 18',
          'Multi-family dwellings, condos and apartment buildings': 'June 18',
          'Outdoor events': 'Open June 30',
          'Outdoor fitness': 'Open June 22',
          'Places of worship': 'Open June 22',
          Playgrounds: 'Open June 18',
          'Post-secondary institutions': 'Open June 22',
          Preschools: 'Open June 11',
          'Restaurants, cafes, pubs, and bars': 'Open June 29',
          Retail: 'Open June 18',
          'Shooting (firearm) ranges': 'Open June 18',
          'Taxis, limos, rideshares and commuting': 'Open June 29',
        },
      },
      {
        phase: 2,
        restrictions: {
          'Animals and pets': 'Open June 22',
          'Bingo halls': 'Open June 25',
          'Casinos and racing centres': 'Open June 17',
          'Chartered tour buses, multi-city buses and passenger trains':
            'Open June 13',
          'Drive-in events': 'Open June 30',
          'Family day homes': 'Open June 11',
          'Food catering': 'Open June 11',
          'Home-based, mobile and door-to-door operations': 'Open June 23',
          'Horse racing parks and motor raceways': 'Open June 30',
          'Indoor entertainment recreation': 'Open June 9',
          'Indoor events': 'Open June 23',
          'Large production facility rapid response plans': 'Open June 15',
          Libraries: 'Open June 9',
          'Live music, dance and theatre': 'Open June 25',
          'Movie theatres': 'Open June 9',
          'Office buildings': 'Open June 12',
          'Personal services': 'Open June 9',
          'Public rallies, marches, parades and demonstrations': 'Open June 30',
          'Public transit': 'Open July 8',
          Rodeos: 'Open June 30',
          'School (K-12) re-entry guidance': 'Open June 10',
          'Screen-based production industry': 'Open June 12',
          'Seniors centres and seniors serving organizations': 'Open June 13',
          'Sport, physical activity and recreation': 'Open June 30',
          'Spray parks and wading pools': 'Open June 9',
          'Summer school': 'Open June 10',
          'Swimming pools and whirlpools': 'Open June 12',
          'Video lottery terminal retailers': 'Open June 17',
          Warehouses: 'Open June 15',
          'Wellness services': 'Open June 30',
        },
      },
      {
        phase: 3,
        restrictions: {
          'All businesses and services':
            'fully reopening all businesses and services, with some restrictions',
          'larger gatherings': 'permitted (number of people to be determined)',
          'arts and culture festivals, vocal concerts and major sporting events':
            'will be permitted with restrictions',
          nightclubs: 'will reopen, with restrictions',
          'industry conferences': 'can resume, with restrictions',
          travel: 'no restrictions on non-essential travel',
        },
      },
    ],
    more: 'https://www.alberta.ca/guidance-documents.aspx',
  },
  {
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
  },
  {
    province: 'Yukon',
    abbr: 'YT',
    current_stage: 2,
    phases: [
      {
        phase: 1,
        restrictions: {
          travel:
            'Restricted entry to Yukon continued. \n Mandatory 14-day self-isolation continued.\n Limit travel to communities. \n Travel respectfully within Yukon and to communities.',
          Gatherings:
            'Indoor 10 or fewer. \n Outdoor: 10 or fewer. \n Funerals and religious services may have relaxed restrictions subject to public health assessment.',
          Restaurants: 'restaurants can offer 50% capacity dine-in services',
          Personal_care: 'personal care services can reopen',
          Bars: 'bars can reopen from June 19.',
          Recreation_and_entertainment:
            '. \n Recreation centres and libraries reopen in limited capacity following guidelines',
          Education_and_childcare:
            'Daycares are open to children of all workers. \n ',
          Camping:
            'Public campgrounds reopen June 4 following guidelines\n Overnight camps are not permitted. \n Summer day camps can operate following guidelines',
        },
      },
      {
        phase: 2,
        restrictions: {
          travel:
            'Expanded entry to Yukon for residents of Canada. \n Mandatory 14-day self-isolation continues for some people arriving in Yukon. \n Limit travel to communities. \n Travel respectfully within Yukon and to communities. \n May have relaxed restrictions subject to public health assessment and community engagement.',
          gathering:
            'Indoor: 10 or fewer. \n Outdoor: 50 or fewer if physical distancing can be maintained.',
          restaurants:
            'Restaurants can offer full capacity dine-in services, with physical distancing.',
          bars: 'Bars are open, following guidelines.',
          Education_and_childcare:
            'Resumption of in-person K-12 education for the 2020-2021 school year. \n Return to Yukon University campus to be determined in consultation with Yukon University Board. ',
        },
      },
      {
        phase: 3,
        restrictions: {
          travel:
            'Limit travel to communities continued. \n Travel respectfully within Yukon and to communities. \n May have relaxed restrictions subject to public health assessment and community engagement.',
          gathering:
            'No size restrictions if physical distancing can be maintained.',
          Education_and_childcare:
            'TBD in consultation with the Department of Education and Yukon University Board.',
        },
      },
      {
        phase: 4,
        restrictions: {
          All_services:
            'This is the post-vaccine stage. There will be no restrictions',
        },
      },
    ],
    more:
      'https://yukon.ca/en/health-and-wellness/covid-19-information/summary-yukons-plan-lifting-covid-19-restrictions',
  },
  {
    province: 'Northwest Territories',
    abbr: 'NT',
    current_stage: 1,
    phases: [{ phase: 1, restrictions: {} }],
    more: '',
  },
  {
    province: 'Nunavut',
    abbr: 'NU',
    current_stage: 2,
    phases: [
      { phase: 1, restrictions: {} },
      { phase: 2, restrictions: {} },
    ],
    more: '',
  },
]);
