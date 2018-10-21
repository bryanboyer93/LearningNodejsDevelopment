const express = require('express');
const hbs = require('hbs');

var app = express();

app.set('view engine', 'hbs'); 
// __dirname stores the path to the project directory
app.use(express.static(__dirname + '/public'))

// Requires 2 arguments (url, function to run which is what to send back to the person who made the request)
app.get('/', (req, res) => {
    // res.send('<h1>Hello Express!</h1>');
    res.send({
        name: 'Andrew',
        likes: [
            'biking',
            'cities',
            'movies'
        ]
    });
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

app.get('/bad', (req, res) => {
    res.send({
        error: 'Unable to handle request'
    });
})

app.listen(3000, () => console.log('server is up on port 3000'));