function Gitviewer(wrapName){
}

Gitviewer.prototype.exports.getRepos = function(){
  $.get('https://api.github.com/users/kathembe?access_token=' + apiKey).then(function(response) {
  });
};
exports.gitviewerModule = Gitviewer;
