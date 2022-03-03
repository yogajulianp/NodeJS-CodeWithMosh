const http = require('http');

const server = http.createServer((req, res)=>{
    if (req.url === '/') {
        res.write('<h1>Hallo Yoga Julian Prasutiyo <h1> Selamat berhasil buat server dengan NodeJS');
        res.end();
    }

    if (req.url === '/api/database') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});

server.listen(7000);

console.log('server running at port 7000')