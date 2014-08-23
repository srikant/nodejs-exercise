var express = require('express');
var app = express(); 
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());

//middleware
function authUser(request, response, next){
	var user = {
		name: 'Srikant',
		admin: true
	};

	request.user = user;
	next();
}
//app.use(authUser);

app.get('/', function(request, response){ 
	console.log(request.user);
	response.send({
		foo: 'bar2'
	});
}); 
//app.post('/doStuff', authUser, function(request, response, next){
app.post('/doStuff', authUser, function(request, response){

	var param = request.param('foo');
	response.send({
		foo:param,
		isAdmin: request.user.admin
	});
});

app.listen(3000);