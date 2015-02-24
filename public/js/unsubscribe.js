$(document).ready(function() {
	initializePage();
})

function initializePage(){
	$('.store a').click(function(e) {
		e.preventDefault();
		var storeID = $(this).closest('.store').attr('id');
		console.log(storeID);
		var stores_div = $('#store' + storeID);

		$.post('/mystores/'+storeID+'/unsubscribe', function(){
			window.location.href = '/mystores';
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