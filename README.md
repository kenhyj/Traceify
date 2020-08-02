# Traceify

**Collaborators (CSID)**: e5c0b, d2e2b, l0y2b, k0b0b &nbsp; <br/>
**Course**: CPSC 436I &nbsp; <br/>
**Lab section**: Thursday L1C &nbsp; <br/>
**May - August 2020**. &nbsp; <br/>
**Project Name**: Traceify <br/>
**Team Name**:ControlC<br/>

Traceify aims to help the general public in Vancouver by providing information and keeping track of where COVID-19 positive individuals visited within the past few days. The users will be able to view the locations, check their risk of COVID-19, check whether they crossed paths with any of the known positive patients, and have access to useful information (i.e., Financial help resources, Reopening Stages, etc.).

[![Traceify U2vu](https://i.imgur.com/KdfDccq.png)](https://www.youtube.com/watch?v=8TWWVOtbVD8&feature=emb_title 'U2vu')

## Tech Stack

- HTML
- CSS
- JS
- React
- Redux
- NodeJS
- NoSQL (mongodb)

## Instruction for Building the Project (DEV Environment)

For first time use, in the terminal, run 'npm install' inside both client and server folder.

From the root, run 'npm start'. This will start both the client and the server.
Create a '.env' file inside the client folder. You need to include:

```
REACT_APP_GOOGLE_API_KEY = 'YOUR GOOGLE API KEY'
DB_CONNECTION = 'mongodb+srv://admin:traceify@traceify-bzpck.mongodb.net/traceify?retryWrites=true&w=majority'
```

Note that you will have to generate your own Google API key from the Google Developer Console (https://console.cloud.google.com/).
Your API key needs to enable the following API libraries:

- Maps JavaScript API
- Places API
- Geocoding API

## Project Description

- Who is it for?

  - The general public.<br/><br/>

- What will it do? (What "human activity" will it support?)

  - It will keep track of COVID-19 positive individuals of where they have visited.<br/><br/>

- What type of data will it store?

  - Dates and Location of where people who turned out positive visited
  - List of Admin emails that can log in
  - For a detailed description, refer to the Database Schema section below<br/><br/>

- What will users be able to do with this data?

  - View map, locations, and infected numbers per region
  - Filter out by location or date or region
  - If you find yourself at risk (through 'Have I been Exposed?' page), you can isolate yourself at home for 2 weeks
  - You can avoid traveling to locations where there's higher chance of transmission<br/><br/>

- What is some additional functionality you can add/remove based on time constraints?
  - If we have time, we can extract the COVID-19 graphs real-time from certain websites and display them on our website. If we don't have time, we can include a link to those websites under our Q&A page.

## Project Task Requirements:

- 3-5 minimal requirements (will definitely complete)

  - [x] Make the Admin Panel only accessible to Admin emails that's stored as a 'whitelist' on the database, and allow Admins to log in via Google OAuth
  - [x] Home page: Google Maps integration to show data on map based on the filter selected
  - [x] Symptom Checker page: A quick self-testing page that assesses your likelihood of being contacted with COVID-19
  - [x] A thank you modal for all essential workers and people staying at home
        <br/>

- 3-7 "standard" requirements (will most likely complete)

  - [x] Have I Been Exposed? page: Checks whether you've crossed paths within close range of places that a positive patient visited
  - Retailers Re-Opening Stage Information by province
  - [x] Admin panel: Admin can submit and delete Outbreak data
  - [x] Admin panel: Admin can submit and delete anonymous location trace data of a positive patient
        <br/>

- 2-3 stretch requirements (plan to complete 1)

  - [x] Q&A page - Link to Wait times of hospitals, COVID-19 testing facility locations, government financial help website, overall summary of current situation in BC.
  - [] Current geolocation data only visible to Admin: alerts if the person moves out of their neighbourhood - Credit card statement parsing for areas visited by a patient who tested positive, and automatically upload this data to the database
    <br/>

## Task Breakdown

○ Pick 2 of your minimal requirements and break each of them down into ~2-5 smaller tasks! This will help you divide up work among your teammates.<br/>

- Set-up the database (create mock data, write scripts to populate the database, etc.)
- Implement Front-end of Admin panel
- Implement Back-end of Admin panel
- Implement Front-end of Home page. Research Google Map API and render dots on a map appropriately
- Implement Back-end of Home page
  <br/>

## Prototypes

![Thank you Page](client/protosketch/thankPage.png)
![Home](client/protosketch/1.jpg)
![Symptom Checker](client/protosketch/2.jpg)
![Have I been Exposed?](client/protosketch/3.jpg)
![Financial Help](client/protosketch/4.jpg)
![Retail Re-opening Dates](client/protosketch/page.png)
![Admin Panel](client/protosketch/admin-panel.PNG)

## Database Collections (Example data below)

- locationOutbreak
  ```
  { "_id" : ObjectId("5f095ebcd763512a7c020091"), "title" : "Lynn Valley Care Centre", "location" : { "lat" : 49.3339665, "lng" : -123.0469177 }, "city" : "North Vancouver", "date" : "2020-03-15T00:00:00Z" }
  ```
- locationTraces
  ```
  { "_id" : ObjectId("5f0575bc43ed5361d5a14be5"), "title" : "CF Pacific Centre", "location" : { "lat" : 49.283741, "lng" : -123.118548 }, "city" : "Vancouver", "time" : "9 AM ~ 12 PM", "date" : "2020-03-15T00:00:00Z" }
  ```
- reopenings

  ```
  {
        "_id" : ObjectId("5f162c7ca07e53cc40e66ba2"),
        "province" : "Nunavut",
        "abbr" : "NU",
        "current_stage" : 1,
        "phases" : [
                {
                        "phase" : 1,
                        "restrictions" : {
                                "Effective" : "July 20",
                                "Licensed establishments" : "All licensed establishments in the territory are allowed to open with regular hours.",
                                "Outdoor gathering" : "The limit for outdoor gatherings has been increased to 50 people.",
                                "Indoor gathering" : "The limit for indoor gatherings has been increased to 10 people. In private dwellings, this means 10 people in addition to those who reside there.",
                                "Gatherings at places of worship, conference facilities, community halls, rental meeting spaces, and gatherings organized by the Government of Canada, Government of Nunavut, municipal corporations, or Regional Inuit Organizations" : "The limit for gatherings at places of worship, conference facilities, community halls, rental meeting spaces, and gatherings organized by the Government of Canada, Government of Nunavut, municipal corporations, or Regional Inuit Organizations has been set at 50 people or 50% of capacity for the facility, whichever is less.",
                                "Youth centres and day camps" : "may resume operations.",
                                "Long-term care facilities" : "can accept visitors in a limited capacity; they can only allow one to two visitors per resident at a time, and these visitors can only be immediate family.",
                                "Personal service providers" : "are permitted to open for one-on-one sessions. ",
                                "Bars and restaurants" : "are allowed to re-open and operate at half capacity.  Last call for alcohol service will be at 9 p.m.",
                                "Theatres and churches" : "are permitted to re-open.",
                                "Gyms and pools" : "are permitted to re-open for solo workouts and lap swimming only.",
                                "Dental Clinics, physiotherapy clinics, massage therapy, and chiropractic treatments" : "are permitted to resume. Proper PPE must be made available if requested.",
                                "Workplace and retail outlets" : "are permitted to re-open, provided that they have safety measures in place.",
                                "Galleries, museums, and libraries" : "may be opened for individual viewing and browsing. Group sessions are still prohibited.",
                                "Daycares" : "are permitted to open up for regular business.",
                                "Territorial parks" : "may reopen for outdoor activities only. All park buildings will remain closed.",
                                "Municipal playgrounds" : "are permitted to re-open."
                        }
                }
        ],
        "more" : "https://www.gov.nu.ca/health/information/covid-19-novel-coronavirus"
  }
  ```

- users
  ```
  {
        "_id" : ObjectId("5ee6e54b3df617fe515762a5"),
        "email" : "kessris@gmail.com"
  }
  ```
