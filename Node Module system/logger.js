const EventEmitterClass = require('events');
//const emitterClass = new EventEmitterClass();

var url = 'http://mylogger.io/log';

class Logger extends EventEmitterClass {
    log(message) {
        //send HTTP request
        console.log(message)
    
        //Raise an event
        //before// emitterClass.emit('messageLogged', {id: 1, url: 'http//'} );
        this.emit('messageLogged', {id: 1, url: 'http//'} );
    }
}

// module.exports = log;
module.exports = Logger;