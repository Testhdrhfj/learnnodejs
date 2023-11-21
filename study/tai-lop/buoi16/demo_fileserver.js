var events = require('events');
var eventEmitter = new events.EventEmitter();

var myEventHandler = function () {
  console.log('I hear a scream!');
}

eventEmitter.on('noscream', myEventHandler);

eventEmitter.emit('noscream');