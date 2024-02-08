// we call the events 
// EventEmitter is a class it contain functions and properties and module.
const EventEmitter = require('events');
const { emit } = require('process');
// to use this eventemitter we need first to create an event instant.
// emitter is an objet has a banch of methodes.
const emitter = new EventEmitter();
// register a listener addlistener and on function both do the same
// emitter.addListener()
//          NameOfListener  callbackfunction
emitter.on('messageLogged', function () {
    console.log("listener called");
})

// raise event
emitter.emit('messageLogged');
// order are important.