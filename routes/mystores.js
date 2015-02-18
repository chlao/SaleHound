var stores = require('../stores.json');
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

	function displayStores(err, mystores){
		console.log(stores);
		res.render('index', {'mystores': mystores});
	}
};