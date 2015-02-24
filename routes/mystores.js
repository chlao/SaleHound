var allstores = require('../allstores.json');
var models = require('../models');

exports.view = function(req, res){
	models.Store
		.find()
		.exec(displayStores);

	function displayStores(err, stores){
		res.render('mystores', {'allstores': allstores});
	}
}

exports.unsubscribe = function(req, res){
	var storeID = req.params.id;
	console.log(storeID);

	models.Store
		.find({"id": storeID})
		.update({"subscribed":1},{$set:{"subscribed":0}})
		.exec(afterSub);

	function afterSub(err){
		res.send();
	}
}