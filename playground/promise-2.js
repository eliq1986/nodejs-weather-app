const request = require("request");

const geocodeAddress = (input) => {
    return new Promise((resolve, reject) => {

    const encodeWithQuestionMark = encodeURIComponent(input);
     request({
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeWithQuestionMark}`,
      json: true

     }, (error, response, body)=> {

        if (error) {
            reject("Unable to connect to Google servers");
        }else if (body.status === "ZERO_RESULTS") {
            reject("Unable to find that address");
        } else if (body.status === "OK") {
          resolve({
             address: body.results[0].formatted_address,
             lattitude: body.results[0].geometry.location.lat,
             longitude: body.results[0].geometry.location.lng
          });

            }
         })
     })
}


geocodeAddress("91748").then((location)=> {
  console.log(location);

}, (error)=> {
   console.log(error)

});





module.exports.makeAddress = geocodeAddress;
