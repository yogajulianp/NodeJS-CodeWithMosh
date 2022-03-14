// //can call API
// const p = Promise.resolve({id:1})
// p.then(result => console.log(result))

// error call API
const p = Promise.reject(new Error(' alasan proses gagal/ditolak adalah karena...'));
p.catch(error => console.log(error));
