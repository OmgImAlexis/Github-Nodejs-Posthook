var githubhook = require('githubhook');
var exec = require('exec');
var github = githubhook({
    secret: "SuperSecretCodeThingy"
});

github.listen();

github.on('*', function(event, repo, ref, data) {
    console.log('Event: ' + event + " Repo: " + repo + " Ref: " + ref + " Data: " + data);
});

github.on('push:repo-name:refs/heads/master', function(event, repo, ref, data) {
    console.log('new push');
    exec('cd /root/www/  && git pull', function(error, stdout, stderr) {
        if (error) console.log(error);
        else console.log('We didn\'t fuck up and we pulled the new changes. c: ');
    });
});