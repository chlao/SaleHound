/*
  This script will initialize a local Mongo database
  on your machine so you can do development work.

  IMPORTANT: You should make sure the

      local_database_name

  variable matches its value in app.js  Otherwise, you'll have
  initialized the wrong database.
*/

var mongoose = require('mongoose');
var models   = require('./models');

// Connect to the Mongo database, whether locally or on Heroku
// MAKE SURE TO CHANGE THE NAME FROM 'lab7' TO ... IN OTHER PROJECTS
var local_database_name = 'salehound';
var local_database_uri  = 'mongodb://localhost/' + local_database_name
var database_uri = process.env.MONGOLAB_URI || local_database_uri
mongoose.connect(database_uri);

// Do the initialization here

// Step 1: load the JSON data
//var user_json = require('./user.json');
/*
var sales_json = require('./sales.json').sales;

// Step 2: Remove all existing documents
models.Sale 
  .find()
  .remove()
  .exec(onceClear); // callback to continue at

// Step 3: load the data from the JSON file
function onceClear(err) {
  if(err) console.log(err);
  // loop over the projects, construct and save an object from each one
  // Note that we don't care what order these saves are happening in...
  var to_save_count = sales_json.length;
  for(var i=0; i<sales_json.length; i++) {
    var json = sales_json[i];
    var sale = new models.Sale(json);

    sale.save(function(err, sale) {
      if(err) console.log(err);

      to_save_count--;
      console.log(to_save_count + ' left to save');
      if(to_save_count <= 0) {
        console.log('DONE');
        // The script won't terminate until the 
        // connection to the database is closed
        //mongoose.connection.close()
      }
    });
  }
}
*/

var mystores_json = require('./allstores.json').stores; 

models.Store
  .find()
  .remove()
  .exec(onceClearMyStores);

function onceClearMyStores(err){
  if(err) console.log(err);
  // loop over the projects, construct and save an object from each one
  // Note that we don't care what order these saves are happening in...
  var to_save_count = mystores_json.length;
  for(var i=0; i<mystores_json.length; i++) {
    var json = mystores_json[i];
    var mystore = new models.Store(json);

    mystore.save(function(err, mystore) {
      if(err) console.log(err);

      to_save_count--;
      console.log(to_save_count + ' left to save');
      if(to_save_count <= 0) {
        console.log('DONE');
        // The script won't terminate until the 
        // connection to the database is closed
        mongoose.connection.close()
      }
    });
  }  
} 



