// include fs-extra package
const fs = require("fs-extra");

const source = "/Users/mohpuroh/Documents/Projects/POCs/CoVid/covid19/dist";
const destination = "/Users/mohpuroh/Documents/Projects/POCs/CoVid/githubIO/mohitr-optimus.github.io";

const USER = 'mohitr-optimus';
const PASS = 'test123';
const REPO = 'https://github.com/mohitr-optimus/covid19';
const simpleGit = require('simple-git');
const remote = `https://${USER}:${PASS}@${REPO}`;

try {
    fs.emptyDirSync(`${destination}/js/`);
    fs.emptyDirSync(`${destination}/sourcemaps/`);
    fs.emptyDirSync(`${destination}/style/`);
    fs.copySync(source, destination);
    console.log('Copy completed!')
} catch(err) {
    console.log(`An error occured while copying the folder.: ${err}`)
}

 
simpleGit().cwd(destination).add('./*').commit(`Auto Build Commit-${(new Date()).getTime()}`).push('origin', 'master', function() {
    console.log('Build Code pushed')
});


