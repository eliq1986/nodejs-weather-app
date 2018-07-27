
const yargs = require("yargs");
const geocode = require("./geocode/geocode.js");
const apiKey = "0e3bfbc189da5a0b0da5bfecc60c73da";
const weather = require("./weath/weather.js");


const argv = yargs
.options({
    a: {
      demand: true,
      alias: "address",
      describe: "Address to fetch weather for",
      string: true
    }
}).help()
.alias("help", "h")
.argv;


const address = argv.a;


geocode.makeAddress(address, (errorMessage, results) => {
        if (errorMessage) {
          console.log(errorMessage);
        }else {
           console.log(results.address)
           console.log(results)

          weather.getWeather(results.lattitude, results.longitude, (error, results) => {
                  if (error) {
                    console.log(error);
                  } else {
                    let res = JSON.stringify(results, undefined, 2);
                    res = JSON.parse(res);
                    console.log(`The actual temperature is ${res.actualTemp} but the thermometer lies because it states its ${res.temp}`)

                  }

          });


        }

});
