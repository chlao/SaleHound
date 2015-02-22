$(document).ready(function() {
	initializePage();
})

function initializePage(){
	$("#subscribe").click(function(e){
		e.preventDefault();
		var storeID = $(this).closest('.store').attr('id');
		console.log(storeID);
		$.post('/allstores/'+storeID+'/subscribe', function(){
			window.location.href = '/allstores';
		});
		
	});
}