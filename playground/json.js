const fs = require('fs');

var originalNote = {
    title: 'Some title',
    body: 'Some body'
};

var originalNoteString = JSON.stringify(originalNote);

// Two arguments: filename.xxxx, textContent
fs.writeFileSync('notes.json', originalNoteString);


var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);

















// console.log (originalNote.title);
// var personString = '{"name" : "Andrew", "age": 25}';
// var person = JSON.parse(personString);
// var obj = {
//     name: 'Andrew'cls

// };
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// console.log(typeof person);
// console.log(person);
