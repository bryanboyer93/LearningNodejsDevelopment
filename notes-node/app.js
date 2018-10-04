// console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');
const titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
};
const bodyOptions = {
    describe: 'Body of note',
    demand: true,
    alias: 'b'
};
// yargs.argv is where yargs stores its version of the arguments that the app ran with
const argv = yargs
    .command('add', 'Add a new note', {
        title: titleOptions,
        body: bodyOptions
    })
    .command('list','List all notes')
    .command('read','Read a note', {
        title: titleOptions
    }) 
    .command('remove', 'Remove a note', {
        title: titleOptions
    })
    .help()
    .argv;
    
var command = argv._[0];
// console.log(`Command: ${command}`);
// console.log('Yargs', argv);

switch (command) {
    case 'add' :
        var note = notes.addNote(argv.title, argv.body);
        if (note) 
            notes.logNote(note);
        else
            console.log('Note title taken');
        break;
    case 'list' :
        var allNotes = notes.getAll();
        console.log(`Printing ${allNotes.length} note(s). `);
        
        allNotes.forEach( (note) => notes.logNote(note));

        // Not simplified version
        // allNotes.foreach((element) => {
        //     notes.logNote(element)
        // });

        // not using arrow function
        // allNotes.foreach ( function (note) {
        //     notes.logNote(note);
        // });
        break;
    case 'read' :
        // notes.getNote(argv.title);
        var note = notes.getNote(argv.title);
        if (note === undefined)
            console.log('note not found');
        else
            notes.logNote(note);
        
        // Same functionality but not using undefined data type
        // if (note) console.log(`Title: ${note.title} Body: ${note.body}`);
        // else console.log('Note not found');

        break;
    case 'remove' :
        var noteRemoved = notes.removeNote(argv.title);
        var message = noteRemoved ? 'Note was removed' : 'Note not found';
        console.log (message);
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