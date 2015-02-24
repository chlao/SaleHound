//var allstores = require('../allstores.json');
// This is relying on json file for some reason
var models = require('../models');

exports.view = function(req, res){
	models.Store
		.find()
		.exec(displayStores);

	function displayStores(err, stores){
		res.render('mystores', {'stores': stores});
	}
}

exports.unsubscribe = function(req, res){
	var storeID = req.params.id;
	console.log(storeID + "unsubscribe in mystores");

	models.Store
		.find({"_id": storeID})
		.update({_id: storeID}, {$set:{subscribed:0}})
		//.update({"subscribed":1},{$set:{"subscribed":0}})
		.exec(afterSub);

	function afterSub(err){
		res.send();
	}
}