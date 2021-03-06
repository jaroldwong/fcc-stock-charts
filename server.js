const express = require('express');
const socket = require('socket.io');

const app = express();
const server = app.listen(3000, function() {
  console.log('Server running on port 3000');
})

app.use(express.static('public'));

const io = socket(server);

io.on('connection', (socket => {
  console.log('made socket connection', socket.id);

  socket.on('addStock', function(data){
    io.sockets.emit('stock', data);
  })
}))