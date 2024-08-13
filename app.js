var name = `Manash`;

var a = 10;
var b = 20;

console.log(name);
console.log(a + b);

// console.log(global);
console.log(this); // empty object. In browser it is global object

console.log(globalThis);

/**
 * node app.js to execute this file
 * it will pass the code to the v8 engine
 * v8 engine will convert the code to Machine & Assembly code
 * at last it will be converted to Binary code which machine understands
 * the name of the Global object in nodeJS is `global`
 * it is given to us by NodeJS, not by v8 Engine
 */
