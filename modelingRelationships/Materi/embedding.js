const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

const authorSchema = new mongoose.Schema({
  name: String,
  bio: String,
  website: String
});

const Author = mongoose.model('Author', authorSchema);

const Course = mongoose.model('Course', new mongoose.Schema({
  name: String,
  authors :[authorSchema]
  
}));

async function createCourse(name, authors) {
  const course = new Course({
    name, 
    authors
  }); 
  
  const result = await course.save();
  console.log(result);
}

async function listCourses() { 
  const courses = await Course.find();
  console.log(courses);
}

async function updateAuthor(courseID) {
  const course = await Course.updateOne({_id: courseID}, {
    $set: {
      'author.name': 67
    }
  });
}

async function addAuthor(courseID, author) {
  const course = await Course.findById(courseID);
  course.authors.push(author);
  course.save();
}

async function removeAuthor(courseID, authorID) {
  const course = await Course.findById(courseID);
  const author = course.authors.id(authorID)
  author.remove();
  course.save();
}

//removeAuthor('623ba57795ce1766079298f9', '623ba901146a215a364df976')




addAuthor('623ba57795ce1766079298f9', new Author({name: 'Yoga J Prasutiyo'}))


//updateAuthor('623b4ca689272789060c68e1')

/*createCourse('Node Course', [
  new Author({ name: 'Yoga' }),
  new Author({ name: 'Camila' })
]); */
