var express = require('express');
var router = express.Router();

let products = [
    {id: "shoes", model: "vans"},
    {id: "shoes", model: "converse"},
    {id: "hats", model: "toque"},
    {id: "hats", model: "cap"},
]


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('products.ejs', {products});
});

module.exports = router;
