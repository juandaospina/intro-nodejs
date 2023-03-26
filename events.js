const EventEmitter = require('events');

const eventServer = new EventEmitter();

eventServer.on('connection', (data) => {
    console.log(`Connection is ready with user ${data.user}`)
})

eventServer.emit('connection', {user: 'jdospina', key: 'jsfiwu92839nsjwd'})