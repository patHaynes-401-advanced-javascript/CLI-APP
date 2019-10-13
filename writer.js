const io = require('socket.io-client');
const socket = io.connect('http://localhost:7890');
const writeFile = require('./file-writer');


socket.on('write-file', data => {
  return writeFile(data.path, data.contents)
    .then(data => {
      socket.emit('file-saved', data);
    })
    .catch(error => {
      socket.emit('file-error', error);
    });
});


