console.log('Starting notes.js');

var addNote = (title,body) => {
    console.log('Adding note',title, body);
}

var getAll = () => {
    console.log('Getting all notes');
}

var getNote = (title) => {
    console.log('Getting note', title);
}

var removeNote = (title) => {
    console.log(`Removing note: ${title}`);
}

module.exports = {
    addNote: addNote,
    getAll: getAll,
    getNote: getNote,
    removeNote
    // if name and function are the same
    // addNote,
    // getAll
    // Remember that in ES6, if you have a property whose name is identical to the value, which is a variable, you can simply remove the value variable and the colon.

}

// module.exports.add = (a,b) => {
//     return a+b;
// }

// module.exports.age = 25;