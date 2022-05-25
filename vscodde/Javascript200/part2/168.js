const Emitter = require('events');
const eventConfig = require('./config').events;
const em = new Emitter();

em.on(eventConfig.GREET, ()=> {
    console.log('somewhere, someone said heelo');
});

em.on(eventConfig.GREET, () => {
    console.log('A greeting occurred!');
})

em.emit(eventConfig.GREET);