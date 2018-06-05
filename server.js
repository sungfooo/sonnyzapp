var express = require('express');

var app = express();

app.use(express.static('public'))

app.get("/", function(req, res){
	res.sendfile('index.html', { root: __dirname + "/public" } )
})

var port = process.env.PORT || 3001;
app.listen(port);
console.log("starting..." + port)
