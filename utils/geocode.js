const request = require("request");

const geoCode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoiZXF1ZXNhZGE4NiIsImEiOiJjanN2dHlvbjEwYXRkNDRvYnA5ZGkwYnI5In0.Q3Jih4ElofJEtIc49mypZw&limit=1`;
   request({
     url,
     json: true
   }, (error, { body })=> {
      if(error) {
        callback(`Unable to connect to location services`)
      }else if(!body.features.length) {
        callback("Unable to find location");
      }else {
        callback(error, {
         latitude: body.features[0].center[1],
         longitude: body.features[0].center[0],
         location: body.features[0].place_name
    });


   }
})
}


module.exports = geoCode;
