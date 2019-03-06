const request = require("request");

const getForecast = (lat, lng, callback) => {
  const url = `https://api.darksky.net/forecast/0e3bfbc189da5a0b0da5bfecc60c73da/${lat},${lng}`;
  request({
     url,
    json: true
  }, (error, { body })=> {
     if(error){
      callback("There was an error connecting to DarkSky");
    }else if(body.error) {
      callback("Unable to find location");
    } else {
      callback(null, {
        summary: body.daily.data[0].summary,
        currentTemp: body.currently.apparentTemperature,
        precipProbability: body.currently.precipProbability
      })
    }
  });
}

module.exports = getForecast;
