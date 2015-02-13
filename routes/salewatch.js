var salewatch = require('../salewatch.json'); 

exports.view = function(req, res){
	res.render('salewatch', salewatch);
}; 

