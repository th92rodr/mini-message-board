const express = require('express');
const bodyparser = require('body-parser');
const handlebars = require('express-handlebars');
const path = require('path');

const routes = require('./routes');

// initialize an express app
const app = express();

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

// Handlebars Template Engine configuration
app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'handlebars');

app.use('/', routes);

module.exports = app;
