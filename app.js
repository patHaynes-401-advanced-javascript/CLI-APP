const io = require('socket.io-client');
const socket = io.connect('http://localhost:7890');
const chance = require('chance').Chance();

setInterval(() => {
  socket.emit('log', 'hello!');
}, 1000);

