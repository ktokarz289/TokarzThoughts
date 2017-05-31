var express = require('express');
var router = express.Router();
var github = require('octonode');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Tokarz Thoughts' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: "About" });
});

router.get('/projects', function(req, res, next) {
  var client = github.client();
  client.get('/users/ktokarz289/repos', {}, function(err, status, body, headers) {
    if (!err) {
      res.render('projects', { title: "Projects", projects: body});
    }
  });
});

module.exports = router;
