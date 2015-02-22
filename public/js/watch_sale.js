$(document).ready(function() {
	initializePage();
})

function initializePage(){
	$("#watch").click(function(e){
		e.preventDefault();
		var saleID = $(this).closest('.sale').attr('id');
		$.post('/'+saleID+'/watch', function(){
			window.location.href = '/';
		});
		
	});
}