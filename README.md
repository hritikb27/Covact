
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