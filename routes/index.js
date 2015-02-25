//'use strict'

//var sales = require('../sales.json');
var models = require('../models'); 

exports.view = function(req, res){
	models.Store
		.find()
		.exec(displaySales); 

	function displaySales(err, stores){
		//console.log(stores);
		//console.log(stores[0]["subscribed"]); 

		var sales = []; 
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
			console.log(sales[i]); 
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
	models.Store
		.find({"_id": saleID})
		.update({_id: saleID}, {$set:{watched:1}})
		//.update({"watched":0},{$set:{"watched":1}})
		.exec(afterWatch);

	function afterWatch(err){
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


