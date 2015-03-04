$(document).ready(function() {
	initializePage();
})

function initializePage(){
	$(".sale input").click(function(e){
		e.preventDefault();
	
		var saleID = $(this).closest('.sale').attr('id');
		var idNum = saleID.substr('sale'.length);

		//console.log(idNum + "watchsale");

		$.post('/'+idNum+'/watch', function(){
			window.location.href = '/';
		});
		
	});
}