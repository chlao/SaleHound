'use strict';
var statik = require('statik');
var server = statik.createServer('.');
server.listen();

var express = require('/node-modules/express'),
var exphbs  = require('/node-modules/express3-handlebars'),

app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home');
});

app.listen(3000);