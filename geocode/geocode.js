const request = require("request");

const makeAddress = (input, callback) => {

  const encodeWithQuestionMark = encodeURIComponent(input);
request({
 url: `https://maps.googleapis.com/maps/api/geocode/0e3bfbc189da5a0b0da5bfecc60c73da/json?address=${encodeWithQuestionMark}`,
 json: true

}, (error, response, body)=> {

   if (error) {
       callback("Unable to connect to Google servers");
   }else if (body.status === "ZERO_RESULTS") {
       callback("Unable to find that address");
   } else if (body.status === "OK") {
     callback(undefined, {
        address: body.results[0].formatted_address,
        lattitude: body.results[0].geometry.location.lat,
        longitude: body.results[0].geometry.location.lng
     });

   }
})
}

module.exports.makeAddress = makeAddress;
