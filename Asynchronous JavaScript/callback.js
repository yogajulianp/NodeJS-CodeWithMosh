console.log('Before');
 getUser(1, (user)=> {
   console.log('user =', user)

    //Get the repositories
    getRepositories(user.gitHubUsername, (repos)=>{
        console.log(`repo dari ${user.gitHubUsername} adalah =` , repos)
    })
 });
console.log('After');


function getUser(id, callback) {
    setTimeout(()=> {
        console.log('Membaca dari sebuah data base...')
        callback({id: id, gitHubUsername: 'yogajulianp'})
    },3000)
}

function getRepositories(username, callback) {
    setTimeout(()=>{
        console.log('mengambil data repositori dari API Github')
        callback(['repo1', 'repo2', 'repo3']);
    }, 3000)
    
}