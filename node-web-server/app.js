const express = require ('express');

var app = express();

// Requires 2 arguments (url, function to run which is what to send back to the person who made the request)
app.get('/', (req,res) => {
    res.send('Hello Express!');
});

app.listen(3000);