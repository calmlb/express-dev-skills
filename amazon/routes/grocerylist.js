var express = require('express');
var router = express.Router();

let groceries = [
    {type: "grains", name: "bread"},
    {type: "fruit", name: "banana"},
    {type: "dairy", name: "milk", name: "cheese"},
  ]

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('grocerylist.ejs', {groceries});
});

module.exports = router;