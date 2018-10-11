const request = require('request');
const geocode = require('../geocode/geocode');

const API_KEY = '0074ee9810e6613935fcd0e4b1879c82';

var getWeather = (lat, lng, callback) => {
    request( {
        url: `https://api.forecast.io/forecast/4a04d1c42fd9d32c97a2c291a32d5e2d/39.9396284,-75.18663959999999`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Unable to connect to Forecast.io server.');
        }
        else if (response.statusCode === 400) {
            callback('Unable to fetch weather.');
        }
        else if (response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        }
    });
};

module.exports.getWeather = getWeather;