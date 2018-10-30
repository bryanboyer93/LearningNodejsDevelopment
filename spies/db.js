// start with ./ because it is a local file
var db = require('./db.js')

module.exports.saveUser = (user) => {
    console.log(`Saving the user: ${user}`);
};

module.exports.handleSignup = (email, password) => {
// Check if email already exists
db.saveUser( {
    email: email,
    password: password
    // same as: 
    // email,
    // password
    // ES6 - if they have the same name there is no need to have the propertyName: value
});
// Send the welcome email
};