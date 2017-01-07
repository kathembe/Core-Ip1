var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#gitUsername').click(function() {
    click.preventDefault();
    var username = $('#username').val();
    var output = getRepos(username);

  });
});
