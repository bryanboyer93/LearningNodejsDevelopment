const request = require('request');

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia&key=AIzaSyB9c2sRN0T2AVtXLCCoCf4tjVUsfIE7CVE',
    json: true
    // you can access the body from response.body as well
  }, (error, response, body) => {
      //   console.log(body);
      // console.log(JSON.stringify(body, undefined, 2));
      // To print json object in a pretty way
      // JSON.stringify(body, filter, spacesPerIndentationk)
      //console.log(body.results);
      console.log(`Address: ${body.results[0].formatted_address}`);
      console.log(`Latitude: ${body.results[0].geometry.location.lat}`)
      console.log(`Longitude: ${body.results[0].geometry.location.lng}`)
      
  });

//will not work properly under lilly proxy