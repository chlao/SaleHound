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
	//console.log(saleID + " watching sale"); 
	// Have added second layer of stores 
	// Need to have store id also 
	console.log(saleID);

	var MyObjectId = mongoose.Types.ObjectId;
	objectID = new MyObjectId(saleID);

	 models.Store
	 	.update({"sales._id": saleID}, {$set : {"sales.$.watched" : 0}})
	 	.exec(function(err, result){
	 		res.send();
	 	//	console.log("result", result);
	 })
}
	