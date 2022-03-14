//Asynchronous
console.log('Before');
 getUser(1, (user)=> {
    console.log(user)
    //Get the repositories
    getRepositories(user.gitHubUsername, (repos)=>{
       console.log(`repo dari ${user.gitHubUsername} adalah =` , repos)

        getCommits(repos, (commits)=>{
            console.log('repo dari Commit didapat = ', repos[0] )
            console.log('didapati commit berupa', commits )
        })
    })
 });

console.log('After');
// // Synchronous
// console.log('Before');
// const user = getUser(1);
// const repos = getRepositories(user.gitHubUsername);
// const commits = getCommits(repos[0]);
// console.log('after')

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

function getCommits(repo, callback) {
    setTimeout(()=>{
        console.log('Calling Github API...');
        callback(['commit'])
    }, 2000)
}