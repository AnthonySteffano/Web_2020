var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

require('./db/MongoDBConn')//conecta com o mongo

var users = require('./routes/users');
var disciplinas = require('./routes/DisciplinaRoutes')

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.use('/api/v1/users', users);
app.use('/disciplinas',disciplinas)

module.exports = app;
