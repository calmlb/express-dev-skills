var express = require('express');
var router = express.Router();

let kids = [
  {name: "Ella", age: 4},
  {name: "Ava", age: 1},
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/kids', function(req, res, next) {
  res.render('These are my " + kids.name)
  )}



module.exports = router;
