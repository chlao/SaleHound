$(document).ready(function() {
	initializePage();
})

function initializePage(){
	$('.store a').click(function(e) {
		e.preventDefault();
		var storeID = $(this).closest('.store').attr('id');
		console.log(storeID + "subscribe");
		var stores_div = $('#store' + storeID);

		$.post('/allstores/'+storeID+'/subscribe', function(){
			window.location.href = '/allstores';
	});

		/*stores_div.find('.subscribe').click(function(e){
			e.preventDefault();
			console.log("Working");
			$.post('/allstores/'+storeID+'/subscribe', function(){
				window.location.href = '/allstores';
			});
		}
	)*/
})}