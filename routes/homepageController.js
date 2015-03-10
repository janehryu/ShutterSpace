var news_feed = require('../news_feed.json');

exports.index = function(req, res){
	res.render("liked", {"feed": news_feed} )
}

exports.splash = function(req, res) {
	var random_num = Math.random();

	  if(random_num > 0.5){
	    res.render("index");
	  } else{
	    res.render("index_alternate")
  	}
}