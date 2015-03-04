$(document).ready(function() {
	initializePage();
})

function initializePage(){
	$(".sale input").click(function(e){

		e.preventDefault();
	
		var saleID = $(this).closest('.sale').attr('id');
		var idNum = saleID.substr('sale'.length);

		$.post('/salewatch/'+idNum+'/unwatch', function(){
			window.location.href = '/salewatch';
		});
		
	});
}