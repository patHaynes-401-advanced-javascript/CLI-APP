const io = require('socket.io')(7890);

io.on('connection', socket => {
  socket.on('file-read', data => {
    console.log(data);
    socket.broadcast.emit('file-read', data);
  });


  // socket.emit('hello');
  // socket.broadcast.emit('someones_bacon');
  // socket.on('make_me_sandwich', data => {
  //   console.log(data);
  // });
});



