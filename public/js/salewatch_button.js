//'use strict';
//var models = require('../models'); 

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

function initializePage(){
	$("#unwatch").click(function(e){
		e.preventDefault();
		var saleID = $(this).closest('.sale').attr('id');
		//console.log(saleID);
		$.post('/salewatch/'+saleID+'/unwatch', function(){
			window.location.href = '/salewatch';
		});
		
	});
}


