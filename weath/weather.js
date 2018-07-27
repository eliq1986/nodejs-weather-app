const request = require("request");


const getWeather = (lat, lng, callback) => {

request({
  url: `https://api.darksky.net/forecast/0e3bfbc189da5a0b0da5bfecc60c73da/${lat},${lng}`,
  json: true

}, (error, response, body) => {

    if (!error && response.statusCode === 200) {
       
       callback(undefined, {
            actualTemp: body.currently.apparentTemperature,
            temp: body.currently.temperature
       })
    } else if (response.statusCode !== 200) {
        callback("Problem with server");
    }
})


}
module.exports.getWeather = getWeather;
