const request = require("request");
const geoCode = require("./utils/geocode");
const forecast = require("./utils/forecast");
const chalk = require("chalk");

const userLocation = process.argv[2] || "90631";


geoCode(userLocation, (error, {latitude, longitude, location}) => {
  if (error) {
    console.log(error)
  } else {
    forecast(latitude, longitude, (error, forecastData)=> {
      if(error) {
        console.log(error);
      } else {
      console.log(chalk.inverse.cyan(location));
      console.log(forecastData);
      }

    });
  }

});
