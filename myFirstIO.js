var fs = require('fs');
var buffer = fs.readFileSync(process.argv[2]);
var string = buffer.toString();
var arrayLinea = string.split('\n');
console.log(arrayLinea.length - 1);