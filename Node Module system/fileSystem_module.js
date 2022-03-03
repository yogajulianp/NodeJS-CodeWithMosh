const fileSystem = require('fs');

// const files = fileSystem.readdirSync('./');
// console.log(files);

fileSystem.readdir('./', function(err, files) {
    if (err) console.log("Error =", err);
    else console.log("result =", files)
})