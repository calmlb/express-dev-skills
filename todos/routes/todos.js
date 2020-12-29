var express = require('express');
var router = express.Router();

let todos = [
    {id: "0", todo: "teach class", done: "yes"},
    {id: "1", todo: "take a nap", done: "no"},
    {id: "2", todo: "party with wife", done: "not likely"},
]

function getOne(id) {
    
}

router.get('/:id', function(req,res) {
    res.send("you typed " + req.params.id)
})

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('todo-index.ejs' {todos});
});

module.exports = router;