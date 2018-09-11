console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require ('./notes.js');

console.log('Result:', notes.add( 9,-2));

var user = os.userInfo();
fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`, (err) => {
    if (err) throw err;
    // console.log('The "data to append" was appended to the file!');
});