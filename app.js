const express = require('express');
const app = express();
var socket = require('socket.io');

app.use(express.static('public'));

var server = app.listen(3000, ()=>{
  console.log("Listening on port 3000");
});

// Socket Setup
var io = socket(server);

io.on('connection', function(socket){
  socket.on('chat', (data)=>{
    io.sockets.emit('chat', data);
  })
})