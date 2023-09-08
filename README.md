# Country Weather Plugin  

<br>
This React application utilizes the Leaflet library to display a map with markers representing different cities. When you click on a marker, it provides you with real-time weather information for that city.


## ⚡ Installation

Follow these steps to set up and run the application:

1. Clone this repository to your local machine.
    git clone https://github.com/massoudmassoudi/CountryWeatherPlugin.git

2. Change into the project directory.
    cd CountryWeatherPlugin

3. Install the project dependencies using npm or yarn.
    npm install
or
    yarn install

4. Once you have installed the dependencies, you can run the application locally with the following command:
    npm start
or
    yarn start

This command will start the development server and open the application in your default web browser. You can access it at http://localhost:3000.


## ✨ Features

The map displays markers for various cities in India.
When you click on a marker, a popup appears with real-time weather data for that city.
Weather data is retrieved from the OpenWeatherMap API.
The application uses custom marker icons to distinguish cities.

## 🔑 API Configuration
To fetch real weather data, the application uses the OpenWeatherMap API. You'll need to obtain an API key from OpenWeatherMap and configure it in the WeatherComponent.js file.

const apiKey = "YOUR_OPENWEATHERMAP_API_KEY";

## 📙 Dependencies

This project depends on the following libraries and resources:

React: A JavaScript library for building user interfaces.<br/>
Leaflet: An open-source JavaScript library for creating interactive maps.<br/>
Axios: A promise-based HTTP client for making API requests to get real weather data.<br/>
react-icons: A library of customizable icons for React applications.<br/>
