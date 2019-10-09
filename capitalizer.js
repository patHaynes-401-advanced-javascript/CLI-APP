const io = require('socket.io-client');
const socket = io.connect('http://localhost:7890');


socket.on('file-read', data => {
  socket.emit('file-write', { contents: uppercase(data.contents), path: data.path });
});

function uppercase(string) {
  const result = string.toUpperCase();
  return result;
}