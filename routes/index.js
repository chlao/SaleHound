// Get all of our friends (links the pages)
var sales = require('../sales.json');

exports.view = function(req, res){
	console.log(sales);
	res.render('index', sales);
};
