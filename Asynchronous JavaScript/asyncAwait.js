//Asynchronous
console.log('Before');
//  getUser(1, (user)=> {
//     //Get the repositories
//     getRepositories(user.gitHubUsername, (repos)=>{
//         console.log(`repo dari ${user.gitHubUsername} adalah =` , repos)

//         getCommits(repos, (commits)=>{
//             console.log('repo dari Commit didapat = ', repos[0] )
//             console.log('didapati commit berupa', commits )
//         })
//     })
//  });


getUser(1)
    //.then(user => console.log(user));
    .then(user => getRepositories(user.gitHubUsername))
    .then(repos => getCommits(repos[1]))
    .then(commits => console.log('commits berupa', commits))
    .catch(err => console.log('Error', err.messages))

// Async and await Approach
async function displayCommits(){
    try {
        const user = await getUser(1);
        const repos = await getRepositories(user.gitHubUsername);
        const commits = await getCommits(repos[1]);
        console.log(commits);
    }
    catch (err) {
        console.log('Error berupa :', err.message)
    }
}
displayCommits();

console.log('After');

function getUser(id) {
    return new Promise((resolve, reject)=> {
        //menjalankan pekerjaan async
        setTimeout(()=> {
            console.log('Membaca dari sebuah data base...')
            resolve({id: id, gitHubUsername: 'yogajulianp'})
        },3000)
    });
}

function getRepositories(username) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('mengambil data repositori dari API Github')
            resolve(['repo1', 'repo2', 'repo3']);
            //reject(new Error('Tidak bisa berhasil menemukan data repositori'))
        }, 3000)
    });
}

function getCommits(repo) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('Calling Github API...');
            resolve(['commit'])
        }, 2000)
    });
}












