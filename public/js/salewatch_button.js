//'use strict';
//var models = require('../models'); 

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

function initializePage(){
	/*$("#unwatch").click(function(e){
		e.preventDefault();
		var saleID = $(this).closest('.sale').attr('id');
		$.post('/salewatch/'+saleID+'/unwatch', function(){
			window.location.href = '/salewatch';
		});
		
	});*/

	$('.sale input').click(function(e) {
		e.preventDefault();
		var saleID = $(this).closest('.sale').attr('id');
		var idNum = saleID.substr('sale'.length);
		var sales_div = $('#sale' + idNum);

		//console.log(idNum + " unwatchsale")
		//alert("Tap unwatch again to unwatch the sale."); 		

		//sales_div.find('.butt').click(function(e){
			//console.log(saleID);

			$.post('/salewatch/'+idNum+'/unwatch', function() {
				window.location.href = '/salewatch';
			});
		//});

	});
}