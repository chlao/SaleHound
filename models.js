var Mongoose = require('mongoose');
/*
var SaleSchema = new Mongoose.Schema({
	"store": String,
	"description": String, 
	"imageURL": String,
	"watched": Boolean
});

exports.Sale = Mongoose.model('Sale', SaleSchema); 
*/
var StoreSchema = new Mongoose.Schema({
	"name": String, 
	"imageURL": String,
	"subscribed": Boolean,
	"sales": [{
		"imageURL": String,
		"description": String, 
		"watched": Boolean
	}]
}); 

exports.Store = Mongoose.model('Store', StoreSchema);
