var allstores = require('../allstores.json');
var models = require('../models');

exports.view = function(req, res){
	models.Store
		.find()
		.exec(displayStores);

	function displayStores(err, stores){
		console.log(stores);
		res.render('allstores', {'allstores': allstores});
	}
}

exports.subscribe = function(req, res){
	var storeID = req.params.id;
	console.log("asd");

	models.Store
		.find({"id": storeID})
		.update({"subscribed":0},{$set:{"subscribed":1}})
		.exec(afterSub);

	function afterSub(err){
		res.send();
	}
}
