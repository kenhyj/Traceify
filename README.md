# Traceify

**Collaborators (CSID)**: e5c0b, d2e2b, l0y2b, k0b0b &nbsp; <br/>
**Course**: CPSC 436I &nbsp; <br/>
**Lab section**: Thursday L1C &nbsp; <br/>
**May 4th - August 7th 2020**. &nbsp; <br/>
**Project Name**: Traceify <br/>
**Team Name**:ControlC<br/>

Traceify aims to help the general public in Vancouver by providing information and keeping track of where COVID-19 positive individuals visited within the past few days. The users will be able to view the locations, check their risk of COVID-19, check whether they crossed paths with any of the known positive patients, and have access to useful information (i.e., Financial help resources, Reopening Stages, etc.).

[![Traceify U2vu](https://i.imgur.com/KdfDccq.png)](https://www.youtube.com/watch?v=8TWWVOtbVD8&feature=emb_title 'U2vu')

<h3>** NOTE **</h3>

**To log in as an Admin user, use the following credentials:**

**email:** traceifyvancouver@gmail.com<br/>
**password:** cpsc436i<br/>

## Project Task Requirements:

- 3-5 minimal requirements (will definitely complete)

  - &#x2611; Make the Admin Panel only accessible to Admin emails that's stored as a 'whitelist' on the database, and allow Admins to log in via Google OAuth
  - &#x2611; Home page: Google Maps integration to show data on map based on the filter selected
  - &#x2611; Symptom Checker page: A quick self-testing page that assesses your likelihood of being contacted with COVID-19
  - &#x2611; A thank you modal for all essential workers and people staying at home
    <br/>

- 3-7 "standard" requirements (will most likely complete)

  - &#x2611; Have I Been Exposed? page: Checks whether you've crossed paths within close range of places that a positive patient visited
  - Retailers Re-Opening Stage Information by province
  - &#x2611; Admin panel: Admin can submit and delete Outbreak data
  - &#x2611; Admin panel: Admin can submit and delete anonymous location trace data of a positive patient
    <br/>

- 2-3 stretch requirements (plan to complete 1)

  - &#x2611; Q&A page - Link to Wait times of hospitals, COVID-19 testing facility locations, government financial help website, overall summary of current situation in BC.
  - &#x2612; Current geolocation data only visible to Admin: alerts if the person moves out of their neighbourhood - Credit card statement parsing for areas visited by a patient who tested positive, and automatically upload this data to the database
    <br/>

## Tech Stack

The following tech Stack were used:

- HTML
- CSS
- JavaScript
- React JS
- Redux
- NoSQL
- Heroku

### Tech Utilization from CPSC436 Units

A combination of HTML, CSS, React JS was used to produce the frontend of the project. ReactJS provided the backbone of the frontend, CSS provided the styling and HTML provided some of the more convoluted boilerplate code such as inserting iframe codes.
Redux was used primarily in Symptom Checker to provide results of the quiz and provide heat layers and markers for our Home page map.<br/>
NodeJS uses were extensive. To name a few, its libraries provided a quick access to forming our backend and our connection to the database; NodeJS also provided linting and pre-made material user interface (MUI).<br/>
Our NoSQL via MongoDB was used to store reopening data, map data. Please refer to Database Collection section below. <br/>
Finally our web app project is deployed in heroku at https://staging-traceify.herokuapp.com/

### Database Collections (Example data below)

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

## Above and Beyond

- We think we owe it to ourselves that we went above and beyond with this project. Even though we were not provided ample and early access to data and API from the government or medical institutions that could have made a reduced a portion of our workload, we took the time to go through every website read through them and provide the database and datasets needed for our project.
- We made sure that our project was fully **responsive** to both mobile and laptop of **varying dimensions**.
- We took the extra mile of using the external **Google Map API** to implement our **map** in the Home page.
- We used **Google OAuth** to **securely handle user information**
- We stored login information in a browser's **session storage** so that the **login status persists** unless the tab is closed or the user manually logs out
- We **researched UX style** of government sites and medical sites for **accessibility**, and set to utilize only the **main colour themes** for the website (blue, grey)
- We allow **various filtering/rendering options** for the **Map**, rather than having only one option to render (i.e., heat map, markers)
- We **bought a domain and connected with our heroku app** so that it is **hosted on: 'http://traceify.ca'**

## Next Steps

- There are COVID-19 graphs real-time from certain websites. Instead of including links to those websites in our Q&A page, we would have loved to incorporate them into our project with appropriate styling and aesthetics and comfortable usability. This would involve some HTML parsing. We estimate that this would take around 1 week to implement and test.
- If we have more time, we could have used Vancouver's real time data into our Home Page's map component that was just beginning to be offered in late July. Additionally, if other cities provides their data, we would have loved to incoporate them as well. This would involve some HTML and/or PDF parsing. We'd have to do some research on how to do this. We estimate that this would take around 2 weeks to implement and test.
- We should include a search box component for Google Maps in our home page so that a user can just search an address and pan there on the map, which make it easier for users to navigate. There is a component that we can use in the plugin that we are using. We estimate that this would take about 2 days to implement and test.
- Since some health officials are currently using credit card statements and supermarket rewards cards purchase history to track a patient's whereabouts, we should implement a credit card parser to determine where patients have been according to their credit card statements, which would make the admin's job quicker and more reliable. More research needs to be done in order to implement this functionality. We estimate that this would take around 2 weeks to implement and test.

## Contributions

- d2e2b: I worked on leveraging the Google Maps API on the home page, using redux to manage the map state. I created resuable components such as cards and page headings. Also, I spent time researching many websites for UX design and implemented what I found into our application and added animations to all the components and made the header mobile friendly on many different screen sizes.
- e5c0b:
  My contribution to automated deployment to Heroku will detect pushes from our final_project branch and deploy it using the scripts in the root folder's package.json and Procfile and static.json.
  Additionally, I set up eslint and prettier; eslint and prettier will underline any broken rules that I have defined in .eslintrc.json and prettierc will enforce code styles defined in .prettierrc file.
  Lastly, I completed the Reopening data and Symtom Checkers's redux and diagnosis.
- k0b0b: I worked on Google OAuth Logins (i.e., filtering valid users, persisting login status in session storage), Admin functionalities (i.e., insertion and deletion of trace/outbreak data), Q&A page, Styling assist, MongoDB set-up and data generation, and Traceify Intro Youtube video.
- l0y2b: I designed the Thank you Modal page as our welcome page. My main work is the Have-I-been-Exposed page. I used PUT request to query data from our database using date and places got from front-end. Then presented the result to user. I also helped design and style responsive components of Symptom Checker and Reopening page.
