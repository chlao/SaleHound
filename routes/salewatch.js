var salewatch = require('../sales.json');
var models = require('../models'); 

exports.view = function(req, res){
	//res.render('salewatch', salewatch);
	models.Sale
		.find()
		.exec(displaySales);

	function displaySales(err, sales){
		console.log(sales);
		res.render('salewatch', {'sales': sales});
	}
}

exports.unwatchSale = function(req, res){
	var saleID = req.params.id;

	models.Sale
		.find({"id": saleID})
		.update({"watched":1},{$set:{"watched":0}})
		.exec(afterUnwatch);

	function afterUnwatch(err){
		res.send();
	}
}
