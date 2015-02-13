var news_feed = require('../news_feed.json');

exports.index = function(req, res){
	res.render("homepage", {"feed": news_feed} )
}
