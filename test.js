var http = require('http').Server();
var io = require('socket.io')(http, {
	"path": '/nodetest/socket.io'
});

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('echo', function(data){
	socket.emit('echo', data);
});
});



http.listen(process.env.PORT || 9999, function(){
  console.log('listening on *:80');
});