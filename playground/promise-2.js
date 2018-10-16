const request = require ('request');

var geocodeAddress = (address) => {
    return new Promise ( (resolve, reject) => {
    var encodedAddress = encodeURIComponent(address);
    var API_KEY = 'AIzaSyB9c2sRN0T2AVtXLCCoCf4tjVUsfIE7CVE';

    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${API_KEY}`,
        json: true
        // you can access the body from response.body as well
    }, (error, response, body) => {
        if (error) {
            reject('Unable to connect Google servers.');
        } else if (body.status === 'ZERO_RESULTS') {
            reject('Unable to find that address.');
        } else if (body.status === 'OK') {
            resolve({
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            });
        }
    });
    });
};

geocodeAddress('46237').then( 
    (location) => {
        console.log(JSON.stringify(location, undefined, 2));
    }, 
    (errorMessage) => {
        console.log(errorMessage);
    }
);