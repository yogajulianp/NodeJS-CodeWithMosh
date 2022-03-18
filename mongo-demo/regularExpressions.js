const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/tamanBermain')
    .then(()=> console.log('Berhasil terkoneksi ke MongoDB...'))
    .catch(err => console.error('Tidak dapat terhubung ke MongoDB...', err));

const dataMuridSchema = new mongoose.Schema({
    name: String,
    address: String,
    tags: [String],
    dateJoin: { type: Date, default: Date.now},
    isActiveStudents: Boolean
});

const DataMurid = mongoose.model('dataMurid', dataMuridSchema);

async function createDataMurid() {
    const dataMurid = new DataMurid({
        name: 'Camila ',
        address: 'Jakarta, Indonesia',
        tags: ['Management', 'alamat'],
        isActiveStudents: true
    });

    const result = await dataMurid.save();
    console.log(result);
}
//createDataMurid();

//mengambil semua data = find()
/*async function getDataMurids(){
   const dataMurids = await DataMurid.find();
   console.log(dataMurids)
} */

//meneseleksi dari filter
// async function getDataMurids(){
   
//     const dataMurids = await DataMurid
//     .find({ name: 'Yoga Julian Prasutiyo', isActiveStudents: true })
//     .limit(10)
//     .sort({address: 1})
//     .select({address: 1, tags: 1})
//     console.log(dataMurids)
//  }

//getDataMurids();



 //Komparasi atau perbandingan pada queri operator
    // eq (equal)
    // ne (not equal)
    // gt (greater than)
    // gte (greater than or equal to)
    // lt (less than)
    // lte (less than or equal to)
    // in
    // nin

    //contoh Perbandingan Query
   /* async function getDataMurids(){
   
        const dataMurids = await DataMurid
        //.find({ name: 'Yoga Julian Prasutiyo', isActiveStudents: true }) // filter dari nama dan statusAktif
        // .find({ priceHouse : { $gte: 600000000 } })  // filter dari rumah yang >= dari 500 juta
        // .find({ priceHouse: { $gte: 600000000, $lte: 955000000}}) //filter dari rumah antara 600 juta ke 955 juta
        .find({ priceHouse : { $in: [600000000, 955000000, 15650000000 ] } }) // filter untuk rumah harga 600 juta, atau 955 juta atau 1565 juta
        .limit(10)
        .sort({address: 1})
        .select({address: 1, tags: 1})
        console.log(dataMurids)
     }

     getDataMurids(); */


//Logical Query Operator
/*async function getDataMurids(){
    // or
    // and
   
    const dataMurids = await DataMurid
    // .find({ name: 'Yoga Julian Prasutiyo', isActiveStudents: true }) // filter dari nama dan statusAktif
    .find()
    .or([ { name: 'Yoga Julian Prasutiyo'} , {isActiveStudents: true } ])
    .and([ ])
    .limit(10)
    .sort({address: 1})
    .select({address: 1, tags: 1})
    console.log(dataMurids)
 } */
 
 // regular Expresiion
 async function getDataMurids(){
    const dataMurids = await DataMurid
    // .find({ name: 'Yoga Julian Prasutiyo', isActiveStudents: true }) // filter dari nama dan statusAktif
    
    .find({name: /camila/i})  // yang mengandung kata camila, tanpa memperhatiak huruf besar atau kecil
    //.find({name: /.*Julian*./})  // mengandung kata Julian
    .limit(10)
    .sort({address: 1})
    .select({address: 1, tags: 1})
    console.log(dataMurids)
 }

 getDataMurids();
 



