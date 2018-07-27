

const whatToWear = (temp) => {
    console.log(`Summary: ${temp.summary}`)
    console.log(`Temperature: ${temp.temperature}`);
    console.log(`Humidity: ${temp.humidity}`);
    console.log(`If you're flying a plane or steering a boat visibility: ${temp.visibility}`);
    console.log(``);

}


module.exports.whatToWear = whatToWear;
