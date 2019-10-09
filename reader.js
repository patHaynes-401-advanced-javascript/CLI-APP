const io = require('socket.io-client');
const socket = io.connect('http://localhost:7890');
const readFile = require('./file-reader');

return readFile(process.argv[2])
  .then(data => {
    socket.emit('file-read', { contents: data, path: process.argv[2] });
  });


