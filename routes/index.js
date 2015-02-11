//var source = $("index").html(); 
//var template = Handlebars.compile(source); 

var sales = require('../sales.json');

exports.view = function(req, res){
	console.log(sales);
	res.render('index', sales);
};

//$(".sales").html(template(data)); 
