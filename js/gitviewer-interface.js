var Gitviewer = require('./../js/gitviewer.js').gitviewerModule;

var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#gitUsername').click(function() {
    click.preventDefault();
    var username = $('#username').val();
    var output = getRepos(username);
    output.forEach(function(element) {
      $('#showRepos').append('<li>' + element + '</li>');
    });

  });
});
