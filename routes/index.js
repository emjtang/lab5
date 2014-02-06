// Get all of our friend data
var data = require('../data.json');
// loads JASON database into data

exports.view = function(req, res){
	console.log(data);
	res.render('index', data);	// JSON object
};