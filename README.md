
# Application Documentation: COVID Data Visualization and Contact Management

This documentation provides an overview and usage instructions for the COVID Data Visualization and Contact Management application. The application allows users to visualize COVID-19 cases data using line graph and a Leaflet map, as well as manage contacts with basic information such as first name, last name, and status (active/inactive). The application utilizes technologies such as Redux for contact data management, React Query for data fetching, React Leaflet for map rendering, and Chart.js for chart visualization.

  

## Features

### 1. COVID-19 Data Visualization

  

 - Line Graph: The application fetches COVID-19 historical cases data
   from an external API and displays it using a line graph. The line
   graph showcases the fluctuation of cases over time, including the
   number of cases, deaths, and recoveries.
 - Leaflet Map: The application utilizes the Leaflet library to render
   an interactive map with markers representing COVID-19 data for
   different regions or countries.

### 2. Contact Management

 - Contact Form: Users can add new contacts by providing their first   
   name, last name, and status (active/inactive). The form allows users 
   to enter contact information and submit it for storage and display.
 - Contact List: The application displays a list of all contacts entered
   by the user. The list includes the first name, last name, and status 
   of each contact.
   
## API Documentation: COVID-19 Data Endpoints

This API documentation provides details about the COVID-19 data endpoints used in the application. These endpoints provide country-specific data on COVID-19 cases and historical graph data for cases with dates. The endpoints are accessed using the following URLs:

### Country Specific Data of Cases

URL: `https://disease.sh/v3/covid-19/countries`

This endpoint provides country-specific data on COVID-19 cases. By making a GET request to this endpoint, you can retrieve an array of objects containing information about COVID-19 cases for each country. Each object in the array represents a specific country and includes data such as the country name, total cases, deaths, recovered cases, and more.

**Example Response:**

    [
      {
        "updated": 1686631713075,
        "country": "Afghanistan",
        "countryInfo": {
            "_id": 4,
            "iso2": "AF",
            "iso3": "AFG",
            "lat": 33,
            "long": 65,
            "flag": "https://disease.sh/assets/img/flags/af.png"
        },
        "cases": 222647,
        "todayCases": 0,
        "deaths": 7920,
        "todayDeaths": 0,
        "recovered": 200802,
        "todayRecovered": 0,
        "active": 13925,
        "critical": 45,
        "casesPerOneMillion": 5463,
        "deathsPerOneMillion": 194,
        "tests": 1268840,
        "testsPerOneMillion": 31134,
        "population": 40754388,
        "continent": "Asia",
        "oneCasePerPeople": 183,
        "oneDeathPerPeople": 5146,
        "oneTestPerPeople": 32,
        "activePerOneMillion": 341.68,
        "recoveredPerOneMillion": 4927.13,
        "criticalPerOneMillion": 1.1
      },
      {
        "updated": 1686631713075,
        "country": "United States",
        "countryInfo": {
            "_id": 1,
            "iso2": "US",
            "iso3": "USA",
            "lat": 38,
            "long": -97,
            "flag": "https://disease.sh/assets/img/flags/us.png"
        },
        "cases": 1000000,
        "todayCases": 100,
        "deaths": 50000,
        "todayDeaths": 10,
        "recovered": 750000,
        "todayRecovered": 50,
        "active": 175000,
        "critical": 500,
        "casesPerOneMillion": 3000,
        "deathsPerOneMillion": 150,
        "tests": 10000000,
        "testsPerOneMillion": 50000,
        "population": 330000000,
        "continent": "North America",
        "oneCasePerPeople": 330,
        "oneDeathPerPeople": 6600,
        "oneTestPerPeople": 33,
        "activePerOneMillion": 530.3,
        "recoveredPerOneMillion": 2272.72,
        "criticalPerOneMillion": 1.51
      },
      ...
    ]

### Graph Data for Cases with Date

URL: `https://disease.sh/v3/covid-19/historical/all?lastdays=all`

This endpoint provides historical graph data for COVID-19 cases with dates. By making a GET request to this endpoint, you can retrieve an object containing historical data for cases, deaths, and recoveries. The data is represented in a date-wise format, allowing you to track the progression of COVID-19 over time.

**Example Response:**

    {
      "cases": {
        "3/1/23": 675542852,
        "3/2/23": 675731911,
        "3/3/23": 675914580,
        ...
      },
      "deaths": {
        "3/1/23": 6874463,
        "3/2/23": 6876031,
        "3/3/23": 6877325,
        ...
      },
      "recovered": {
        "3/1/23": 0,
        "3/2/23": 0,
        "3/3/23": 0,
        ...
      }
    }

Please note that the example responses provided are for demonstration purposes only, and the actual data may vary.

I hope this API documentation helps you understand the purpose and usage of the COVID-19 data endpoints used in the application.

## Technologies Used

The COVID Data Visualization and Contact Management application is built using the following technologies:

 - **React:** A JavaScript library for building user interfaces.
 - **Create React App:** A tool for bootstrapping React applications with a
   predefined project structure.
 - **Tailwind CSS:** A utility-first CSS framework for styling user
   interfaces.
 - **TypeScript:** A statically typed superset of JavaScript that helps
   catch errors and provides better tooling for code development.
 - **Redux Toolkit:** A library that simplifies Redux development by providing utility functions and best practices.
 - **React Query:** A library for data fetching and caching in React
   applications.
 - **Chart.js:** A JavaScript library for creating interactive charts and
   graphs.
 - **React Leaflet:** A library that integrates Leaflet maps into React
   applications.

## Running the Application

To run the COVID Data Visualization and Contact Management application locally, follow these steps:

 1. Clone the project repository from GitHub: git clone <https://github.com/hritikb27/ContactManagement>
 2. Navigate to the project directory: `cd ContactManagement`
 3. Install the project dependencies: `npm install`
 4. Start the development server: `npm start`
 5. Open a web browser and visit http://localhost:3000 to access the
    application.

## Conclusion

The COVID Data Visualization and Contact Management application provides users with an interactive way to visualize COVID-19 cases data using line graphs and a Leaflet map. Additionally, users can manage their contacts by adding new contacts and viewing the contact list. The application leverages technologies such as Redux, React Query, React Leaflet, and Chart.js to provide a seamless user experience.

I hope this documentation helps you understand and use the application effectively. If you have any further questions or issues, please don't hesitate to reach out for support.