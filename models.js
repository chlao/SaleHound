var Mongoose = require('mongoose');

var SaleSchema = new Mongoose.Schema({
	"id": Number,
	"store": String,
	"description": String, 
	"imageURL": String,
	"watched": Boolean
});

exports.Sale = Mongoose.model('Sale', SaleSchema); 

var StoreSchema = new Mongoose.Schema({
	"id": Number,
	"name": String, 
	"imageURL": String,
	"subscribed": Boolean
}); 

exports.Store = Mongoose.model('Store', StoreSchema);
