
const yargs = require("yargs");
const axios = require("axios");



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
  const api_key = "DZz1ctMkfQw4h1Z8oues7E9Bbho3rGPC";
  const geocodeUrl = `http://www.mapquestapi.com/geocoding/v1/address?key=${api_key}&location=${encodeWithQuestionMark}`;

  axios.get(geocodeUrl).then((response)=> {
      const lng = response.data.results[0].locations[0].displayLatLng.lng;
     const lat = response.data.results[0].locations[0].displayLatLng.lat;

     const weatherURL = `https://api.darksky.net/forecast/61a25768875673d685669fff4010cc5f/${lat},${lng}`;

      return axios.get(weatherURL);

   }).then((response)=> {
     const currentTemp = response.data.currently.apparentTemperature;
     console.log(`The current temperature: ${currentTemp}`);
   }).catch((error)=> {
      if (error.code === "ENOTFOUND") {
        console.log("Unable to connect to api servers")
      } else {
        console.log(error.message)
      }

  });
