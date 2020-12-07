var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/work', function(req, res, next) {
  res.render('profile/work');
});

router.get('/education', function(req, res, next) {
  res.render('profile/education');
});

router.get('/hobbies', function(req, res, next) {
  res.render('profile/hobbies');
});


module.exports = router;
