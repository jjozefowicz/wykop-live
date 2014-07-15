var express = require('express');
var server = express();
var http = require('http').Server(server);
var socket = require('socket.io')(http);

var events = require('events');
var emitter = new events.EventEmitter();
var wykop = require('./libs/wykop/lib/wykop');

var options = {
    appKey: '',
    secret: ''
};
var client = wykop.createClient(options);

client.on('event_stream', function(item) {
console.log(item);
//process.exit();
    socket.emit('stream', item);
});

// Proxy staticfiles
server.use(express.static(__dirname + '/public'));

// Send index.html
server.get("/", function(req, res) {
	res.sendfile('views/index.html');
});



http.listen(3000);