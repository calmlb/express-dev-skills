var express = require('express');
var router = express.Router();

let albumModel = require("../models/albumModel.js")

router.get('/:id', function(req,res) {
    let myname = albumModel.getName(req.params.id)
    let myartist = albumModel.getName(req.params.artist)

    // res.send("you have typed " + req.params.id + " which is album name " + myname) 
    res.render("albuminfo.ejs", {myname, myartist})
})

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('albums.ejs', {albumsArray:albumModel.albumsArray});
});

module.exports = router;
