const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
  .options({
    address: {
      demand: true,
      alias: 'a',
      describe: 'Address to fetch weather for'
      // string: true //parses argument as a string
    }
  })
  .help()
  .alias('help', 'h') // two arguments, argument, alias
  .argv; // takes config, runs it through args, then restores the result in the argv variable

var encodedAddress = encodeURIComponent(argv.address); // can also use argv.a
var API_KEY = 'AIzaSyB9c2sRN0T2AVtXLCCoCf4tjVUsfIE7CVE';
var geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${API_KEY}`;

//console.log(geocodeURL);
axios.get(geocodeURL)
  .then ( (response) => {
    // console.log(response.data);
    if (response.data.status === 'ZERO_RESULTS')
      throw new Error('Unable to find that address.');
    else if (response.data.status === 'INVALID_REQUEST')
      throw new Error('Missing arguments');
    else if (response.data.status === 'OK') {
      var lat = response.data.results[0].geometry.location.lat;
      var lng = response.data.results[0].geometry.location.lng;
      var weatherUrl = `https://api.forecast.io/forecast/4a04d1c42fd9d32c97a2c291a32d5e2d/${lat},${lng}`;
      // console.log (response.data.results[0].formatted_address);
      return axios.get(weatherUrl);
    }
  })
  .then( (response) => {
    var temperature = response.data.currently.temperature;
    var apparentTemperature = response.data.currently.apparentTemperature;
    console.log(`It's currently ${temperature}F. The real feel temperature is ${apparentTemperature}F`)
  })
  .catch ( (e) => {
    if (e.code === 'ECONNRESET') {
      console.log('ERROR: Couldn\'t connect to google servers.');
    }
    else {
      console.log(e.message);
    }
  });