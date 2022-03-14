console.log('Before');
 getUser(1, getRepositories);
console.log('After');
//==================
function getRepositories(user) {
    console.log('user =', user)
    //Get the repositories
    getRepositories(user.gitHubUsername, getCommits)
}

function getCommits(repos) {
    console.log("repo dari database adalah =" , repos)
    getCommits(repo, displayCommits)
}

function displayCommits(commits) {
    console.log("commits", commits);
}

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


//output
/*Before
After
Membaca dari sebuah data base...
user = { id: 1, gitHubUsername: 'yogajulianp' }
mengambil data repositori dari API Github
repo dari database adalah = [ 'repo1', 'repo2', 'repo3' ] */