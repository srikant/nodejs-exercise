var express = require('express');
var app = express();
//middleware
// parse urlencoded request bodies into req.body
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());
//app.use(express.urlencoded()); << Not works

app.get('/', function(request, response){
	//response.send('hello world from express!');
	// output json formatted data
	response.send({
		foo: 'bar'
	});
});
//http://localhost:3000/doStuff
app.post('/doStuff', function(request, response){
	var param = request.param('foo');
	response.send({
		foo:param
	}); 
 });

app.listen(3000);