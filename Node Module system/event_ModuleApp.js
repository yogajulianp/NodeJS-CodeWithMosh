const EventEmitterClass = require('events');
//const emitterClass = new EventEmitterClass();

const Logger = require('./logger');
const logger = new Logger();


logger.on('messageLogged', (argument) => {
    console.log('Listener called', argument);
})


logger.log('message');



//Register a listener
// before //
//     emitterClass.on('messageLogged', (argument) => {
//     console.log('Listener called', argument);
// })




// emit is making a noise, produce - signalling aplication