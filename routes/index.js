var express = require('express');
var router = express.Router();

/* GET home page. */
router
.get('/', function(req, res, next) {
  res.render('index', { title: 'Express Homepage Art' });
})
.get('/users', function(req, res, next) {
  res.end('Express');
});
module.exports = router;
