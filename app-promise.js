
const yargs = require("yargs");
const axios = require("axios");
//


const wear = require("./to-do/to-do.js");


const argv = yargs
.options({
    a: {
      demand: true,
      alias: "address",
      describe: "Address to fetch weather for",
      string: true,
      default: 91744
    }
}).help()
.alias("help", "h")
.argv;


  const encodeWithQuestionMark = encodeURIComponent(argv.address);
  const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeWithQuestionMark}&key=AIzaSyAZWx8GUaGpfrczNReFQQuXfeXo2R0MZEw`;


  axios.get(geocodeUrl).then((response)=> {
     if (response.data.status === "ZERO_RESULTS") {
         throw new Error ("Unable to find that address.");
     }


     const lat = response.data.results[0].geometry.location.lat;
     const lng = response.data.results[0].geometry.location.lng;
     const weatherURL = `https://api.darksky.net/forecast/0e3bfbc189da5a0b0da5bfecc60c73da/${lat},${lng}`;


     return axios.get(weatherURL)

  }).then((response)=> {

      wear.whatToWear(response.data.currently)



  }).catch((error)=> {
      if (error.code === "ENOTFOUND") {
        console.log("Unable to connect to api servers")
      } else {
        console.log(error.message)
      }

  });
