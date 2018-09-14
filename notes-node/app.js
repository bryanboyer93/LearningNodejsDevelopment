console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

// yargs.argv is where yargs stores its version of the arguments that the app ran with
const argv = yargs.argv;
var command = argv._[0];
console.log(`Command: ${command}`);
console.log('Yargs', argv);

switch (command) {
    case 'add' :
        var note = notes.addNote(argv.title, argv.body);
        if (note) 
            console.log(`Note Created, Title: ${note.title} - Body: ${note.body}`);
        else
            console.log('Note title taken');
        break;
    case 'list' :
        notes.getAll();
        break;
    case 'read' :
        notes.getNote(argv.title);
        break;
    case 'remove' :
        notes.removeNote(argv.title);
        break;
    default :
        console.log ('Invalid command');
        break;
}









// --------------------------------------------------------------

// const os = require('os');

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

// Modules installed: yargs, no