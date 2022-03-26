// _id: 623f11eee0a2e2df3f34e408

// ada 24 karakter = 12 bytes
// dari 12 bytes
    // 4 bytes pertama : timeStamp
    // 3 bytes kedua : machine identifier
    // 2 bytes ketiga: process identifier
    // 3 bytes terakhir: couter

// 1 bytes = 8 bits
// --contoh pada 1 bytes 
//          maka ada berapa karakter acaknya?
//          ada 2 ^ 8 = 256 karakter
// -- bila contoh pada couter, machine identifier yang ada 3 bytes,(3 bytes = 24 bits)
//          maka masing-masing punya 2 ^ 24 = 16M karakter

const mongoose = require('mongoose');;

//membuat object id secara sendiri, bukan dari driver mongoDB
const id = new mongoose.Types.ObjectId();
console.log(id);
console.log("");
console.log(id.getTimestamp());

console.log("");
//memvalidasi object id, hasil true
const isValid = mongoose.Types.ObjectId.isValid('623f29c1730b150362512842');
console.log(isValid);

console.log("");
//memvalidasi object id, hasil salah
const noValid = mongoose.Types.ObjectId.isValid('1234');
console.log(noValid);

