var zmq 		= require('zmq'),
	socket 		= zmq.socket('req'),
	requests 	= [0,1,2,3,4,5,6,7,8,9];

socket.connect('tcp://localhost:5555');
console.log('Client connected to port 5555');

requests.forEach(function(el, index, arr) {
	var msg = 'request from Client: ' + el
	console.log(msg);
	socket.send(msg);
});

socket.on('message', function(msg){
	console.log('Response: %s', msg.toString());
});