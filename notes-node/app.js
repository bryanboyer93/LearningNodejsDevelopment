console.log('Starting app.js');

const fs = require('fs');
// const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

// console.log('Result:', notes.add(9, -2));



// lodash isString()
// console.log(_.isString(true));
// console.log(_.isString('Gary'));

// lodash uniqu()
// var testArray = ['Adam', 1, 'Gary', 1, 2, 3, 4,'Gary'];
// console.log(`Before _.uniq(): ${testArray}`);
// var filteredArray = _.uniq(testArray);
// console.log(`After _.uniq(): ${filteredArray}`);

// var user = os.userInfo();
// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`, (err) => {
//     if (err) throw err;
//     // console.log('The "data to append" was appended to the file!');
// });