const os = require('os');

var totalMemoryPC = os.totalmem();
var freeMemoryPC = os.freemem();

console.log(`Total Memory Pc =  ${totalMemoryPC}`)
console.log(`Free Memory PC = ${freeMemoryPC}`)