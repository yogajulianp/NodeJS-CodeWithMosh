console.log('Before');
const user = getUser(1);
console.log(user);
console.log('After');

function getUser(id) {
    setTimeout(()=> {
        console.log('Membaca dari sebuah data base...')
        return {id: id, gitHubUsername: 'yogajulianp'}
    },3000)
    
    return 1;
}