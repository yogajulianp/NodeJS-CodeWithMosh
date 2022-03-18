const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/mongo-exercises', {
    useNewUrlParser : true,
    useUnifiedTopology : true,
    })
    .then(()=> console.log('Berhasil terkoneksi ke mongoDB...'))
    .catch(err => console.error('Tidak dapat terhubung ke mongoDB...', err));

const dataCourseSchema = new mongoose.Schema({
    name : String,
    author : String,
    tags : [String],
    date : { type: Date, default: Date.now},
    isPublished : Boolean,
    price: Number,
});

const DataCourse = mongoose.model('courses', dataCourseSchema)

//mengambil semua data = find();
async function getDataCourses(){
    return await DataCourse
    .find({ isPublished : true, tags: 'backend'})
    .sort({name: 1})
    .select({ name: 1, author: 1})
}

async function run(){
    const showCourses = await getDataCourses();
    console.log(showCourses)
}

run()