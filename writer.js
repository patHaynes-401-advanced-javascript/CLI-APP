const io = require('socket.io-client');
const socket = io.connect('http://localhost:7890');
const fs = require('fs').promises;


socket.on('write-file', data => {
  return writeFile(data.path, data.contents)
    .then(data => {
      socket.emit('file-saved', data);
    })
    .catch(error => {
      socket.emit('file-error', error);
    });
});


function writeFile(path, contents) {
  return fs.writeFile(path, contents)
    .then(contents => {
      return contents;
    });

}

