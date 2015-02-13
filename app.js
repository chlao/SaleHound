/*
'use strict';
var statik = require('statik');
var server = statik.createServer('.');
server.listen();
*/

/**
 * Module dependencies.
 */
var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

//These are javascript files 
var index = require('./routes/index');
var account = require('./routes/account'); 
var mystores = require('./routes/mystores'); 
var allstores = require('./routes/allstores'); 
var salewatch = require('./routes/salewatch'); 
var help = require('./routes/help'); 
//var stick = require('./public/js/sticky/jquery.sticky'); 
// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
//'\' registers the URL localhost:3000/ 
// call the project.viewProject()  function when that URL is requested
app.get('/', index.view); 
app.get('/account', account.view); 
app.get('/mystores', mystores.view); 
app.get('/allstores', allstores.view); 
app.get('/salewatch', salewatch.view); 
app.get('/help', help.view); 
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
