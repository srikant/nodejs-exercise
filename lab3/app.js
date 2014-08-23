// Twilio Credentials 
var accountSid = 'AC57609046f582712192a62fdcf7debb8c';
var authToken = '16eaf736b442da3039edb8318f2980d5'; 

var client = require('twilio')(accountSid, authToken);
 

client.sendMessage({
	to: '+918341271419',
	from: '+14435696682',
	body: 'Hello Srikant'
}, function(err, message) { 
	console.log(message.sid); 
});