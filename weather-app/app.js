const request = require('request');
const yargs = require('yargs');
const geocode = require('./geocode/geocode.js');


const argv = yargs
  .options( {
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

  // console.log(argv);

var encodedAddress = encodeURIComponent(argv.address); // can also use argv.a
var API_KEY = 'AIzaSyB9c2sRN0T2AVtXLCCoCf4tjVUsfIE7CVE';

request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${API_KEY}`,
    json: true
    // you can access the body from response.body as well
  }, (error, response, body) => {
    if (error) {
      console.log('Unable to connect to Google Servers');
    } else if (body.status === 'ZERO_RESULTS') {
      console.log ('Unable to find that address');
    } else if ( body.status === 'OK'){
        
        console.log(`Address: ${body.results[0].formatted_address}`);
        console.log(`Latitude: ${body.results[0].geometry.location.lat}`)
        console.log(`Longitude: ${body.results[0].geometry.location.lng}`)
    }
  });
//will not work properly under lilly proxy