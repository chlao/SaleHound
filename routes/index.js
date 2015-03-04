//'use strict'
mongoose = require('mongoose');
//var sales = require('../sales.json');
var models = require('../models');
var sales = [];
var hodor = [];

exports.view = function(req, res){
	models.Store
		.find()
		.exec(displaySales); 

	function displaySales(err, stores){
		//console.log(stores);
		//console.log(stores[0]["subscribed"]); 
		hodor = stores;
		sales = []; 
		var k = 0; 

		for (i = 0; i < stores.length; i++){
			if (stores[i]["subscribed"]){
				for (j = 0; j < stores[i]["sales"].length; j++){
					//console.log(stores[i]["sales"][j]);
					sales[k] = stores[i]["sales"][j]; 
					k++; 
				}
			}
		}

		for (i = 0; i < sales.length; i++){
			//console.log(sales[i]); 
		}
		//console.log(stores["sales"]); 
		res.render('index', {"sales": sales});
		///res.render('index', sales); 
		//res.render('index', {'stores': {"sales": sales}});
		//res.render('index', {'sales': sales});
	}
};

exports.watch = function(req, res){
	var saleID = req.params.id;
	//console.log(saleID + " watching sale"); 
	// Have added second layer of stores 
	// Need to have store id also 
	console.log(saleID);

	var MyObjectId = mongoose.Types.ObjectId;
	objectID = new MyObjectId(saleID);

	 models.Store.update({"sales._id": saleID}, {
	 	$set : {"sales.$.watched" : 1}
	 }).exec(function(err, result){
	 	console.log("result", result);
	// 	models.Store.findByIdAndUpdate(result[0]._id, {$set : {"sales.watched" : 1}}).exec(function(err, result2){
	// 		console.log("update result", result2);
	 })
	// })
	//.update(/*{"result[0].sales[0].watched":0},*/{$set:{"result[0].sales[0].watched":1}})
	//.exec(afterWatch);

	//models.Store
		//.find({"sales._id": objectID})
		//.find({'sales.watched': 0})
		//.update({"_id": saleID}, {$set:{watched:1}})
		//.update({'subscribed':1},{$set:{'subscribed':0}})
		//.update({$set:{'watched':1}})
		//.update({"_id": saleID},{$set: {"_id.$.watched": 1}})
		//.exec(afterWatch);

	function afterWatch(err){
		/*var k = 0; 

		for (i = 0; i < hodor.length; i++){
			if (hodor[i]["subscribed"]){
				for (j = 0; j < hodor[i]["sales"].length; j++){
					//console.log(stores[i]["sales"][j]);
					sales[k] = hodor[i]["sales"][j]; 
					k++; 
				}
			}
		}
		for (l = 0; l < sales.length; l++){
			console.log(sales[l]); 
			//console.log("HERE");
		}*/
		res.send();
	}
}

// Call this function when the page loads (the "ready" event)
/*
$(document).ready(function() {
	initializePage();
})

/*
function initializePage(){
	//$(".sale").find('button').css('height','50px'); 
	// Expand sales when clicked to reveal more information 
	/*
	$("#saleposting").click(function(e){
		var term = $(this).find(".terms"); 
		if (term.length ==  0){
			//Animate
			$(this).append("<p class="terms"> Terms and Conditions</p>")
		}		
	}); 
	*/

	/* This is supposed to fade a hidden object in and out
	$("#saleposting").mouseenter(function(e){
		$(this).stop(); 
		$(this).fadeOut(0); 
		$(this).fadeIn(); 
	}); 

	$("#saleposting").mouseenter(function(e){
		$(this).stop(); 
		$(this).fadeIn(0); 
		$(this).fadeOut(); 
	}); 
}*/


