var stores = require('../allstores.json');

exports.view = function(req, res){
	res.render('allstores', stores);
};
