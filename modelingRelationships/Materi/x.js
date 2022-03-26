//membandingkan antara query performa vs consistency

// Using References (Normalization) -> CONSISTENCY 
// seperti SQL

/*
let author = {
    name:'Yoga Julian P'
}

let course = {
    author : 'id'
}

//Using Embedded Documents (Denormalization) -> PERFORMANCE 
// seperti NoSQL

let course = {
    author : {
        name : 'Yoga Julian P'
    }
}



// Hybrid , mengoptimalkan keduanya
//

let author = {
    name: 'Yoga';
    // 50 other properties
}

let course = {
    author : {
        id: 'reff',
        name: 'Yoga'
    }
}  */