const fs = require('fs');

var obj = {
    name: 'Andrew'
};

var originalNote = {
    title: 'Some title',
    body: 'Some body'
};

var stringObj = JSON.stringify(obj);
console.log(typeof stringObj);
console.log(stringObj);

var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var personString = '{"name" : "Andrew", "age": 25}';
var person = JSON.parse(personString);
console.log(typeof person);
console.log(person);
