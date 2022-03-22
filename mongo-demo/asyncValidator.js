const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/tamanBermain',{ 
    useNewUrlParser: true , useUnifiedTopology: true, useFindAndModify: false,
    })
    .then(()=> console.log('Berhasil terkoneksi ke MongoDB...'))
    .catch(err => console.error('Tidak dapat terhubung ke MongoDB...', err));

//ditambah validasi
const dataMuridSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true,
        minlength: 5,
        maxlength: 225,
        // match : /pola/
    },
    category: {
        type: String,
        required: true,
        enum : ['kelas web', 'kelas mobile', 'kelas network']
        
    },
    address: String,
    tags: {
        type: Array,
        validate : {
            isAsync: true,

            validator: function(v, callback) {
                return new Promise (()=> {
                    setTimeout(()=> {
                        // bekerja dengan async sistem
                        resolve ({v && v.length > 0});
                        
                    }, 4000) 
                })
            },
            message: 'A course should have at least one tag.'
        };
    },
    dateJoin: { type: Date, default: Date.now},
    isActiveStudents: Boolean,
    priceJoin : {
        type: Number,
        required: function() {return this.isActiveStudents ;},
        min : 10,
        max : 300,
    }
});

const DataMurid = mongoose.model('dataMurid', dataMuridSchema);

async function createDataMurid() {
    const dataMurid = new DataMurid({
        name: 'Yoga Julian Prasutiyo  ',
        category: 'kelas web',
        address: 'Depok, Indonesia',
        //tags: ['Software Engineer kontributor, alamat'],
        isActiveStudents: true,
        priceJoin: 15
    });

    try {
        //await dataMurid.validate();
       const result = await dataMurid.save();
       console.log(result);
    }
    catch (ex) {
        console.log(ex.message);
    }
}
createDataMurid();


//mengambil semua data = find()
/*async function getDataMurids(){
   const dataMurids = await DataMurid.find();
   console.log(dataMurids)
} 
getDataMurids(); */

//meneseleksi dari filter dan count
/*async function getDataMurids(){
   
    const dataMurids = await DataMurid
    .find({ name: 'Yoga Julian Prasutiyo', isActiveStudents: true })
    .limit(10)
    .sort({address: 1})
    //.select({address: 1, tags: 1})
    .countDocuments()
    console.log(dataMurids)
}
getDataMurids(); */



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


/* //Logical Query Operator
async function getDataMurids(){
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
 }

 getDataMurids(); */
 
 // regular Expresiion
 /*async function getDataMurids(){
    const dataMurids = await DataMurid
    // .find({ name: 'Yoga Julian Prasutiyo', isActiveStudents: true }) // filter dari nama dan statusAktif
    //.find({ name: /^Yoga/ }) //mencari dengan kata pertama Yoga
    .find({name: /camila/i})  // yang mengandung kata camila, tanpa memperhatiak huruf besar atau kecil
    //.find({name: /.*Julian*./})  // mengandung kata Julian
    .limit(10)
    .sort({address: 1})
    .select({address: 1, tags: 1})
    console.log(dataMurids)
 }

 getDataMurids(); */

 //pagination
 /*async function getDataMurids(){
    const pageNumber = 2;
    const pageSize = 10
   
    const dataMurids = await DataMurid
    .find({ name: 'Yoga Julian Prasutiyo', isActiveStudents: true })
    .skip((pageNumber - 1) * pageSize)
    .limit(pageSize)
    .sort({address: 1})
    //.select({address: 1, tags: 1})
    .countDocuments()
    console.log(dataMurids)
}
getDataMurids(); */


// Updating a Document 
/* pendekatan pertama
 1. Approach : Query first
 2. findById()
 3. Modify its properties
 4. Save()

 pendekatan yg lainnya
 1. Approach : Update first
 2. Update directly
 3. Optionally : get the updated document */

//pendekatan pertama, Query first
/*async function updateDataMurid(id){
   const dataMurid= await DataMurid.findById(id)
   if (!dataMurid) return;

   dataMurid.isActiveStudents = true;
   dataMurid.name = 'Nama yang lainnya';

   const result = await dataMurid.save()
   console.log(result)
};
updateDataMurid('623344fa40de4d0da4ba794a'); */

//pendekatan lain, Updating first 
/*async function updateDataMurid(id){
    const result= await DataMurid.updateOne( {_id: id}, {
    //gunakan operator update mongoDB
    $set: {
        name: 'Raffa',
        isActiveStudents : false
    }
    });
    console.log(result)
 };
 updateDataMurid('623344fa40de4d0da4ba794a'); */

 //pendekatan lain, Updating first 
 /*async function updateDataMurid(id){
    const result= await DataMurid.findByIdAndUpdate(id, {
    //gunakan operator update mongoDB
    $set: {
        name: 'Prasutiyo',
        isActiveStudents : false
    }
    }, {new: true});
    console.log(result)
 };
 updateDataMurid('6232b189956cb438a85d66e7');*/

 //remove
 async function removeDataMurid(id){
    const result= await DataMurid.findByIdAndRemove(id);
    console.log(result)
 };
 //removeDataMurid('6232b189956cb438a85d66e7');