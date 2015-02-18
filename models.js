var Mongoose = require('mongoose');

var SaleSchema = new Mongoose.Schema({
	"store": String,
	"description": String, 
	"imageURL": String
});

exports.Sale = Mongoose.model('Sale', SaleSchema); 

var MyStoresSchema = new Mongoose.Schema({
	"name": String, 
	"imageURL": String
}); 

exports.MyStores = Mongoose.model('MyStores', MyStoresSchema);
