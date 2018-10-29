const express = require('express');

var app = express();

app.get('/', (req,res) => {

    // res.status(200).send('Hello World!');
    res.status(404).send( {
        error:'Page not found',
        name:'Todo App v1.0'
    });
});


// GET /users
// Give user a name property and age property

app.get('/users', (req,res) => {
    res.send([
        { name: 'bryan', age: 25 },
        { name: 'user2', age: 2 },
        { name: 'user3', age: 3}
    ])
});


app.listen(3000);
module.exports.app = app;