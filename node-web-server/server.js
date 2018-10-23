const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');


app.use((req, res, next) => {
    var now = new Date().toString();
    var log = `${now}: ${req.method} ${req.url}`;

    console.log(log);
    fs.appendFile('server.log', log + '\n', (err) => {
        if (err) {
            console.log(err);
        }
    });
    next();
});

app.use((req, res, next) => {
    res.render('maintenance.hbs');
});

// __dirname stores the path to the project directory
app.use(express.static(__dirname + '/public'));



hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('screamIt', function (text) {
    return text.toUpperCase();
});

hbs.registerHelper('lowerIt', (text) => {
    return text.toLowerCase();
});

// Requires 2 arguments (url, function to run which is what to send back to the person who made the request)
app.get('/', (req, res) => {
    // res.send('<h1>Hello Express!</h1>');
    res.render('home.hbs', {
        pageTitle: 'home',
        welcomeMessage: 'Welcome to my home page'
        // currentYear: new Date().getFullYear();
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page',
        welcome: 'Welcome to my about page'
        // currentYear: new Date().getFullYear()
    });
});
app.get('/bad', (req, res) => {
    res.send({
        error: 'Unable to handle request'
    });
})

app.listen(8080, () => console.log('server is up on port 8080'));