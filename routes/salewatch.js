//var salewatch = require('../sales.json');
var models = require('../models'); 

exports.view = function(req, res){
	//res.render('salewatch', salewatch);
	models.Sale
		.find()
		.exec(displaySales);

	function displaySales(err, sales){
		//console.log(sales);
		res.render('salewatch', {'sales': sales});
	}
}

exports.unwatchSale = function(req, res){
	var saleID = req.params.id;
	//console.log("saleID from routes: " + saleID);
	// Not being reached, nor printing
	//var idNum = saleID.substr('sale'.length);

	models.Sale
		.find({"_id": saleID})
		.update({_id: saleID}, {$set:{watched:0}})
		//.update({"watched":1},{$set:{"watched":0}})
		.exec(afterUnwatch);

	function afterUnwatch(err){
		res.send();
	}
}
	