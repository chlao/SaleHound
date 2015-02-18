//var stores = require('../stores.json');
/*
exports.view = function(req, res){
	res.render('mystores', stores);
};
*/

var models = require('../models'); 

exports.view = function(req, res){
	models.MyStores
		.find()
		.exec(displayStores); 

	function displayStores(err, stores){
		console.log(stores); 
		res.render('mystores', {'stores': stores});
	}
};