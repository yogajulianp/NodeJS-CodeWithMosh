// getCustomer(1, (customer) => {
//     console.log('Customer: ', customer);
//     if (customer.isGold) {
//       getTopMovies((movies) => {
//         console.log('Top movies: ', movies);
//         sendEmail(customer.email, movies, () => {
//           console.log('Email sent...')
//         });
//       });
//     }
//   });


  //ke promise
// getCustomer(1)
//     .then(customer=> getTopMovies(customer.isGold))
//     .then(movies=> sendEmail(movies))
//     .then(()=>console.log('Email terkirim...'))

//ke async await

async function notifikasiCustomer(){
    try {
        const customer = await getCustomer(1);
        console.log('Customer: ', customer);
        if (customer.isGold) {
          const movies = await getTopMovies();
          console.log('Top movies: ', movies);
          await sendEmail(customer.email, movies)
          console.log('Email terkirim...');
        }
    }
    catch (err){
            console.log('Error berupa :', err.message)
     } 
}
notifikasiCustomer()


  function getCustomer(id) {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve({ 
              id: 1, 
              name: 'Yoga Julian Prasutiyo', 
              isGold: true, 
              email: 'email' 
            });
          }, 4000);  
    });
  }
  
  function getTopMovies() {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(['movie1', 'movie2']);
          }, 4000);
    });
  }
  
  function sendEmail(email, movies) {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve();
          }, 4000);
      });
  }