const p1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log('Asynchronou operasi ke 1...')
        resolve(1)
        //reject(new Error('karena ada sesuatu yang tidak bisa dicompile..'))
    }, 3000);
})

const p2 = new Promise((resolve)=>{
    setTimeout(() => {
        console.log('Asynchronou operasi ke 2...')
        resolve('nilai ke 2 berhasil dicapai')
    }, 3000);
})

Promise.race([p1, p2])
.then(result=> console.log(result))
.catch(err => console.log('Error', err.message));