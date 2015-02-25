//var salewatch = require('../sales.json');
var models = require('../models'); 

exports.view = function(req, res){
	//res.render('salewatch', salewatch);
	models.Store
		.find()
		.exec(displaySales);



	function displaySales(err, stores){
		//console.log(sales);

		var sales = []; 
		var k = 0; 

		for (i = 0; i < stores.length; i++){
			for (j = 0; j < stores[i]["sales"].length; j++){
				sales[k] = stores[i]["sales"][j]; 
				k++
			}
		}

		res.render('salewatch', {'sales': sales});
	}
}

exports.unwatchSale = function(req, res){
	var saleID = req.params.id;
	//console.log("saleID from routes: " + saleID);
	// Not being reached, nor printing
	//var idNum = saleID.substr('sale'.length);

	models.Store
		.find({"_id": saleID})
		.update({_id: saleID}, {$set:{watched:0}})
		//.update({"watched":1},{$set:{"watched":0}})
		.exec(afterUnwatch);

	function afterUnwatch(err){
		res.send();
	}
}
	