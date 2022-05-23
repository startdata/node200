const utill = require('util');

const name = 'Tony';
const greeting = utill.format('Hello %s', name);
console.log(greeting);