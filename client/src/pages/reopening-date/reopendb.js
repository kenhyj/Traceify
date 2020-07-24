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
    current_stage: 3,
    phases: [
      {
        phase: 1,
        restrictions: {
          Distancing:
            'Frequent hand washing, surface cleaning and physical distancing (2m)',
          Masks:
            'Community face masks (facial coverings) in public when physical distancing cannot be maintained (required)',
          'Social gathering': 'No social gatherings',
          'Public spaces':
            'Health screenings, handwashing stations, barriers, and reduced maximum occupancies required for public spaces',
          Businesses:
            'Only businesses or activities deemed essential that can ensure physical distancing are open (with strict controls)',
          'Visits to vulnerable population': 'allowed (with strict controls)',
          Daycares: 'Daycares available for essential workers',
          'Schools and post-secondary institutions': 'available virtually',
        },
      },
      {
        phase: 2,
        restrictions: {
          'Elective surgeries and other non-emergency health services':
            'allowed',
          'Two-household bubble': 'allowed',
          Gatherings: 'Allowed with physical distancing of 10 or fewer',
          'Golf courses, outdoor tennis courts, marinas': 'allowed',
          Carpooling: 'allowed',
          'Outdoor religious services': 'allowed',
          'Recreational fishing and hunting': 'allowed',
          'Post-secondary education and some cultural venues': 'allowed',
          Offices: 'allowed',
          Retail_businesses: 'allowed',
          Restaurants: 'allowed',
          'Campgrounds and outdoor recreational activities': 'allowed',
          'Daycare, childcare and day camps': 'allowed',
          ATV_trails: 'allowed',
        },
      },
      {
        phase: 3,
        restrictions: {
          'Family and friends bubble': 'allowed',
          'Non-regulated health professionals/businesses': 'allowed',
          'Personal services businesses': 'allowed',
          'Outdoor gatherings in uncontrolled venues with physical distancing of 50 or fewer':
            'allowed',
          'Religious services, weddings and funerals with physical distancing':
            'allowed',
          'Outdoor and indoor visitation with physical distancing and controls in long-term care facilities':
            'allowed',
          'Increase in elective surgeries and other non-emergency health care services':
            'allowed',
          'Swimming pools, saunas and waterparks': 'allowed',
          'Gyms, yoga and dance studios': 'allowed',
          'Rinks and indoor recreational facilities subject to the gathering':
            'allowed',
          'Pool halls and bowling alleys': 'allowed',
          'Organized sports': 'allowed',
          'Overnight camps': 'allowed',
          'Canadian residents owning property in New Brunswick':
            'will be permitted to enter the province provided they self-isolate for 14 days, or the duration of the visit if shorter than 14 days',
          'Casinos and bingo halls': 'allowed',
          'Amusement centres and arcades': 'allowed',
          'Cinemas, bars (without seating) and large live performance venues':
            'allowed',
          'Trade shows and conferences': 'allowed',
        },
      },
      {
        phase: 4,
        restrictions: {
          Detail:
            'This transition to a new normal includes the reopening of all businesses and activities, with increased health and safety practices remaining part of daily life. \n All conditions are lifted with the exception of community face masks (facial coverings), which remain required to wear in public when ill.',
        },
      },
    ],
    more:
      'https://www2.gnb.ca/content/gnb/en/corporate/promo/covid-19/recovery.html',
  },
  {
    province: 'Quebec',
    abbr: 'QC',
    current_stage: 1,
    phases: [
      {
        phase: 1,
        restrictions: {
          'Reopening of Economic Activities':
            'All economic activity sectors are authorized to resume their acitivities except: \n\
          Festivals and major events. \n\
          Regular vacation camps with accommodation.',
          School:
            'The government has presented its plan for the start of the fall season in the school system and in higher education, for all regions of Québec. This school start will be carried out in compliance with the directives of the public health authorities.',
          Gathering:
            'The instructions for outdoor and indoor gatherings have been relaxed in recent weeks. \n More changes are effective, mainly concerning physical distancing during indoor gatherings in public places, and physical distancing between children aged 16 and under.',
          'Tourist activities':
            'Tourism industry businesses and establishments are authorized to resume their activities, under certain conditions.\n Maritime excursions will also be able to resume their activities starting from July 1, 2020.',
          'Cultural sector':
            'The Québec government is authorizing the gradual reopening of cultural establishments, except for festivals and major events.\n In addition, the government has adopted a recovery plan to stimulate creation and the offering of Québec cultural products available. The amounts invested aim to ensure that this sector will resume its activities on a sustainable basis and regain its place as an engine of economic and social development.',
          'Day Camps and summer camps':
            'The Gouvernement du Québec authorizes the day camps available throughout the territory to open for the summer, starting from June 22. \n However, the municipalities and organizations responsible for holding the day camps will have to arrange for activities that foster compliance with the distancing rule, and that enable the enforcement of stricter hygiene measures. \n For summer camps, since they require additional measures to be applied that will be difficult to respect, the opening of camps of this type is postponed until the summer of 2021. However, in order to provide some respite for families and natural caregivers, specialized residential camps for persons with disabilities will be allowed to operate during the summer of 2020.',
          'Unsupervised outings for the residents of private seniors’ residences':
            'The residents of private seniors’ residences can again go outside unsupervised. \n However, they must be sure to always maintain 2 m between themselves and other people. \n Moreover, loved ones can meet the residents outside but must observe physical distancing. \n This measure covers private seniors’ residences throughout Québec, including the territory of the Communauté métropolitaine de Montréal.',
          'More compassionate palliative and end-of-life care':
            'The prohibition has been lifted on visits to the palliative care units in residential and long-term care centres, private seniors’ residences, and intermediate and family-type resources.',
          'Broadening of visits by informal caregivers':
            'Since May 11, 2020, significant informal caregivers who were present on a regular basis before the pandemic can offer support to a person in an intermediate and family-type resource, or a private seniors’ residences. \n However, the informal caregivers must abide by certain instructions. \n This measure was already permitted in residential and long-term care centres (CHSLD).',
          'Physical disability, intellectual disability, autism spectrum disorder and physical rehabilitation':
            'Since May 22, 2020, people with a disability or autism spectrum disorder who live in the following environments: \n\
            Intermediate and family-type resources. \n\
            Ongoing assistance residences. \n\
            Boarding schools and group homes. \n\
            Other, as designated. \n\
            Are authorized to go out for the following reasons (subject to certain conditions and specific measures): \n\
            Attending school. \n\
            Working in sectors authorized by the Gouvernement du Québec. \n\
            Going outside in proximity to their quarters, commensurate with their condition (with or without supervision). \n\
            Temporary leave (with or without sleepover) in the family or any other environment listed in the treatment plan. \n\
            If major home support services for the individual are required during temporary leave, the institution may refuse authorization for safety reasons. \n\
            Visits by family members and/or friends are maintained on condition that the visitor understands all associated risks and promises to abide by the recommended instructions from public health authorities and those that are determined by management.\n\
            With respect to physical health and disability rehabilitation environments, only visits by a family member or friend are permitted and only when the person’s stay extends beyond 14 days and the visitor understands the associated risks and promises to abide by the recommended instructions from public health authorities and those that are determined by management. \n\
            However, temporary leave, outings and visits come with conditions and specific exceptional measures aimed at limiting the spread of COVID‑19. \n\
            In cases where leave, visits and/or outings cannot be authorized, other distance socialization solutions will be offered so as to maintain the connection between individuals and their families. \n\
            Resumption of internships and workplace daily activities in sectors that have been authorized by the Gouvernement du Québec is also permitted on a gradual basis and per the capacity of the health and social services facility and available resources.',
          'Withdrawal of checkpoints in the regions':
            'The Gouvernement du Québec is gradually reopening the regions. Despite the reopening of most of the regions, every person is requested, as much as possible, to avoid travelling from one region to another or from one city to another.\n At present, access is allowed to all regions of Québec, with the exception of the following territories: \n the Cree Territory of James Bay \n & Nunavik.',
          'Preschools, elementary and secondary schools':
            'Since May 11, preschools and elementary schools have been gradually reopening their doors to students in all regions of Québec, with the exception of those located in the Montréal metropolitain community (CMM), the regional county municipality of Joliette and the town of l’Épiphanie, which will remain closed until late August. \n Secondary schools will also remain closed until the end of August. However, some specialized schools offering regional or supraregional educational services and private schools dedicated to providing special education remain open, as do those that welcome students registered in one of the Work-Oriented Training Path courses. Distance learning will nevertheless continue as a result of improved pedagogical support.\n Starting June 8, 2020, certain elementary and secondary schools may open their doors to host learning camps for young people. These camps will last a minimum of three weeks and are intended to support the educational success of students with learning difficulties. Organizations that wish to continue to deliver these services throughout the summer may do so.\n Some Secondary IV and V students may also receive services by attending summer classes in person.',
          'Educational childcare services':
            'Since May 11, 2020,childcare services, including non-subsidized daycare centres and recognized and non‑recognized family daycare centres, have been gradually reopening in all regions of Québec, except for those in the territory of the Communauté métropolitaine de Montréal (CMM) and the Municipalité régionale de comté (MRC) de Joliette. \n Childcare services in the CMM and the MRC de Joliette are reopen since June 1. \n Starting on these dates, all children will return to the daycare they had attended before the closure of March 13, 2020.',
        },
      },
    ],
    more:
      'https://www.quebec.ca/en/health/health-issues/a-z/2019-coronavirus/gradual-resumption-activities-covid19-related-pause/',
  },
  {
    province: 'Ontario',
    abbr: 'ON',
    current_stage: 3,
    phases: [
      {
        phase: 1,
        restrictions: {
          Construction:
            'All construction activities or projects and related services that support construction activities or projects, including demolition services resume and essential workplace limits lifted. \n Includes land surveyors',
          Retail:
            'In addition to retail operating online, or curbside pickup and delivery, all businesses that sell or rent consumer products that open onto a street or exterior sidewalk can operate under the following restrictions and guidelines: \n\
          No indoor malls. \n\
          Persons in the place of business shall maintain physical distancing of at least two metres from each other at all times by: \n\
          Using curb side pick-up or delivery,\n\
          Providing in-store access by appointment, \n\
          Limiting customers so that they are able to stay two metres apart. \n\
          Only fitting rooms with doors would be used, not curtains, to facilitate disinfecting. \n Retailers would restrict use to every second fitting room at any one time to allow for cleaning and disinfecting after each use and ensure physical distancing.',
          Vehicle_dealerships_and_retailers:
            'Vehicle dealerships and retailers, including: \n\
          Motor vehicles, including cars, trucks and motorcycles. \n\
          Recreational vehicles, including motor homes. \n\
          Trailers and travel trailers. \n\
          Boats and other watercraft. \n\
          Other motorized vehicles, including power-assisted bicycles, golf carts, scooters, snowmobiles and all-terrain vehicles',
          Media_industries:
            'Sound recording, production, publishing and distribution businesses. \n\
          Film and television post-production, visual effects and animation studios. \n\
          Book and periodical production, publishing and distribution. \n\
          Interactive digital media businesses, including, computer system software or application developers and publishers, and video game developers and publishers. \n\
          Media activities that can be completed while working remotely have been encouraged to continue during the Restart phase. \n\
          Filming or other on-site activities, especially those that require the gathering of workers, performers or others are not permitted to resume in Stage 1.',
          'Health_services_- Non_emergency_diagnostic_imaging_and_surgeries':
            'Non-emergency diagnostic imaging and surgeries in public hospitals, private hospitals and independent health facilities, clinics, and private practices to resume based on ability to meet specified pre-conditions including the framework: A Measured Approach to Planning for Surgeries and Procedures During the COVID‑19 Pandemic, which contains clear criteria that must be met before hospitals can resume scheduled surgeries.',
          'Health services - in-person counselling and in-person services':
            'Certain health and medical services to resume, such as in-person counselling and in-person services, in addition to ongoing virtual services, delivered by health professionals, all based on the ability to meet pre-specified conditions. \n\
            In-person counselling to resume including psychotherapy and other mental health and support services, based on the ability to meet pre-specified conditions. Some of these services continue to be available in-person for urgent needs. \n\
            For example:Addiction counselling. \n Crisis intervention. \n Family counselling. \n Offender rehabilitation. \n Palliative care counselling. \n Parenting services. \n Rape crisis centres. \n Refugee services',
          Community_services:
            'Libraries for pick-up or delivery \n Religious services for drive-in only',
          Outdoor_recreational_amenities:
            'Golf courses and outdoor golf driving ranges are open to the public. \n\
          Any clubhouse or recreational amenity (pools, fitness centres etc.) must remain closed except for washrooms and first aid facilities. Restaurants on the premises may provide food by take out or delivery. \n\
          Marinas, and boat clubs (e.g.yacht clubs) are authorized to be open to the public. Any clubhouse, or recreational amenity must remain closed, except for washrooms and first aid facilities. \n\
          Marinas/ boat clubs may operate generally including by providing grocery or convenience stores, provide fuel supplies, provide watercraft repair and servicing, and provide watercraft docking and launching services to the public. Restaurants on the premises may provide food by take out or delivery. \n\
          Private campgrounds are authorized to be open to prepare for the upcoming season. \n\
          They may also allow people who have a full season lease on a trailer or RV with water/electric hook ups in the park to use their trailer. Common amenities and recreational facilities remain closed. \n\
          Pools will remain closed',
          Individual_outdoor_recreational_sports:
            'Facilities for outdoor sports and activities will open for individual activities with physical distance of at least two metres from any other person (i.e., not team or contact sports) with limited access to facilities (i.e., no locker rooms, no change rooms, no showers and no clubhouses ­‑ washrooms and emergency aid only): \n\
          Baseball diamonds, \n Soccer fields, \n Frisbee golf. \n Tennis, platform tennis, table tennis and pickleball courts \n\
          Basketball courts, \n BMX parks, \n Skate parks, \n Motorsport tracks, \n Cycling tracks and bike trails, \n Horse riding facilities, \n Shooting ranges, including those operated by rod and gun clubs, \n\
          Indoor shooting ranges including those operated by rod and gun clubs, indoor golf driving ranges, and indoor horse-riding facilities with similar restrictions (i.e., no team or contact sport, physical distancing and limited facilities). \n\
          Equipment renting services will be available for the sports that are resuming.',
          Individual_sports_competitions_without_spectators:
            'Facilities, other than pools, can be used if they are used to train amateur or professional athletes or to run amateur or professional athletic competitions if they are being used by one or more of the following organizations, leagues or clubs: \n\
          A national sport organization recognized by Sport Canada or a member club of such an organization. \n\
          A provincial sport or multi-sport organization recognized by the Ministry of Heritage, Sport, Tourism and Culture Industries or a member club of such an organization. \n\
          A professional sport league or a member club of such a league. \n\
          Team sports and sports that are likely to result in individuals coming within two metres of each other are not allowed. \n\
          Horse racing tracks are open with no access to the public (i.e., no spectators).',
          Professional_services_related_to_research_and_development:
            'Professional services related to conducting research and experimental development in physical, engineering and life sciences including electronics, computers, chemistry, oceanography, geology, mathematics, physics, environmental, medicine, health, biology, botany, biotechnology, agriculture, fisheries, forestry, pharmacy, veterinary and other allied subjects. \n\
          For example: \n\
          Agriculture, food research, horticulture or botany, entomological, forestry, livestock, veterinary research and development laboratories. \n\
          Bacteriological, biotechnology, chemical, nanobiotechnology, pharmacy, genetics, genomics, computational biology, research and development laboratories. \n\
          Computer and related hardware, electronic, telecommunication research and development services. \n\
          Geology, oceanographic, pollution research and development, and astronomical observatories. \n\
          Mathematics research and development. \n\
          Industrial research and development laboratories.',
          Emissions_inspection_facilities:
            'All emissions inspection facilities for heavy diesel commercial motor vehicles, including mobile inspection facilities',
          Veterinary_services:
            'Veterinary services can resume all services by appointment.',
          Animal_services:
            'Pet grooming services. \n Pet sitting services. \n Pet walking services. \n Pet training services. \n Training and provision of service animals. \n Effective May 16, 2020, businesses that board animals (e.g., stables) may allow boarders to visit, care for, or ride their animal',
          Indoor_and_outdoor_household_services:
            'Private households could now employ workers on or about the premises in activities primarily concerned with the operation of the household such as: \n\
          Domestic services: housekeepers, cooks, maids, butlers, personal affairs management, nanny services, babysitters, other domestic personnel, etc. \n\
          Cleaning and maintenance service: house cleaning, indoor/outdoor painting, window cleaning, pool cleaning, general repairs.',
          Maintenance:
            'Maintenance, repair and property management services that manage and maintain the safety, security, sanitation and operation of institutional, commercial, industrial and residential properties and buildings can resume, and are no longer limited to "strictly necessary" maintenance.',
        },
      },
      {
        phase: 2,
        restrictions: {
          Personal_care_services: '',
          Personal_services:
            "Businesses primarily engaged in providing other personal services can open with the proper health and safety protocols in place. All services must be provided with physical distancing of at least two metres. \n\
          Examples include: \n\
          House sitting. \n\
          Party, wedding planning and consulting services. \n\
          Personal organizer services. \n\
          Personal physical fitness trainer and sports trainers (outside of gyms only). \n\
          Personal shopping services. \n\
          Porter services. \n\
          Shoe services (e.g., shining, repair). \n\
          Check room services (e.g., coat check, suitcase storage). \n\
          Wedding chapels. \n\
          Businesses should also consider operating by appointment and/or record each patron's name and contact information for the purpose of contact tracing.",
          Restaurants_and_bars:
            'Restaurants, bars, food trucks and other food and drink establishments (e.g., wineries, breweries and distilleries) can open for dining in outdoor areas only, such as patios, curbside, parking lots and adjacent premises.\n\
          Establishments must take appropriate measures to keep patrons and workers safe: \n\
          Patrons must be seated when eating or drinking in the establishment \n\
          The outdoor dining area must be configured to ensure physical distancing of at least two metres between patrons from different tables unless separated by plexiglass or some other impermeable barrier. \n\
          No buffet-style service may be provided \n\
          Access to indoor facilities is limited to patio/outdoor dining area access, food pickup, payment, washrooms or other health and safety purposes.',
          Shopping_malls_and_centres:
            'In addition to providing online, curbside pickup and delivery services, all shopping centres, malls and markets may open. Stores in these facilities must follow the same guidance as those set out for other retail services. \n\
          Food services and restaurants with mall-only entrances may open for outdoor dining spaces, delivery and takeout. Dine-in at indoor food courts is prohibited. \n\
          Entertainment amenities not permitted in Stages 1 or 2, such as movie theatres and waterparks, remain closed. \n\
          Malls may need to institute the policies that were put in place by retail outlets that remained open as essential businesses or were permitted to reopen during Stage 1, including engineering and administrative controls, such as: \n\
          Alternative operating hours to address increased cleaning demands. \n\
          Enhanced security and limiting entrances. \n\
          Creation and enforcement of walking traffic patterns. \n\
          Operating by appointment or reservation. \n\
          Limiting the number of people who may be in one business at any one time. \n\
          Restricting fitting room access and implementing cleaning process between fitting room customers. \n\
          General building management, including signage and hand sanitizer at the entrance of building, and removing gathering settings (e.g., benches). \n\
          Industry associations recommend that efforts to screen people for COVID-19 symptoms at shopping malls is best performed at the entry point of the shopping centre rather than at individual shops.',
          Photography:
            'All photography studios and services, including portrait, aerial, special event, commercial and industrial photography can reopen. \n\
          Physical distancing must be maintained between all individuals on set whenever possible and must be taken into consideration when organizing the layout of the set.',
          Film_and_TV:
            'All film and television production activities will be allowed to resume. \n\
          Physical distancing must be maintained between all individuals on set whenever possible and must be taken into consideration when organizing the layout of the set.',
          Tour_and_guide_services:
            "Indoor and outdoor tour and guide services will be allowed to resume. \n\
          This includes: \n\
          Resource-based tours (e.g., hunting, fishing and similar excursions) \n\
          Tastings and tours for operators of on-site retail stores at manufacturing sites (e.g., wineries, breweries and distilleries) \n\
          Trail riding, walking and bike tours \n\
          Motor vehicle and boat tours (e.g., for sightseeing) \n\
          Businesses should consider operating by appointment and must record each patron's name and contact information for the purpose of contact tracing. \n\
          Patrons must adhere to physical distancing measures and limits to public gatherings. \n\
          Equipment may be rented as needed as part of the tours. Equipment must be properly cleaned and disinfected in between rentals. \n\
          Access to production areas for tours of food and beverage manufacturing sites is permitted, as long as operators can follow workplace guidance and public health advice to ensure quality and cleanliness of products. Eating or drinking can occur in licensed outdoor spaces but is not permitted indoors.",
          Water_recreational_facilities:
            'All indoor and outdoor swimming pools and outdoor splash pads and wading pools may open to the public with no access to high-contact aquatic features such as slides and climbing structures. \n\
          This includes public pools as well as pools situated in hotels, motels, condo parks, resorts and other private facilities. \n\
          Waterparks, wave pools and water slides will not be permitted to reopen in Stage 2. \n\
          Any locker rooms, change rooms, showers and washrooms must be cleaned and disinfected as frequently as is necessary to maintain a sanitary environment. \n\
          Persons in the place of business shall maintain physical distancing of at least two metres from each other at all times by: \n\
          Reducing resting areas and pool capacity. \n\
          Limiting and distancing pool-side seating. \n\
          Timed entry (e.g., appointment only). \n\
          Equipment rented or loaned must be disinfected or quarantined appropriately between uses. \n\
          Aquatic activities such as fitness classes and swim lessons must be in line with physical distancing measures. For example, only other household members can assist swimmers with physical contact.',
          Outdoor_recreational_facilities:
            'Outdoor-only recreational facilities that operate low-contact attractions and activities will be allowed to reopen. \n\
          This includes activities such as paintball, mini-golf, archery ranges, go-cart tracks and other adventure activities. \n\
          Locker rooms, change rooms, showers and clubhouses will remain closed, except to the extent they provide access to a washroom or a portion of the facility that is used to provide first aid. \n\
          Equipment rented, loaned or utilized for outdoor adventure elements (e.g., ladders, ziplines, hand cables) must be disinfected or quarantined appropriately between uses. Activities where equipment cannot be sanitized are not permitted. \n\
          Recreational activities or areas that do not allow for two-metre physical distancing between patrons are not permitted. \n\
          Indoor recreational activities are not permitted except for indoor driving ranges and rod and gun clubs. \n\
          Amusement parks and waterparks (including those attached to hotels) will remain closed. \n\
          Playgrounds, play structures and outdoor fitness equipment will remain closed.',
          Beaches_and_parks_and_camping:
            "In Stage 1, Ontario Parks opened limited backcountry camping including paddle and portage routes, access points and hiking trails. In Stage 2, Ontario Parks campgrounds and private campgrounds can also open for recreational vehicle, car camping and all other types of camping. \n\
          Campers must adhere to social gathering size restrictions and maintain two-metre physical distancing with people outside their household or social circle and when outside of their campsites. \n\
          Beach access at Ontario Parks will be permitted as part of Ontario Parks' gradual reopening, although measures including limited capacity will be taken at some parks to enable physical distancing.",
          Outdoor_recreational_team_sports:
            'Outdoor team sports may resume, if physically distanced, for training only and with no scrimmages or games. \n\
          This includes limited access to facilities (e.g., no locker rooms, no change rooms and no showers). \n\
          Access to clubhouse and other amenities will be limited to washrooms, emergency aid and equipment management. \n\
          On June 27th, Ontario removed certain restrictions for indoor sports and recreational fitness activities facilities, enabling these facilities to be used by more businesses and organizations to train amateur or professional athletes, or to run certain non-contact amateur or professional athletic competitions.',
          Drive_in_and_drive_thru_venues:
            'All existing and new drive-in and drive-thru venues can open for a variety of purposes, such as theatres, concerts, animal attractions and cultural appreciation, such as art installations. \n\
          Food services are restricted to delivery to vehicles and drive-thru only. \n\
          Operators must have in place procedures for staff to ensure people remain in their cars except for using the washroom or in an emergency. \n\
          In addition to other workplace and public health measures, drive-ins and drive-thru venues should: \n\
          Limit the number of vehicles and how they are parked to ensure physical distancing. \n\
          Ensure that any washrooms open for use are cleaned and disinfected as frequently as is necessary to maintain a sanitary environment.',
          Weddings_and_funerals_and_similar_gatherings:
            'Venues not otherwise restricted can open to conduct wedding ceremonies, funerals and similar gatherings within existing public health restrictions. \n\
          Ceremonies and services for weddings, funerals and other similar ceremonies are subject to gathering limits of 30% of capacity for the venue if indoors, or up to 50 people if it occurs outdoors. \n\
          Social gatherings related to the ceremony or service (e.g. a wedding reception) are subject to limit of gatherings of up to 10 people. \n\
          Dine-in and bar services must be in-line with the related guidelines and restrictions. \n\
          Indoor and outdoor venues may open for weddings, funerals and similar gatherings, with limited access to facilities. \n\
          Guests that are not part of the same household should follow physical distancing guidelines.',
          Libraries:
            'All libraries can reopen with limited on-site services, such as computer access and contactless book pickup and drop-off. \n\
          Patrons are not permitted to handle books or materials on shelves. \n\
          Libraries should operate in adherence with public health guidelines on physical distancing, capacity and hygiene procedures (e.g., disinfecting returns and high-touch areas like computers).',
          Community_centres:
            'Community centres can reopen to the public with limited or modified on-site programs and services that follow workplace guidance and public health advice. \n\
          Recreational activities are restricted at indoor facilities, but these spaces can be used for other programs and services. \n\
          Examples of physically distanced programs and services include in-person counselling, group counselling, computer access, education and tutoring. \n\
          Food services are restricted to takeout, delivery and outdoor dining spaces. \n\
          Indoor pools may open (see water recreational facilities). \n\
          Access to locker rooms, change rooms, showers and communal kitchen areas is not allowed.',
          Attractions_and_heritage_institutions:
            "Museums, galleries, aquariums, zoos outdoor heritage institutions (e.g., landmarks, outdoor historic sites, botanical gardens), and other establishments primarily engaged in preserving and exhibiting objects, sites and natural wonders of historical, cultural and educational value are permitted to reopen with restrictions. \n\
          Interactive and high-contact exhibits within establishments, amusement parks, water parks and conference centres will remain closed in Stage 2. \n\
          Lockers will remain closed. \n\
          The opening of commercial areas (e.g., restaurant, cafe, bookshop, giftshop) are subject to the related guidelines and restrictions. \n\
          Persons in the place of business shall maintain physical distancing of at least two metres from each other at all times by: \n\
          Timed entry \n\
          A limited number of visitors allowed in a place at one time \n\
          Managed visitor flow (e.g., one-way flow) \n\
          Establishments should consider operating by appointment and/or record each patron's name and contact information for the purpose of contact tracing.",
          Small_outdoor_events:
            'Non-essential in-person gatherings of any size continue to be strongly discouraged. Small outdoor events, such as cultural celebrations, animal shows and fundraisers will be permitted in line with gathering-size restrictions, subject to local public health requirements. \n\
          Event organizers should have in place measures to enable physical distancing for people when in the event space and while waiting to enter, such as one-way traffic, marked lineup areas, and timed entry and length of stay. \n\
          Large outdoor events, such as concerts, large festivals, parades and amusement fairs, are not permitted.',
          Places_of_worship:
            'Effective Friday, June 12 all places of worship in Ontario were permitted to open with physical distancing in place and attendance limited to no more than 30 per cent of the building capacity to ensure the safety of worshippers.',
          Child_care_centres:
            'Licensed child care centres are permitted to reopen across Ontario as part of Stage 2 of reopening, while operating under enhanced health and safety requirements.',
          Summer_day_camps:
            'Summer day camp programs across the province can reopen this summer with health and safety protocols in place.',
        },
      },
      {
        phase: 3,
        restrictions: {
          'Amusement parks and water parks':
            'Amusement parks and water parks are not yet permitted to open in Stage 3.',
          Workplace:
            'Reopening most remaining workplaces and community spaces, while carefully and gradually lifting restrictions.',
          Community_spaces:
            'Reopening most remaining workplaces and community spaces, while carefully and gradually lifting restrictions.',
          Gathering:
            'As regions enter Stage 3, the following gathering limits apply: \n\
          Indoor gathering limits will increase to a maximum of 50 people, subject to physical distancing of at least two metres with people from outside their households or social circles \n\
          Outdoor gathering limits will increase to a maximum of 100 people, subject to physical distancing of at least two metres with people from outside their households or social circles',
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
      {
        phase: 2,
        restrictions: {
          'OUTDOOR DRIVE-IN EVENTS':
            'Effective June 1. \n Religious organizations, other organizations and drive-in movie theatres may hold outdoor events without limitation on numbers if people stay in their vehicles, or stand outside on the left side of their vehicles, as long as the windows of the vehicle next to them are closed and as long as people remain two metres apart at all times. ',
          'OUTDOOR VISITS IN PERSONAL CARE AND LONG-TERM CARE SETTINGS':
            'Effective May 29. \n Residents in these facilities may receive visitors in an outdoor setting where all individuals are reasonably able to maintain a separation of at least two metres from others. ',
          'PUBLIC GATHERINGS':
            'Effective May 22. \n Change: Indoor gatherings are increased to 25 and outdoor gatherings allowed up to 50 people.',
          'DAY CAMPS':
            'Effective June 1. \n Change: Group size increased to 24.',
          CHILD_CARE_SERVICES:
            'Effective June 1. \n Change: Groups can increase to a maximum of 24 children plus staffing',
          SCHOOLS:
            'Effective June 1. \n Facility use at schools permitted. Classroom learning will remain suspended for the remainder of the school year. \n However, schools are now open for staff and specific programs. \n As well, students will be able to meet with teachers for the purpose of assessment and planning for the resumption of classes in September. \n Occupancy must be based on maintaining physical distancing of two metres/six feet in individual rooms, with no more than 25 people per room',
          'POST-SECONDARY INSTITUTIONS AND VOCATIONAL COLLEGES':
            ' Facilities may reopen to provide limited instruction. \n Check with your post secondary for more specific restrictions',
          'TEAM SPORTS AND OTHER RECREATIONAL ACTIVITIES':
            'Effective June 1 \n Change: Sports and recreational activities for children and adults may resume',
          'TRAVEL TO NORTHERN PARKS, CAMPGROUNDS, CABINS, LODGES_AND_RESORTS':
            'Effective June 1. \n Change: Travel restrictions revised. \n Manitoba residents will be permitted to travel directly to parks, campgrounds, cabins, lodges and resorts north of the 53rd parallel from within Manitoba.',
          'OUTDOOR RECREATION FACILITIES AND GOLF COURSES':
            'Effective June 1. \n Change: Access to indoor facilities allowed.',
          'PARKS, CAMPGROUNDS, YURTS AND VACATION CABINS':
            'Open with social distancing enforced',
          'PUBLIC/PRIVATE SWIMMING POOLS, SPLASH PADS, SPAS,FITNESS CLUBS, GYMS AND TRAINING FACILITIES':
            'Effective June 1. \n These sites are required to limit occupancy to 50 per cent of normal business levels or one person per 10 square metres, whichever is lower.',
          'COMMUNITY/SERVICE CENTRES':
            'Effective June 1. \n The maximum number of people permitted per site is 25, except where discrete groupsof 25 can be segregated to prevent contact with other groups through the use of separate exits and/or staggered drop off schedules and monitoring access to the facility to avoid congestion. ',
          'PERSONAL SERVICES BUSINESSES':
            'Effective June 1. \n Change: Reopening of manicurists and pedicurists, tattoo parlours, estheticians, cosmetologists, electrologists and tanning parlours. \n Occupancy limits of 50 per cent of normal business levels or one person per 10 square metres will be in place. ',
          'BARS, BEVERAGE ROOMS, BREW PUBS, MICRO-BREWERS AND DISTILLERIES':
            'Effective June 1. \n Change: Patios and indoor spaces are allowed to operate at 50 per cent of site capacity',
          FILM_PRODUCTION:
            'Effective June 1. \n Change: Productions may resume operations.',
          'THERAPEUTIC OR HEALTH CARE BUSINESSES':
            'Effective June 1. \n Change: Occupancy limits lifted for regulated health professions. \n Occupancy limits of 50 per cent of normal business levels or one person per 10 square metres can be lifted for regulated health professions. Non-regulated health professions must continue to limit occupancy to 50 per cent of normal business levels or one person per 10 square metres. \n Service providers must continue to implement measures to ensure that members of the public are reasonably able to maintain a separation of at least two metres from others, except for brief exchanges.',
        },
        source:
          'https://manitoba.ca/asset_library/en/proactive/2020_2021/restoring-safe-services-phase-2.pdf',
      },
      {
        phase: 3,
        source:
          'https://www.gov.mb.ca/asset_library/en/proactive/2020_2021/restoring-safe-services-phase-3.pdf',
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
    current_stage: 2,
    phases: [
      {
        phase: 1,
        restrictions: {
          indoor_gathering:
            'Each household can have up to five people they don’t live with come over and be inside their house. A maximum of 10 people in total can be inside the house at any time.',
          outdoor_gathering:
            'gathering limits of 25 or less – which would include everyone doing or watching the activities at any given time. \n Physical distance of two metres can be maintained. \n Appropriate hand-washing or sanitizing can occur. \n Travel happens by household group, and \n No shared food or beverages.',
          funeral: 'see outdoor gathering',
          wedding: 'see outdoor gathering',
          'Baseball and softball': 'see "outdoor gathering"',
          Beaches: 'see "outdoor gathering"',
          Boat_launches: 'see "outdoor gathering"',
          Community_gardens: 'see "outdoor gathering"',
          Cricket: 'see "outdoor gathering"',
          Gun_ranges: 'see "outdoor gathering"',
          Golf_courses: 'see "outdoor gathering"',
          Outdoor_soccer: 'see "outdoor gathering"',
          Outdoor_ultimate_frisbee: 'see "outdoor gathering"',
          Outdoor_summer_camps_or_day_programming: 'see "outdoor gathering"',
          'Outdoor faith-based gatherings': 'see "outdoor_gathering"',
          playground:
            'open, but disinfection control protocols must be in-place.',
          personal_service_establishment: 'can open if requirements are met',
          tourism: 'can open if requirements are met',
          museum_and_art_galleries: 'can open if requirements are met',
          bottle_depot: 'can open if requirements are met',
          'gyms and fitness centres (only for personal training and outdoor classes)':
            'can open if requirements are met. ',
          shuttle_bus: 'can open if requirements are met',
          dine_ins: 'cannot open',
          theatres: 'cannot open',
          bars: 'cannot open',
          night_clubs: 'cannot open',
          'K-12 schools':
            'Class size limits. \n Non-medical mask use for those over the age of 2 (except in rare circumstances). \n Physical distancing. \n Enhanced hand-washing and infection control must be in-place. \n No communal or self-serve food',
          'Territorial Park day-use areas and cook shelters': 'begin opening',
          'Indoor Fields and Community Gyms (excluding pools, arenas, and gymnastics gyms)':
            'Begin opening. Capacity limits, enhanced handwashing and infection control protocols must be in-place. ',
          Libraries: 'begin opening',
        },
      },
      {
        phase: 2,
        restrictions: {
          'Indoor get-togethers':
            '25 or less allowed. No communal food or beverage provision',
          gymnastics:
            'Gymnastics clubs are higher risk and cannot open during this phase.',
          'Indoor sports and day programming':
            'Allowed so long as 25 people or less in the space and disinfection protocols in place',
          'Outdoor get-togethers': '50 or less allowed',
          'Organized outdoor activities (sports)':
            'Allowed with physical distancing, disinfection protocol in place. \n Maximum capacity in these spaces grows to 50 or less in line with relaxed limits on outdoor gatherings. \n Sports leagues should comply with national sport association guidelines and have liability insurance in place.',
          Public_outdoor_events:
            '50 people or less for the following: \n Community feasts and barbecues, \n Farmer’s Markets(with prior approval from the CPHO) \n Small concerts (with prior approval from the CPHO) \n Outdoor bingos',
          funerals: '50 or less allowed',
          tourism:
            'May now accommodate 50 or less people, and 25 or less inside of a vehicle as long as appropriate physical distancing and/or protective equipment is available.',
          movie_theatre:
            'May open with 25 customers per theatre: A WSCC risk assessment will determine what measures must be in-place to safely operate.',
          restaurants_and_lounges:
            'May seat 25 customers inside plus staff: A WSCC risk assessment will determine what measures must be in place to safely operate.\n Dance floors are prohibited and there can be no live music',
          bars: 'See resturants and lounges',
          Offices:
            'Open to public. Capacity restricted to 25 people per floor for office workers with physical distancing measures, handwashing, and infection control processes must be in-place.',
          community_and_youth_centres:
            'Open to the public. \n  Capacity restricted to 25 or less staff and clients. \n Physical distancing, handwashing, and infection control processes must be in-place.',
          indoor_faith_based_and_spiritual_gathering:
            'May resume so long as these following are followed: Capacity restricted to 25 total, with the ability to apply to the CPHO to seat more \n All efforts must be made to keep the congregation physically distant. \n Handwashing and infection control protocols and equipment must be in-place.',
          fitness_centres:
            'Classes may start running. A WSCC risk assessment will determine class size limits and mitigation measures based on the space and equipment',
          camping:
            'Overnight camping is open. \n Shower facilities and cook shelters may operate with enhanced disinfection protocols in place',
          pools:
            'open for instructor certification. \n Allow for limited use of pools in order to train and certify staff, and prepare the facilities for re-opening in the future.',
        },
      },
      {
        phase: 3,
        restrictions: {
          'Outdoor get-togethers':
            'Physical distance of two metres must be maintained. \n Appropriate handwashing or sanitizing must occur. \n Travel must be done by household group or friendship circle. \n No shared food or beverage.',
          funerals:
            'Physical distance of two metres must be maintained. \n Appropriate handwashing or sanitizing must occur. \n Travel must be done by household group or friendship circle. \n No shared food or beverage.',
          Choirs_and_band_classes:
            'Can begin to run. Physical distance of two metres must be maintained. \n Appropriate handwashing or sanitizing must occur.',
          tourism:
            'All capacity limits removed. \n Physical distancing and infection control measures must be inplace.',
          performance_theatres:
            'A WSCC risk assessment will determine what measures must be in-place to safely operate. \n No self-serve or communal food can be served.',
          'Music and community festivals':
            'A WSCC risk assessment will determine what measures must be in-place to safely operate. \n Capacity limits based on location will be required.',
          colleges_and_post_secondary:
            'A WSCC risk assessment will determine what measures must be in-place to safely operate',
          pools:
            'Capacity will be limited based on the facility. \n Handwashing and infection control protocols must be enhanced. \n Physical distancing must be maintained as much as possible. \n Saunas, steam rooms, and hot tubs will remain closed.',
          gyms:
            'Capacity will be limited based on the facility. \n Physical distancing must be maintained as much as possible \n Enhanced hand-washing and infection control processes must be inplace.',
        },
      },
      {
        phase: 4,
        restrictions: {
          Lifting_All_restrictions:
            'Restrictions are lifted if a vaccine for COVID-19 has been approved and produced and implemented in the seniors population, those with compromised immune systems due to other diseases. Those who already have long-term illnesses',
          Reimplementing_measures:
            'Cases resulting from breached protocols, evidence of community spread where the source could not be tracked, or cluster outbreaks may force the province back into previous phases.',
        },
      },
    ],
    more:
      'https://www.gov.nt.ca/covid-19/en/services/public-health-orders/emerging-wisely',
  },
  {
    province: 'Nunavut',
    abbr: 'NU',
    current_stage: 1,
    phases: [
      {
        phase: 1,
        restrictions: {
          Effective: 'July 20',
          'Licensed establishments':
            'All licensed establishments in the territory are allowed to open with regular hours.',
          'Outdoor gathering':
            'The limit for outdoor gatherings has been increased to 50 people.',
          'Indoor gathering':
            'The limit for indoor gatherings has been increased to 10 people. In private dwellings, this means 10 people in addition to those who reside there.',
          'Gatherings at places of worship, conference facilities, community halls, rental meeting spaces, and gatherings organized by the Government of Canada, Government of Nunavut, municipal corporations, or Regional Inuit Organizations':
            'The limit for gatherings at places of worship, conference facilities, community halls, rental meeting spaces, and gatherings organized by the Government of Canada, Government of Nunavut, municipal corporations, or Regional Inuit Organizations has been set at 50 people or 50% of capacity for the facility, whichever is less.',
          'Youth centres and day camps': 'may resume operations.',
          'Long-term care facilities':
            'can accept visitors in a limited capacity; they can only allow one to two visitors per resident at a time, and these visitors can only be immediate family.',
          'Personal service providers':
            'are permitted to open for one-on-one sessions. ',
          'Bars and restaurants':
            'are allowed to re-open and operate at half capacity.  Last call for alcohol service will be at 9 p.m.',
          'Theatres and churches': 'are permitted to re-open.',
          'Gyms and pools':
            'are permitted to re-open for solo workouts and lap swimming only.',
          'Dental Clinics, physiotherapy clinics, massage therapy, and chiropractic treatments':
            'are permitted to resume. Proper PPE must be made available if requested.',
          'Workplace and retail outlets':
            'are permitted to re-open, provided that they have safety measures in place.',
          'Galleries, museums, and libraries':
            'may be opened for individual viewing and browsing. Group sessions are still prohibited.',
          Daycares: 'are permitted to open up for regular business.',
          'Territorial parks':
            'may reopen for outdoor activities only. All park buildings will remain closed.',
          'Municipal playgrounds': 'are permitted to re-open.',
        },
      },
    ],
    more: 'https://www.gov.nu.ca/health/information/covid-19-novel-coronavirus',
  },
]);
