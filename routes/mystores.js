var stores = require('../stores.json');

exports.view = function(req, res){
	res.render('mystores', stores);
};
