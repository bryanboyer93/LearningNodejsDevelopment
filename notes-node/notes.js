const fs = require('fs');

console.log('Starting notes.js');



var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    }

    // var duplicateNotes = notes.filter( (note) => {
    //     return note.title === title;
    // });

    //Arrow functions actually allow you to remove the curly 
    // braces if you only have one statement.
    // filter takes a function that will be applied to each array element
    // if the function applied to that element returns true, that
    // element will be included in the filter and added to the new Array
    var duplicateNotes = notes.filter((notesElement) => notesElement.title === title);

    // same as the line above.
    // Side note: title is the function parameter
    // var duplicateNotes = notes.filter (function (notesElement) {
    //     if (notesElement.title === title)
    //         return true;
    //     else
    //         return false;
    // })

    

    if (duplicateNotes.length === 0) {
        // Adds an element to the end of the array
        notes.push(note);
        saveNotes(notes);
        return(note);
    }
    // else {
    //     console.log(`The note title "${duplicateNotes[0].title}" already exists`);
    // }



}

var getAll = () => {
    console.log('Getting all notes');
}

var getNote = (title) => {
    console.log('Getting note', title);
}

var removeNote = (title) => {
    // fetch notes
    // filter notes, removing the one with title of argument
    // save new notes array

    var notes = fetchNotes();
    // filter notes, removing the one with title of argument
    var filteredNotes = notes.filter ( (notesElement) => notesElement.title !== title);
    // save new notes array
    if (filteredNotes.length === notes.length)
        console.log(`Note with title "${title}" not found`);
    else {
        console.log(`Note with title "${title}" removed`);
        saveNotes(filteredNotes);
        
    }
}

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    }
    catch (e) {
        return [];
    }
}

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
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