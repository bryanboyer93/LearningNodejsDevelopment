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
    console.log(response.data);
  });