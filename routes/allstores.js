//var allstores = require('../allstores.json');
var models = require('../models');

exports.view = function(req, res){
	models.Store
		.find()
		.exec(displayStores);

	function displayStores(err, stores){
		//console.log(allstores);
		res.render('allstores', {'stores': stores});
	}
}

exports.subscribe = function(req, res){
	var storeID = req.params.id;
	console.log(storeID + "subscribe in allstores");

	models.Store
		.find({"id": storeID})
		.update({_id: storeID}, {$set:{subscribed:1}})
		//.update({"subscribed":0},{$set:{"subscribed":1}})
		.exec(afterSub);

	//console.log(allstores);

	function afterSub(err){
		res.send();
	}
}
