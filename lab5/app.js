var Person = require('./Person'),
    logger = require('./logger');

var srikant = new Person.Person({
    firstName:'Srikant',
    lastName:'Dhondi',
    age:31,
    knowsNodeJS:true
});

//var l = new logger.Logger();

logger.info('Does '+ srikant.firstName +' know NodeJS ?');
logger.info(srikant.knowsNodeJS ? 'You better believe it!' : 'Nope.');

