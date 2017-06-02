var express = require('express');
var router = express.Router();
var github = require('octonode');

router.get('/', function(req, res, next) {
  var client = github.client();
  client.get('/users/ktokarz289', {}, function(err, status, body, headers) {
    if (!err) {
      res.render('projects', { title: "Projects", user: body});
    }
  });
});

module.exports = router;