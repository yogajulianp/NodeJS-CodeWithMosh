//membuat promise
const p = new Promise((resolve, reject)=> {
    // memulai pekerjaan async
    
    setTimeout(() => {
        //resolve(1); // pending => resolved, fulfilled
        reject(new Error('message karena tidak lengkap')); // pending => rejected
    }, 3000)
    console.log('akhir')
});


// cara mengkonsumsi promise
p
    .then(result => console.log('hasil adalah', result))
    .catch(err => console.log('Error berupa', err.message))